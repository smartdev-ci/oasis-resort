import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Sparkles, Send, X, Mic, ImagePlus } from 'lucide-react';
import { type Property } from '../data/properties';
import { type ChatMessage } from '../data/ai';
import { CompactCard } from './PropertyCard';
import { useI18n } from '../i18n';
import { sendToMistral, type StructuredMistralResponse } from '../services/mistral';

interface AIAssistantProps {
  open: boolean;
  onToggle: () => void;
  properties: Property[];
  onView?: (property: Property) => void;
}

// Type for internal message with additional metadata
interface AIMessage extends ChatMessage {
  properties?: string[];
  chips?: string[];
}

export function AIAssistant({ open, onToggle, properties, onView }: AIAssistantProps) {
  const { t, locale } = useI18n();
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const [useRealAI] = useState(true); // Toggle between real API and fallback
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Custom Markdown component for better rendering
  const CustomMarkdown = ({ content }: { content: string }) => (
    <ReactMarkdown
      components={{
        // Headings
        h1: ({ node, ...props }) => (
          <h1 {...props} className="font-bold text-lg my-2 text-primary-700" />
        ),
        h2: ({ node, ...props }) => (
          <h2 {...props} className="font-bold text-base my-2 text-primary-700" />
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props} className="font-semibold text-sm my-1.5 text-primary-600" />
        ),
        // Paragraphs
        p: ({ node, ...props }) => (
          <p {...props} className="my-1.5 text-sm leading-relaxed" />
        ),
        // Lists
        ul: ({ node, ...props }) => (
          <ul {...props} className="list-disc pl-5 space-y-1 my-1" />
        ),
        ol: ({ node, ...props }) => (
          <ol {...props} className="list-decimal pl-5 space-y-1 my-1" />
        ),
        li: ({ node, ...props }) => (
          <li {...props} className="my-0.5" />
        ),
        // Links
        a: ({ node, ...props }) => (
          <a
            {...props}
            className="text-primary-500 underline hover:text-primary-600 font-medium"
          />
        ),
        // Code
        code: ({ node, ...props }) => (
          <code
            {...props}
            className="bg-primary-50 px-2 py-0.5 rounded text-xs font-mono"
          />
        ),
        pre: ({ node, ...props }) => (
          <pre
            {...props}
            className="bg-primary-50/50 p-3 rounded-lg overflow-x-auto my-2 text-xs"
          />
        ),
        // Blockquotes
        blockquote: ({ node, ...props }) => (
          <blockquote
            {...props}
            className="border-l-2 border-primary-200 pl-3 py-1 my-2 italic text-primary-500"
          />
        ),
        // Horizontal rule
        hr: ({ node, ...props }) => (
          <hr {...props} className="border-primary-100 my-3" />
        ),
        // Strong
        strong: ({ node, ...props }) => (
          <strong {...props} className="font-semibold text-primary-700" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );

  // Greeting message reacts to locale
  useEffect(() => {
    setMessages([
      {
        id: 'm1',
        role: 'assistant',
        content: t('ai_greeting'),
        timestamp: Date.now(),
        chips: [t('suggestion_beach'), t('suggestion_business'), t('suggestion_romantic'), t('suggestion_family')],
      },
    ]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  // Fallback AI response function (used when API is not available or fails)
  const getFallbackResponse = (text: string): { content: string; chips: string[]; properties?: string[] } => {
    const lower = text.toLowerCase();
    if (lower.includes('cheaper') || lower.includes('moins cher') || lower.includes('budget') || lower.includes('abordable'))
      return { content: `${t('ai_found')} 5 ${t('ai_found_cheaper')}`, chips: [...(locale === 'fr' ? ['Moins de 35 000 FCFA', 'Avec petit-déjeuner', 'Proche aéroport', 'Avec piscine'] : ['Under 35,000 FCFA', 'Add breakfast', 'Near airport', 'With pool'])], properties: ['p2', 'p4', 'p6'] };
    if (lower.includes('breakfast') || lower.includes('petit-déjeuner') || lower.includes('petit dejeuner'))
      return { content: t('ai_found_breakfast'), chips: locale === 'fr' ? ['Options moins chères', 'Proche aéroport', 'Tout voir', '5 étoiles'] : ['Cheaper options', 'Near airport', 'Show all', '5-star only'], properties: ['p1', 'p2', 'p5'] };
    if (lower.includes('5-star') || lower.includes('5 star') || lower.includes('5 étoile') || lower.includes('luxe') || lower.includes('luxury'))
      return { content: t('ai_found_5star'), chips: locale === 'fr' ? ['Options moins chères', 'Avec petit-déjeuner', 'Familles', 'Plus de détails'] : ['Cheaper options', 'Add breakfast', 'Family friendly', 'More details'], properties: ['p1', 'p5'] };
    if (lower.includes('beach') || lower.includes('plage') || lower.includes('ocean') || lower.includes('mer') || lower.includes('assinie'))
      return { content: `${t('ai_found')} 12 ${t('ai_options_airport')}`, chips: locale === 'fr' ? ['Options moins chères', 'Avec petit-déjeuner', 'Hôtels 5 étoiles', 'Plus de détails'] : ['Cheaper options', 'Add breakfast', 'Show only 5-star', 'More details'], properties: ['p2'] };
    if (lower.includes('business') || lower.includes('affaires') || lower.includes('travail') || lower.includes('airport') || lower.includes('aéroport'))
      return { content: `${t('ai_found')} 8 ${t('ai_found_business')}`, chips: locale === 'fr' ? ['Options moins chères', 'Avec petit-déjeuner', 'Plus proche aéroport', 'Avec parking'] : ['Cheaper options', 'Add breakfast', 'Closer to airport', 'With parking'], properties: ['p1', 'p6'] };
    if (lower.includes('romantic') || lower.includes('romantique') || lower.includes('couple') || lower.includes('honeymoon') || lower.includes('lune de miel'))
      return { content: `${t('ai_found')} 6 ${t('ai_found_romantic')}`, chips: locale === 'fr' ? ['Moins de 100 000 FCFA', 'Avec spa', 'Vue mer uniquement', 'Tout inclus'] : ['Under 100,000 FCFA', 'With spa', 'Ocean view only', 'All-inclusive'], properties: ['p2'] };
    if (lower.includes('family') || lower.includes('famille') || lower.includes('enfants') || lower.includes('kids') || lower.includes('villa'))
      return { content: `${t('ai_found')} 5 ${t('ai_found_family')}`, chips: locale === 'fr' ? ['Moins de 80 000 FCFA', 'Avec piscine enfants', '5+ chambres', 'Animaux acceptés'] : ['Under 80,000 FCFA', 'With kids pool', '5+ bedrooms', 'Pet friendly'], properties: ['p4'] };
    if (lower.includes('last-minute') || lower.includes('dernière minute') || lower.includes('tonight') || lower.includes('ce soir') || lower.includes('ce soir'))
      return { content: `${t('ai_found')} 4 ${t('ai_found_lastminute')}`, chips: locale === 'fr' ? ['Tout voir', 'Moins de 50 000 FCFA', 'Proche aéroport', 'Note 4+'] : ['Show all', 'Under 50,000 FCFA', 'Near airport', '4+ stars'], properties: ['p6'] };
    return { content: t('ai_found_default'), chips: locale === 'fr' ? ['Options moins chères', 'Avec petit-déjeuner', 'Familles', 'Hôtels 5 étoiles'] : ['Cheaper options', 'Add breakfast', 'Family friendly', 'Show only 5-star hotels'], properties: ['p1', 'p2', 'p3'] };
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: AIMessage = { 
      id: `u-${Date.now()}`, 
      role: 'user', 
      content: text, 
      timestamp: Date.now() 
    };
    
    // Add user message to chat
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    
    try {
      // Get chat history (excluding system message and greeting)
      const chatHistory = messages
        .filter(msg => msg.role === 'user' || msg.role === 'assistant')
        .map(msg => ({ role: msg.role as 'user' | 'assistant', content: msg.content }));
      
      // Try to use the real Mistral API if enabled and available
      let structuredResponse: StructuredMistralResponse;
      
      if (useRealAI) {
        structuredResponse = await sendToMistral(text, locale as 'fr' | 'en', chatHistory);
      } else {
        // Fallback to mock responses
        const fallback = getFallbackResponse(text);
        structuredResponse = {
          content: fallback.content,
          properties: fallback.properties,
          chips: fallback.chips,
        };
      }
      
      // Create AI message with structured data
      const aiMsg: AIMessage = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: structuredResponse.content,
        timestamp: Date.now(),
        properties: structuredResponse.properties,
        chips: structuredResponse.chips,
      };
      
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      // Fallback to mock response if API fails
      const fallback = getFallbackResponse(text);
      const aiMsg: AIMessage = {
        id: `a-${Date.now()}`,
        role: 'assistant',
        content: fallback.content,
        timestamp: Date.now(),
        properties: fallback.properties,
        chips: fallback.chips,
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setTyping(false);
      if (!open) setUnread((u) => u + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={onToggle}
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-primary-500 hover:bg-primary-400 text-white shadow-soft-2xl transition-all hover:scale-105 active:scale-95 ring-focus animate-fade-in-up"
        >
          <div className="relative">
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gold text-2xs font-bold flex items-center justify-center">
                {unread}
              </span>
            )}
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-sm font-semibold leading-tight">{t('ai_float_title')}</div>
            <div className="text-2xs text-white/70 leading-tight">{t('ai_float_subtitle')}</div>
          </div>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 sm:inset-x-auto sm:bottom-6 sm:right-6 z-50 sm:w-[400px] lg:w-[440px]">
          <div className="sm:rounded-3xl bg-white shadow-soft-2xl overflow-hidden flex flex-col h-[85vh] sm:h-[600px] animate-slide-up sm:animate-scale-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary-300 border-2 border-primary-500" />
                </div>
                <div>
                  <div className="text-white font-semibold leading-tight">{t('brand')} AI</div>
                  <div className="text-white/70 text-2xs leading-tight flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-300 animate-pulse" />
                    {t('ai_online')}
                  </div>
                </div>
              </div>
              <button onClick={onToggle} className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors ring-focus">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex-shrink-0 flex items-center justify-center mr-2 mt-1 shadow-soft">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[85%] ${msg.role === 'user' ? 'order-1' : ''}`}>
                    <div className={`px-4 py-3 text-sm ${msg.role === 'user' ? 'bg-primary-500 text-white rounded-2xl rounded-tr-md' : 'bg-white text-primary-600 rounded-2xl rounded-tl-md shadow-soft'}`}>
                      {msg.role === 'user' ? (
                        <span className="leading-relaxed">{msg.content}</span>
                      ) : (
                        <CustomMarkdown content={msg.content} />
                      )}
                    </div>
                    {msg.properties && msg.properties.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {msg.properties
                          .map((id) => properties.find((p) => p.id === id))
                          .filter((p): p is Property => Boolean(p))
                          .slice(0, 2)
                          .map((property) => (
                            <CompactCard key={property.id} property={property} onClick={onView} />
                          ))}
                      </div>
                    )}
                    {msg.chips && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {msg.chips.map((chip) => (
                          <button key={chip} onClick={() => sendMessage(chip)} className="px-2.5 py-1 rounded-full bg-primary-50 hover:bg-primary-100 text-primary-500 text-2xs font-medium transition-colors ring-focus">
                            {chip}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex items-center gap-2 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-soft">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-md shadow-soft px-4 py-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-300 animate-typing" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-300 animate-typing" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-300 animate-typing" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-primary-50">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <button type="button" className="w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center text-primary-400 hover:bg-primary-50 transition-colors ring-focus">
                  <ImagePlus className="w-4.5 h-4.5" />
                </button>
                <div className="flex-1 flex items-center bg-primary-50/60 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-primary-300/30 transition-shadow">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t('ai_placeholder')}
                    className="flex-1 bg-transparent text-sm text-primary-600 placeholder:text-primary-300 ring-focus focus:outline-none"
                  />
                  <button type="button" className="text-primary-400 hover:text-primary-500 transition-colors">
                    <Mic className="w-4.5 h-4.5" />
                  </button>
                </div>
                <button type="submit" disabled={!input.trim()} className="w-9 h-9 flex-shrink-0 rounded-full bg-primary-500 hover:bg-primary-400 text-white flex items-center justify-center transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ring-focus">
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="text-center text-2xs text-primary-300 mt-2">{t('ai_footer')}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
