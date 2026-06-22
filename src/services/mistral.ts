/**
 * Service for interacting with Mistral AI API
 */

// API endpoint for Mistral chat completion
const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';

// System prompt for the Oasis Ressort AI assistant
const SYSTEM_PROMPT_FR = `Tu es l'assistant IA d'Oasis Ressort, la plateforme de réservation de voyage en Afrique.
Ton rôle est d'aider les utilisateurs à trouver les meilleurs hébergements, restaurants et activités en Afrique.

Règles à suivre :
1. Réponds toujours en français de manière claire et amicale
2. Sois concis mais complet dans tes réponses
3. Si l'utilisateur demande des hôtels, mentionne les critères importants : prix, localisation, équipements (piscine, Wi-Fi, Mobile Money)
4. Si l'utilisateur demande des restaurants, suggère des établissements avec bonne note et mentionne le type de cuisine
5. Pour les activités, propose des idées basées sur la destination
6. Si tu ne connais pas la réponse, dis-le honnêtement et suggère de contacter le support
7. Tu peux utiliser des emojis pour rendre la conversation plus amicale

Règles de formatage :
- Inclus les IDs des propriétés recommandées entre crochets : [p1, p2, p3]
- Ajoute des suggestions de filtrage sous forme de puces : - [Options moins chères] - [Avec piscine]
- Utilise des sections claires avec des titres en gras

Contexte :
- Oasis Ressort opère en Côte d'Ivoire et dans 8 pays africains
- Nous proposons des hôtels, villas, restaurants et activités touristiques
- Paiements acceptés : Orange Money, MTN Money, Moov Money, Wave, cartes bancaires
- Service 24/7 avec concierge IA

Exemple de réponse : 
J'ai trouvé 5 hôtels à Abidjan qui correspondent à vos critères.

**Hôtels recommandés** : [p1, p2]

- [Options moins chères]
- [Avec piscine]
- [Proche aéroport]
`;

const SYSTEM_PROMPT_EN = `You are the AI assistant for Oasis Ressort, the Africa travel booking platform.
Your role is to help users find the best accommodations, restaurants, and activities across Africa.

Rules to follow:
1. Always respond in English in a clear and friendly manner
2. Be concise but thorough in your responses
3. When users ask about hotels, mention important criteria: price, location, amenities (pool, Wi-Fi, Mobile Money)
4. When users ask about restaurants, suggest well-rated establishments and mention the cuisine type
5. For activities, propose ideas based on the destination
6. If you don't know the answer, admit it honestly and suggest contacting support
7. You can use emojis to make the conversation more friendly

Formatting rules:
- Include recommended property IDs in brackets: [p1, p2, p3]
- Add filter suggestions as bullet points: - [Cheaper options] - [With pool]
- Use clear sections with bold headings

Context:
- Oasis Ressort operates in Ivory Coast and 8 African countries
- We offer hotels, villas, restaurants, and tourist activities
- Accepted payments: Orange Money, MTN Money, Moov Money, Wave, credit cards
- 24/7 service with AI concierge

Example response:
I found 5 hotels in Abidjan that match your criteria.

**Recommended hotels**: [p1, p2]

- [Cheaper options]
- [With pool]
- [Near airport]
`;

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface MistralResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Interface pour la réponse structurée retournée par sendToMistral
export interface StructuredMistralResponse {
  content: string;
  properties?: string[];
  chips?: string[];
}

/**
 * Extract property IDs from Mistral response text
 * Looks for patterns like [p1, p2, p3]
 */
function extractPropertyIds(text: string): string[] {
  const match = text.match(/\[([^\]]+)\]/);
  if (!match) return [];
  
  // Extract IDs and clean them
  const ids = match[1].split(',').map(id => id.trim());
  
  // Filter to only valid property IDs (p1, p2, etc.)
  return ids.filter(id => /^p\d+$/.test(id));
}

/**
 * Extract chip suggestions from Mistral response text
 * Looks for patterns like - [chip text]
 */
function extractChips(text: string): string[] {
  const chipMatches = text.match(/-\s*\[([^\]]+)\]/g);
  if (!chipMatches) return [];
  
  return chipMatches.map(m => {
    // Remove - [ and ]
    const cleaned = m.replace(/-\s*\[|\]/g, '');
    return cleaned;
  });
}

/**
 * Send a message to Mistral AI and get a structured response
 * @param userMessage - The user's message
 * @param locale - The current locale (fr or en)
 * @param history - Optional chat history for context
 * @returns Structured response with content, properties, and chips
 */
export async function sendToMistral(
  userMessage: string,
  locale: 'fr' | 'en' = 'fr',
  history: Array<{ role: 'user' | 'assistant'; content: string }> = []
): Promise<StructuredMistralResponse> {
  // Get API key from environment variable
  const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
  
  if (!apiKey) {
    console.error('Mistral API key is not configured. Please set VITE_MISTRAL_API_KEY in your .env file.');
    return {
      content: locale === 'fr'
        ? "Désolé, je ne peux pas répondre pour le moment. Veuillez configurer la clé API Mistral."
        : "Sorry, I can't respond right now. Please configure the Mistral API key.",
      properties: [],
      chips: [],
    };
  }

  try {
    // Build the messages array with system prompt and history
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: locale === 'fr' ? SYSTEM_PROMPT_FR : SYSTEM_PROMPT_EN,
      },
      ...history.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      {
        role: 'user',
        content: userMessage,
      },
    ];

    const response = await fetch(MISTRAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'mistral-tiny', // or 'mistral-small', 'mistral-medium'
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Mistral API error:', response.status, errorData);
      throw new Error(`Mistral API error: ${response.status}`);
    }

    const data: MistralResponse = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      const responseText = data.choices[0].message.content;
      
      // Try to parse as JSON first (if Mistral returns structured data)
      try {
        const parsed = JSON.parse(responseText);
        if (parsed.content && typeof parsed.content === 'string') {
          return {
            content: parsed.content,
            properties: parsed.properties || [],
            chips: parsed.chips || [],
          };
        }
      } catch (e) {
        // Not JSON, continue with text parsing
      }
      
      // Parse the text to extract properties and chips
      return {
        content: responseText,
        properties: extractPropertyIds(responseText),
        chips: extractChips(responseText),
      };
    }
    
    throw new Error('No response from Mistral API');
  } catch (error) {
    console.error('Error calling Mistral API:', error);
    // Return a fallback structured response
    return {
      content: locale === 'fr'
        ? "Désolé, je n'ai pas pu obtenir de réponse. Veuillez réessayer plus tard."
        : "Sorry, I couldn't get a response. Please try again later.",
      properties: [],
      chips: [],
    };
  }
}

export default {
  sendToMistral,
};
