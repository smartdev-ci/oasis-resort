export type Locale = "fr" | "en";

export const translations = {
  fr: {
    // Brand
    brand: "Oasis Ressort",
    tagline: "Votre compagnon IA pour voyager en Afrique",

    // Header / Nav
    nav_discover: "Découverte",
    nav_hotels_residences: "Hôtels / Résidences",
    nav_restaurants: "Restaurants",
    nav_experiences: "Expériences",
    nav_help: "Aide",
    nav_signin: "Connexion",
    nav_ask_ai: "Demander à l'IA",
    nav_tourist_sites: "Sites touristiques",

    // Hero
    hero_title: "Votre Compagnon IA",
    hero_title_highlight: "pour l'Afrique",
    hero_subtitle: "Décrivez votre voyage idéal. On s'occupe du reste.",
    hero_placeholder:
      "Trouvez-moi un hôtel en bord de mer à Assinie pour 3 nuits à moins de 100 000 FCFA",
    hero_search: "Rechercher",
    hero_try_voice: "Essayez la recherche vocale",
    hero_cities: "villes africaines",
    hero_properties: "Propriétés",
    hero_accuracy: "Précision IA",
    hero_scroll: "Défiler pour explorer",
    hero_ai_badge: "Planification de voyage par IA",

    // Quick suggestions
    suggestion_beach: "Escapade plage",
    suggestion_business: "Voyage d'affaires",
    suggestion_romantic: "Week-end romantique",
    suggestion_family: "Vacances en famille",
    suggestion_last_minute: "Réservation de dernière minute",
    suggestion_beach_prompt:
      "Trouvez-moi un hôtel en bord de mer avec vue sur l'océan pour 3 nuits à moins de 90 000 FCFA",
    suggestion_business_prompt:
      "J'ai besoin d'un hôtel d'affaires près de l'aéroport d'Abidjan avec Wi-Fi rapide et salle de conférence",
    suggestion_romantic_prompt:
      "Planifiez un week-end romantique pour deux avec spa et vue mer à moins de 200 000 FCFA",
    suggestion_family_prompt:
      "Réservez une villa familiale avec piscine et jardin pour 5 personnes à moins de 80 000 FCFA par nuit",
    suggestion_last_minute_prompt:
      "Montrez-moi les hôtels disponibles pour cette nuit à Abidjan avec réservation instantanée",

    // AI Discovery
    discovery_badge: "Sélectionné par l'IA pour vous",
    discovery_title: "Recommandé par votre IA",
    discovery_subtitle:
      "Basé sur vos préférences, vos réservations passées et la disponibilité en temps réel dans 8 villes africaines.",
    discovery_view_all: "Voir toutes les recommandations",
    discovery_ai_insight: "Aperçu IA :",
    discovery_match: "match",
    discovery_ai_text:
      "Vous réservez habituellement des hôtels avec piscine et accès à l'aéroport. L'Assinie Beach Resort correspond à 94% de vos habitudes de voyage.",

    // Smart Map
    map_badge: "Géo-intelligence IA",
    map_title: "Explorez l'Afrique en toute confiance",
    map_subtitle:
      "Votre IA met en évidence les zones sûres, les quartiers touristiques, les zones d'affaires et les quartiers familiaux.",
    map_ai_highlights: "Zones IA",
    map_search_btn: "Chercher des séjours à",
    map_properties: "propriétés disponibles",

    // Map area labels
    area_business: "Quartiers d'affaires",
    area_tourist: "Zones touristiques",
    area_nightlife: "Vie nocturne",
    area_family: "Familles",
    area_beachfront: "Bord de mer",
    area_heritage: "Patrimoine",
    area_areas: "zones",

    // Conversational section
    conv_badge: "Réservation conversationnelle",
    conv_title: "Pas de filtres. Pas de formulaires.",
    conv_title_highlight: "Juste la conversation.",
    conv_subtitle:
      "Votre assistant IA comprend le langage naturel. Affinez votre recherche par des questions — comme parler à un ami expert local.",
    conv_online: "En ligne",

    // Feature section
    feat_badge: "Pourquoi Oasis Ressort",
    feat_title: "La façon intelligente de voyager en Afrique",
    feat_subtitle:
      "Construit de zéro avec l'IA au cœur — pas ajoutée comme une fonctionnalité.",
    feat_f1_title: "Une IA qui comprend l'intention",
    feat_f1_desc:
      "Décrivez votre voyage en langage naturel. Pas de menus déroulants, pas de filtres sans fin — juste la conversation.",
    feat_f2_title: "Mobile Money natif",
    feat_f2_desc:
      "Payez avec Orange Money, MTN Money, Moov Money, Wave ou carte. Conçu pour l'Afrique, utilisé partout.",
    feat_f3_title: "Séjours africains vérifiés",
    feat_f3_desc:
      "Chaque propriété est contrôlée. L'analyse des avis par IA remplace le bruit par la clarté.",
    feat_f4_title: "Réservation instantanée",
    feat_f4_desc:
      "Pas d'allers-retours. Confirmez, payez et obtenez un concierge de voyage instantanément.",
    feat_f5_title: "Concierge IA disponible 24h/24",
    feat_f5_desc:
      "Du transfert aéroport aux réservations de restaurant, votre assistant IA reste avec vous tout au long du voyage.",
    feat_f6_title: "Accès multi-plateforme",
    feat_f6_desc:
      "Rejoignez votre concierge sur le web, l'application mobile ou WhatsApp. Où que vous soyez, Oasis Ressort est là.",

    // Property card
    card_book: "Réserver",
    card_view: "Voir",
    card_compare: "Comparer",
    card_selected: "Sélectionné",
    card_ask_ai: "Demander à l'IA",
    card_per_night: "/ nuit",
    card_only_left: "Plus que",
    card_only_left2: "disponibles",
    card_mobile_money: "Mobile Money",
    card_sold_out: "Complet",

    // Search results
    search_found: "résultats trouvés",
    search_ai_found: "L'IA a trouvé",
    search_ai_options: "options correspondant à vos préférences",
    search_ai_priority:
      "Basé sur votre demande, j'ai priorisé les propriétés avec Wi-Fi rapide, proximité aéroport et Mobile Money.",
    search_filter_all: "Tout",
    search_filter_cheaper: "Options moins chères",
    search_filter_5star: "5 étoiles seulement",
    search_filter_breakfast: "Avec petit-déjeuner",
    search_filter_family: "Familles",
    search_filter_airport: "Proche aéroport",
    search_filter_mobile: "Mobile Money accepté",
    search_filter_last: "Dernière minute",
    search_filters: "Filtres IA :",
    search_no_results: "Aucun résultat trouvé",
    search_no_results_sub:
      "Essayez de demander à l'IA des alternatives ou ajustez vos filtres.",
    search_map: "Carte",
    search_list: "Liste",
    search_tag_wifi: "Wi-Fi rapide",
    search_tag_airport: "Proche aéroport",
    search_tag_mobile: "Mobile Money",
    search_tag_stars: "Note 4.5+",

    // Property details
    details_back: "Retour",
    details_virtual_tour: "Visite virtuelle 360°",
    details_ai_summary: "Résumé généré par IA",
    details_review_analysis: "Analyse des avis IA",
    details_overall_sentiment: "Sentiment global",
    details_analyzed: "Analysé à partir de",
    details_reviews: "avis",
    details_strengths: "Points forts",
    details_weaknesses: "Points faibles",
    details_by_guest: "Sentiment par type de voyageur",
    details_amenities: "Équipements",
    details_payment: "Méthodes de paiement acceptées",
    details_guests: "Voyageurs",
    details_nights: "Nuits",
    details_service_fee: "Frais de service",
    details_total: "Total",
    details_book_now: "Réserver maintenant",
    details_rooms_left: "Seulement",
    details_rooms_left2: "chambres restantes à ce prix",
    details_cancellation: "Annulation gratuite jusqu'à 48h avant l'arrivée",
    details_tour_title: "Visite virtuelle 360° de la chambre",
    details_tour_subtitle:
      "Explorez la chambre sous tous les angles. Faites glisser pour pivoter.",
    details_loading_360: "Chargement de l'expérience 360°...",
    details_rooms_count: "chambres",
    details_type: "Type",
    details_ai_badge: "Badge IA",
    details_rating: "Note",
    details_price: "Prix",
    details_location: "Emplacement",
    details_mobile_money: "Mobile Money",
    details_accepted: "Accepté",
    details_not_available: "Non disponible",
    details_ai_summary_col: "Résumé IA",
    details_sentiment: "Sentiment",
    details_amenities_count: "Équipements",

    // Checkout
    checkout_confirm: "Confirmez votre séjour",
    checkout_step_property: "Propriété",
    checkout_step_room: "Chambre",
    checkout_step_payment: "Paiement",
    checkout_choose_room: "Choisissez votre chambre",
    checkout_payment_method: "Choisissez votre méthode de paiement",
    checkout_checkin: "Arrivée",
    checkout_checkout: "Départ",
    checkout_tomorrow: "Demain",
    checkout_in_days: "Dans",
    checkout_days: "jours",
    checkout_rooms_left: "chambres restantes",
    checkout_ai_tip: "Conseil IA :",
    checkout_ai_tip_text:
      "Cet hôtel est complet le week-end. Pensez à réserver maintenant — seulement",
    checkout_ai_rec: "Recommande l'IA :",
    checkout_ai_room_rec:
      "La chambre Deluxe offre le meilleur rapport qualité-prix — vue piscine, balcon et minibar inclus.",
    checkout_card_number: "Numéro de carte",
    checkout_card_expiry: "MM / AA",
    checkout_card_cvc: "CVV",
    checkout_mobile_placeholder:
      "Numéro Mobile Money (ex. +225 07 00 00 00 00)",
    checkout_mobile_hint:
      "Vous recevrez une demande de confirmation sur votre téléphone pour approuver le paiement.",
    checkout_security:
      "Les paiements sont chiffrés et sécurisés. Oasis Ressort ne stocke jamais vos coordonnées bancaires.",
    checkout_continue: "Continuer",
    checkout_pay: "Payer",
    checkout_processing: "Traitement en cours...",
    checkout_price_summary: "Récapitulatif du prix",
    checkout_for_nights: "nuits",
    checkout_ask_breakfast: "Le petit-déjeuner est-il inclus ?",
    checkout_ask_installments: "Puis-je payer en plusieurs fois ?",
    checkout_ask_transfer: "Le transfert aéroport est-il disponible ?",
    checkout_ask_placeholder: "Demander à l'IA...",
    checkout_ai_assistant: "Assistant IA",
    checkout_ai_here:
      "Je suis là si vous avez des questions. Besoin d'aide avec les dates, le paiement ou des demandes spéciales ?",
    checkout_confirmed_title: "Réservation confirmée !",
    checkout_confirmed_text: "Votre séjour à",
    checkout_confirmed_text2:
      "est confirmé. Votre concierge IA de voyage est prêt.",
    checkout_confirmed_checkin: "Arrivée",
    checkout_confirmed_checkout: "Départ",
    checkout_confirmed_room: "Chambre",
    checkout_confirmed_total: "Total payé",
    checkout_opening_concierge: "Ouverture de votre concierge de voyage IA...",

    // Compare
    compare_back: "Retour aux résultats",
    compare_add_properties: "Ajoutez des propriétés à comparer",
    compare_add_sub:
      "Sélectionnez au moins 2 propriétés depuis les résultats de recherche pour voir une comparaison IA.",
    compare_ai_title: "Analyse de comparaison IA",
    compare_ai_text: "J'ai analysé",
    compare_ai_properties: "propriétés dans",
    compare_ai_locations: "emplacements.",
    compare_ai_rec:
      "Chacune offre une valeur distincte — voici ma recommandation basée sur vos préférences de voyage.",
    compare_cheapest: "Le moins cher",
    compare_highest_rated: "Mieux noté",
    compare_best_business: "Meilleur pour les affaires",
    compare_best_family: "Meilleur pour les familles",
    compare_best_luxury: "Meilleur pour le luxe",

    // Concierge
    concierge_confirmed: "Votre réservation est confirmée",
    concierge_title: "Bienvenue dans votre Concierge IA de Voyage",
    concierge_subtitle: "Je suis là pour rendre votre séjour à",
    concierge_subtitle2:
      "inoubliable. Du transfert aéroport aux réservations, demandez simplement.",
    concierge_web: "Web",
    concierge_app: "Application mobile",
    concierge_whatsapp: "WhatsApp",
    concierge_personalized: "Personnalisé pour votre voyage",
    concierge_book: "Réserver maintenant",
    concierge_booked: "Réservé",
    concierge_from: "à partir de",
    concierge_free: "Gratuit",
    concierge_ai_title: "Conseils IA pour votre voyage",
    concierge_ai_1:
      "Votre vol arrive à 15h00. Je recommande de réserver le transfert aéroport maintenant pour éviter les files.",
    concierge_ai_2:
      'Un restaurant populaire "Le N\'dolé" est à 800m de votre hôtel. Parfait pour le dîner ce soir.',
    concierge_ai_3:
      "Ce week-end : Festival de musique d'Assinie Beach. À 2km de votre hôtel.",
    concierge_chat_title: "Votre Concierge IA",
    concierge_available: "Disponible 24h/24",
    concierge_chat_1: "Excellent choix ! Votre séjour à",
    concierge_chat_2: "est confirmé. Je suis là pour vous aider.",
    concierge_chat_3:
      "Voulez-vous que je réserve votre transfert aéroport ? C'est à 25 min de l'aéroport.",
    concierge_chat_4:
      "Oui s'il vous plaît ! Et des recommandations de restaurants ?",
    concierge_chat_5:
      "Parfait ! J'ai organisé votre transfert. Pour le dîner, je recommande 3 spots locaux :",
    concierge_chat_6:
      "1. Le N'dolé — Cuisine ivoirienne (800m)\n2. La Baignoire — Fine cuisine française (1,2km)\n3. Chez Ramage — Fruits de mer au bord du lagon (2km)",
    concierge_chat_placeholder: "Demandez à votre concierge...",
    concierge_trip: "Votre voyage",
    concierge_property_label: "Propriété",
    concierge_city: "Ville",
    concierge_checkin: "Arrivée",
    concierge_services: "Services",
    concierge_booked_count: "réservés",

    // Concierge services
    service_airport_title: "Transfert aéroport",
    service_airport_desc:
      "Réservez une voiture privée depuis l'aéroport Félix Houphouët-Boigny jusqu'à votre hôtel. 25 minutes de trajet.",
    service_taxi_title: "Réservation de taxi",
    service_taxi_desc:
      "Service de taxi à la demande avec des chauffeurs locaux vérifiés. Espèces ou Mobile Money.",
    service_restaurant_title: "Recommandations de restaurants",
    service_restaurant_desc:
      "Restaurants locaux les mieux notés à moins de 2 km. Cuisine ivoirienne, française et internationale.",
    service_events_title: "Événements locaux",
    service_events_desc:
      "3 événements ce week-end : musique live, exposition d'art et festival gastronomique.",
    service_tours_title: "Activités touristiques",
    service_tours_desc:
      "Visites guidées de la plage d'Assinie, du Parc national du Banco et des marchés locaux.",
    service_sim_title: "Carte SIM locale",
    service_sim_desc:
      "Recevez une carte SIM avec data à votre hôtel. Orange ou MTN disponible.",

    // AI Assistant
    ai_greeting:
      "Bonjour, je suis votre compagnon IA de voyage Oasis Ressort. Décrivez le voyage dont vous rêvez et je trouverai les séjours parfaits en Afrique.",
    ai_online: "En ligne · Compagnon IA de voyage",
    ai_found: "J'ai trouvé",
    ai_options_airport:
      "options correspondant à vos préférences. Voici les meilleures options basées sur les vues océan, l'accès piscine et le prix.",
    ai_found_business:
      "hôtels business près de l'aéroport d'Abidjan. Tous ont Wi-Fi rapide, salles de conférence et navettes aéroport.",
    ai_found_romantic:
      "escapades romantiques parfaites pour les couples. J'ai filtré par vues océan, spa et balcons privés.",
    ai_found_family:
      "options familiales avec piscines, jardins et chambres familiales. Basé sur vos réservations passées, vous adorerez ces options.",
    ai_found_lastminute:
      "hôtels disponibles ce soir à Abidjan avec réservation instantanée. Les prix sont 15% moins chers que d'habitude.",
    ai_found_cheaper:
      "options plus abordables à moins de 50 000 FCFA par nuit. Toutes très bien notées et avec Mobile Money accepté.",
    ai_found_breakfast:
      "Filtré pour afficher uniquement les propriétés avec petit-déjeuner compris. 4 options correspondent.",
    ai_found_5star:
      "Voici les hôtels 5 étoiles les mieux notés dans votre zone. Tous notés 4,7+ avec un service exceptionnel.",
    ai_found_default:
      "J'ai analysé 247 propriétés dans 8 villes africaines. Basé sur votre demande, voici les meilleures correspondances.",
    ai_chip_cheaper: "Options moins chères",
    ai_chip_breakfast: "Avec petit-déjeuner",
    ai_chip_family: "Familles",
    ai_chip_5star: "Hôtels 5 étoiles",
    ai_chip_show_more: "Voir plus",
    ai_chip_near_airport: "Proche aéroport",
    ai_chip_beach: "Plage",
    ai_chip_romantic: "Romantique",
    ai_chip_family_vacation: "Vacances en famille",
    ai_placeholder: "Posez une question sur votre voyage...",
    ai_footer:
      "L'IA suggère séjours, activités et plus. Propulsé par l'intelligence Oasis Ressort.",
    ai_float_title: "Demander à l'IA Oasis",
    ai_float_subtitle: "Toujours disponible",

    // AI response chips
    ai_chips_beach: [
      "Options moins chères",
      "Avec petit-déjeuner",
      "Hôtels 5 étoiles",
      "Plus de détails",
    ],
    ai_chips_business: [
      "Options moins chères",
      "Avec petit-déjeuner",
      "Plus proche aéroport",
      "Avec parking",
    ],
    ai_chips_romantic: [
      "Moins de 100 000 FCFA",
      "Avec spa",
      "Vue mer uniquement",
      "Tout inclus",
    ],
    ai_chips_family: [
      "Moins de 80 000 FCFA",
      "Avec piscine enfants",
      "5+ chambres",
      "Animaux acceptés",
    ],
    ai_chips_last_minute: [
      "Tout voir",
      "Moins de 50 000 FCFA",
      "Proche aéroport",
      "Note 4+",
    ],
    ai_chips_cheaper: [
      "Moins de 35 000 FCFA",
      "Avec petit-déjeuner",
      "Proche aéroport",
      "Avec piscine",
    ],
    ai_chips_breakfast: [
      "Options moins chères",
      "Proche aéroport",
      "Tout voir",
      "5 étoiles",
    ],
    ai_chips_5star: [
      "Options moins chères",
      "Avec petit-déjeuner",
      "Familles",
      "Plus de détails",
    ],
    ai_chips_default: [
      "Options moins chères",
      "Avec petit-déjeuner",
      "Familles",
      "Hôtels 5 étoiles",
    ],

    // Footer
    footer_tagline:
      "La plateforme IA de réservation de voyage en Afrique. Décrivez votre voyage idéal — on s'occupe du reste.",
    footer_discover: "Découverte",
    footer_company: "Entreprise",
    footer_support: "Support",
    footer_discover_links: [
      "Villes populaires",
      "Escapades plage",
      "Hôtels d'affaires",
      "Villas familiales",
      "Séjours nomades digitaux",
    ],
    footer_company_links: [
      "À propos d'Oasis Ressort",
      "Carrières",
      "Presse",
      "Partenaires",
      "Blog",
    ],
    footer_support_links: [
      "Centre d'aide",
      "Sécurité & Confiance",
      "Annulation",
      "Méthodes de paiement",
      "Contact",
    ],
    footer_encrypted: "Paiements chiffrés",
    footer_countries: "8+ pays africains",
    footer_concierge: "Concierge IA 24h/24",
    footer_rights: "© 2026 Oasis Ressort. Tous droits réservés.",
    footer_privacy: "Confidentialité",
    footer_terms: "Conditions",
    footer_cookies: "Cookies",

    // Bottom nav
    nav_home: "Accueil",
    nav_explore: "Explorer",
    nav_trips: "Voyages",
    nav_messages: "Messages",
    nav_profile: "Profil",

    // Sign In page
    signin_title: "Bienvenue chez Oasis Ressort",
    signin_subtitle:
      "Connectez-vous pour accéder à votre compagnon IA de voyage",
    signin_email: "Adresse e-mail",
    signin_password: "Mot de passe",
    signin_forgot: "Mot de passe oublié ?",
    signin_button: "Se connecter",
    signin_create_account: "Créer un compte",
    signin_with_google: "Se connecter avec Google",
    signin_with_facebook: "Se connecter avec Facebook",
    signin_divider: "ou",
    signin_no_account: "Vous n'avez pas de compte ?",
    signin_signup: "S'inscrire",
    signin_error: "E-mail ou mot de passe incorrect",
    signin_remember: "Se souvenir de moi",

    // Sign Up page
    signup_title: "Créer votre compte",
    signup_subtitle:
      "Rejoignez Oasis Ressort et commencez à voyager intelligemment en Afrique",
    signup_name: "Nom complet",
    signup_email: "Adresse e-mail",
    signup_password: "Mot de passe",
    signup_confirm_password: "Confirmer le mot de passe",
    signup_phone: "Numéro de téléphone",
    signup_button: "Créer un compte",
    signup_with_google: "S'inscrire avec Google",
    signup_with_facebook: "S'inscrire avec Facebook",
    signup_divider: "ou",
    signup_already_account: "Vous avez déjà un compte ?",
    signup_signin: "Se connecter",
    signup_error: "Une erreur est survenue lors de l'inscription",
    signup_password_mismatch: "Les mots de passe ne correspondent pas",
    signup_terms: "J'accepte les",
    signup_terms_link: "Conditions générales",
    signup_privacy: "et la",
    signup_privacy_link: "Politique de confidentialité",

    // Tourist sites page
    sites_title: "Sites Touristiques d'Afrique",
    sites_subtitle:
      "Découvrez les merveilles naturelles et culturelles du continent africain.",
    sites_search_placeholder:
      "Rechercher un site touristique, une ville, un pays...",
    sites_badge: "Découverte IA",
    sites_filter_all: "Tous",
    sites_filter_nature: "Nature",
    sites_filter_culture: "Culture",
    sites_filter_plage: "Plages",
    sites_filter_heritage: "Patrimoine",
    sites_filter_wildlife: "Faune",
    sites_no_results: "Aucun site trouvé",
    sites_no_results_sub: "Essayez un autre terme de recherche.",
    sites_learn_more: "En savoir plus",
    sites_book_nearby: "Réserver un séjour",
    sites_ai_pick: "Sélection IA",
    sites_must_see: "Incontournable",
    sites_open_year: "Ouvert toute l'année",
    sites_best_season: "Meilleure saison",
    sites_nearby_hotels: "hôtels à proximité",
    sites_distance: "de la ville",
    sites_entry_fee: "Entrée",
    sites_free: "Gratuit",

    // Room types
    room_standard: "Chambre Standard",
    room_deluxe: "Chambre Deluxe",
    room_suite: "Suite Executive",
    room_bed_queen: "1 Lit Queen",
    room_bed_king: "1 Lit King",
    room_bed_suite: "1 Lit King + Canapé-lit",
    room_feature_city: "Vue sur la ville",
    room_feature_pool: "Vue piscine",
    room_feature_ocean: "Vue océan",
    room_feature_wifi: "Wi-Fi gratuit",
    room_feature_desk: "Bureau de travail",
    room_feature_balcony: "Balcon",
    room_feature_minibar: "Minibar",
    room_feature_living: "Salon",
    room_feature_bath: "Baignoire",
    room_feature_coffee: "Machine à café",
    room_for_nights: "pour",
    room_nights: "nuits",

    // PropertyCard
    card_save: "Sauvegarder",
    card_view_all_images: "Voir tout",

    // SearchResults
    search_query_default:
      "J'ai besoin d'un hôtel calme près de l'aéroport d'Abidjan",
    search_ai_reqs:
      "Basé sur votre demande, j'ai priorisé les propriétés avec Wi-Fi rapide, proximité aéroport et Mobile Money.",
    search_mobile_filters_title: "Filtres IA",
    search_no_results_reset: "Réinitialiser",
    search_results_count: "résultats",
    search_ai_reqs_tag1: "Wi-Fi rapide",
    search_ai_reqs_tag2: "Proche aéroport",
    search_ai_reqs_tag3: "Mobile Money",
    search_ai_reqs_tag4: "Note 4.5+",

    // PropertyDetails
    details_view_all: "Voir tout",
    details_per_night: "/ nuit",
    details_room_counter: "1 / 4 chambres",
    details_room_loading: "Chargement de l'expérience 360°...",

    // Compare
    compare_back_link: "Retour aux résultats",
    compare_analyzed: "J'ai analysé",
    compare_properties_across: "propriétés dans",
    compare_locations: "emplacement(s).",
    compare_recommendation:
      "Chacune offre une valeur distincte — voici ma recommandation basée sur vos préférences de voyage.",
    compare_book: "Réserver maintenant",
    compare_row_rating: "Note",
    compare_row_price: "Prix",
    compare_row_per_night: "/ nuit",
    compare_row_location: "Emplacement",
    compare_row_type: "Type",
    compare_row_mobile: "Mobile Money",
    compare_row_accepted: "Accepté",
    compare_row_not_available: "Non disponible",
    compare_row_ai_summary: "Résumé IA",
    compare_row_sentiment: "Sentiment",
    compare_row_amenities: "Équipements",
    compare_row_amenities_count: "équipements",
    compare_row_ai_badge: "Badge IA",

    // Help page
    help_title: "Centre d'aide",
    help_subtitle: "Nous sommes là pour vous aider",
    help_back: "Retour",
    help_search_placeholder: "Rechercher de l'aide...",
    help_faq: "FAQ",
    help_category_reservations: "Réservations",
    help_category_payments: "Paiements",
    help_category_properties: "Propriétés",
    help_category_account: "Compte",
    help_q1: "Comment modifier une réservation ?",
    help_a1:
      "Vous pouvez modifier votre réservation via votre profil ou en contactant notre service client. Les modifications sont gratuites jusqu'à 48h avant l'arrivée.",
    help_q2: "Puis-je annuler ma réservation ?",
    help_a2:
      "Oui, l'annulation est gratuite jusqu'à 48h avant l'entrée. Après cette période, des frais peuvent s'appliquer.",
    help_q3: "Comment voir mes réservations ?",
    help_a3:
      'Toutes vos réservations sont visibles dans l\'onglet "Mes Voyages" de votre profil.',
    help_q4: "Quels moyens de paiement sont acceptés ?",
    help_a4:
      "Nous acceptons les cartes bancaires, le Mobile Money (Orange Money, MTN Money, Moov, Wave) et les virements.",
    help_q5: "Le paiement Mobile Money est-il sécurisé ?",
    help_a5:
      "Oui, toutes les transactions Mobile Money sont chiffrées et sécurisées par nos partenaires financiers.",
    help_q6: "Puis-je payer en plusieurs fois ?",
    help_a6:
      "Oui, nous proposons des options de paiement en plusieurs fois pour les séjours de plus de 3 nuits.",
    help_q7: "Comment les propriétés sont-elles vérifiées ?",
    help_a7:
      "Chaque propriété est visitée et vérifiée par notre équipe. Nous contrôlons la qualité, la propreté et les équipements.",
    help_q8: "Les photos correspondent-elles à la réalité ?",
    help_a8:
      "Oui, toutes les photos sont récentes et représentent fidèlement les propriétés.",
    help_q9: "Puis-je visiter une propriété avant de réserver ?",
    help_a9:
      "Oui, vous pouvez demander une visite virtuelle 360° ou une visite physique selon disponibilité.",
    help_q10: "Comment réinitialiser mon mot de passe ?",
    help_a10:
      'Utilisez le lien "Mot de passe oublié ?" sur la page de connexion ou contactez notre support.',
    help_q11: "Puis-je modifier mes informations personnelles ?",
    help_a11:
      'Oui, vous pouvez modifier vos informations dans l\'onglet "Mes Infos" de votre profil.',
    help_q12: "Comment supprimer mon compte ?",
    help_a12:
      "Contactez notre service client pour demander la suppression de votre compte.",
    help_contact_title: "Nous contacter",
    help_contact_subtitle:
      "Notre équipe est disponible pour répondre à toutes vos questions.",
    help_contact_email: "Email",
    help_contact_phone: "Téléphone",
    help_contact_chat: "Chat en direct",
    help_contact_chat_desc: "Discutez avec nous en temps réel",
    help_tips_title: "Conseils utiles",
    help_tip1: "Réservez tôt pour obtenir les meilleurs tarifs",
    help_tip2: "Consultez les avis des autres voyageurs",
    help_tip3: "Utilisez les filtres IA pour affiner vos recherches",
    help_no_results: "Aucun résultat trouvé pour votre recherche",

    // Concierge
    concierge_back_home: "Retour à l'accueil",
    concierge_chat_q1:
      "Voulez-vous que je réserve votre transfert aéroport ? C'est à 25 min de l'aéroport.",
    concierge_chat_a1:
      "Oui s'il vous plaît ! Et des recommandations de restaurants ?",
    concierge_chat_q2:
      "Parfait ! J'ai organisé votre transfert. Pour le dîner, je recommande 3 spots locaux :",
    concierge_chat_restaurants:
      "1. Le N'dolé — Cuisine ivoirienne (800m)\n2. La Baignoire — Fine cuisine française (1,2km)\n3. Chez Ramage — Fruits de mer au bord du lagon (2km)",
    concierge_tomorrow: "Demain",

    // Discover
    sites_book_tour: "Demander un tour",

    // Pricing Section
    pricing_saas: 'SOLUTION SAAS ADMIN',
    pricing_title: 'Des tarifs simples pour votre entreprise',
    pricing_subtitle: 'Choisissez le forfait qui correspond le mieux à vos besoins. Tous nos plans incluent l\'accès complet à notre plateforme de gestion.',
    pricing_monthly: 'Mensuel',
    pricing_annual: 'Annuel',
    pricing_save: '-%s',
    pricing_year: 'an',
    pricing_month: 'mois',
    pricing_standard: 'Standard',
    pricing_extra: 'Extra',
    pricing_premium: 'Premium',
    pricing_standard_desc: 'Idéal pour les petites structures',
    pricing_extra_desc: 'Parfait pour les entreprises en croissance',
    pricing_premium_desc: 'Solution complète pour les grandes entreprises',
    pricing_features: 'Fonctionnalités incluses',
    pricing_feature_1: 'Gestion des propriétés illimitée',
    pricing_feature_2: 'Réservations en ligne',
    pricing_feature_3: 'Tableau de bord analytique',
    pricing_feature_4: 'Support technique 24/7',
    pricing_feature_5: 'Intégration Mobile Money',
    pricing_feature_6: 'Gestion des utilisateurs',
    pricing_feature_7: 'API personnalisable',
    pricing_standard_limit: 'Jusqu\'à 50 propriétés',
    pricing_extra_limit: 'Jusqu\'à 200 propriétés',
    pricing_premium_limit: 'Propriétés illimitées',
    pricing_popular: 'Le plus populaire',
    pricing_get_started: 'Commencer maintenant',
    pricing_recommended_for: 'Recommandé pour :',
    pricing_standard_for: 'Petites entreprises et startups',
    pricing_extra_for: 'Entreprises moyennes',
    pricing_premium_for: 'Grandes entreprises et réseaux',
    pricing_guarantee: 'Garantie satisfait ou remboursé sous 30 jours',
  },

  en: {
    // Brand
    brand: "Oasis Ressort",
    tagline: "Your AI travel companion for Africa",

    // Header / Nav
    nav_discover: "Discover",
    nav_hotels_residences: "Hotels / Residences",
    nav_restaurants: "Restaurants",
    nav_experiences: "Experiences",
    nav_help: "Help",
    nav_signin: "Sign in",
    nav_ask_ai: "Ask AI",
    nav_tourist_sites: "Tourist Sites",

    // Hero
    hero_title: "Your AI Travel Companion",
    hero_title_highlight: "for Africa",
    hero_subtitle: "Describe your perfect trip. We'll handle the rest.",
    hero_placeholder:
      "Find me a beachfront hotel in Assinie for 3 nights under 100,000 FCFA",
    hero_search: "Search",
    hero_try_voice: "Try voice search",
    hero_cities: "African cities",
    hero_properties: "Properties",
    hero_accuracy: "AI accuracy",
    hero_scroll: "Scroll to explore",
    hero_ai_badge: "AI-powered travel planning",

    // Quick suggestions
    suggestion_beach: "Beach getaway",
    suggestion_business: "Business trip",
    suggestion_romantic: "Romantic weekend",
    suggestion_family: "Family vacation",
    suggestion_last_minute: "Last-minute booking",
    suggestion_beach_prompt:
      "Find me a beachfront hotel with ocean view for 3 nights under 90,000 FCFA",
    suggestion_business_prompt:
      "I need a business hotel near Abidjan airport with fast Wi-Fi and conference room",
    suggestion_romantic_prompt:
      "Plan a romantic weekend getaway for two with spa and ocean views under 200,000 FCFA",
    suggestion_family_prompt:
      "Book a family-friendly villa with pool and garden for 5 people under 80,000 FCFA per night",
    suggestion_last_minute_prompt:
      "Show me available hotels for tonight in Abidjan with instant booking",

    // AI Discovery
    discovery_badge: "AI-curated for you",
    discovery_title: "Recommended by your AI",
    discovery_subtitle:
      "Based on your preferences, past bookings, and real-time availability across 8 African cities.",
    discovery_view_all: "View all recommendations",
    discovery_ai_insight: "AI Insight:",
    discovery_match: "match",
    discovery_ai_text:
      "You usually book hotels with pools and airport access. Assinie Beach Resort matches 94% of your travel patterns.",

    // Smart Map
    map_badge: "AI-powered geo-intelligence",
    map_title: "Explore Africa with confidence",
    map_subtitle:
      "Your AI highlights safe areas, tourist districts, business zones, and family-friendly neighborhoods.",
    map_ai_highlights: "AI Highlights",
    map_search_btn: "Search stays in",
    map_properties: "properties available",

    // Map area labels
    area_business: "Business District",
    area_tourist: "Tourist Areas",
    area_nightlife: "Nightlife Zones",
    area_family: "Family-Friendly",
    area_beachfront: "Beachfront",
    area_heritage: "Heritage",
    area_areas: "areas",

    // Conversational section
    conv_badge: "Conversational booking",
    conv_title: "No filters. No forms.",
    conv_title_highlight: "Just conversation.",
    conv_subtitle:
      "Your AI travel companion understands natural language. Refine your search through follow-up prompts — like talking to a friend who happens to be a local expert.",
    conv_online: "Online",

    // Feature section
    feat_badge: "Why Oasis Ressort",
    feat_title: "The intelligent way to travel through Africa",
    feat_subtitle:
      "Built from the ground up with AI at the core — not bolted on as a feature.",
    feat_f1_title: "AI that understands intent",
    feat_f1_desc:
      "Describe your trip in natural language. No dropdowns, no endless filters — just conversation.",
    feat_f2_title: "Mobile Money native",
    feat_f2_desc:
      "Pay with Orange Money, MTN Money, Moov Money, Wave, or cards. Built for Africa, used everywhere.",
    feat_f3_title: "Verified African stays",
    feat_f3_desc:
      "Every property is vetted. AI-generated review analysis replaces noise with clarity.",
    feat_f4_title: "Instant booking",
    feat_f4_desc:
      "No back-and-forth. Confirm, pay, and get a travel concierge instantly.",
    feat_f5_title: "Always-on AI concierge",
    feat_f5_desc:
      "From airport transfer to dinner reservations, your AI assistant stays with you throughout the trip.",
    feat_f6_title: "Multi-platform access",
    feat_f6_desc:
      "Reach your concierge on web, mobile app, or WhatsApp. Wherever you are, Oasis Ressort is there.",

    // Property card
    card_book: "Book now",
    card_view: "View",
    card_compare: "Compare",
    card_selected: "Selected",
    card_ask_ai: "Ask AI",
    card_per_night: "/ night",
    card_only_left: "Only",
    card_only_left2: "left",
    card_mobile_money: "Mobile Money",
    card_sold_out: "Sold out",

    // Search results
    search_found: "results found",
    search_ai_found: "AI found",
    search_ai_options: "options matching your preferences",
    search_ai_priority:
      "Based on your query, I've prioritized properties with fast Wi-Fi, airport proximity, and mobile money acceptance.",
    search_filter_all: "All",
    search_filter_cheaper: "Cheaper options",
    search_filter_5star: "5-star only",
    search_filter_breakfast: "Add breakfast",
    search_filter_family: "Family friendly",
    search_filter_airport: "Near airport",
    search_filter_mobile: "Mobile Money accepted",
    search_filter_last: "Last-minute",
    search_filters: "AI filters:",
    search_no_results: "No exact matches found",
    search_no_results_sub:
      "Try asking the AI for alternatives or adjust your filters.",
    search_map: "Map",
    search_list: "List",
    search_tag_wifi: "Fast Wi-Fi",
    search_tag_airport: "Airport nearby",
    search_tag_mobile: "Mobile Money",
    search_tag_stars: "4.5+ stars",

    // Property details
    details_back: "Back",
    details_virtual_tour: "360° Virtual Tour",
    details_ai_summary: "AI-Generated Summary",
    details_review_analysis: "AI Review Analysis",
    details_overall_sentiment: "Overall Sentiment",
    details_analyzed: "Analyzed from",
    details_reviews: "reviews",
    details_strengths: "Strengths",
    details_weaknesses: "Weaknesses",
    details_by_guest: "Sentiment by guest type",
    details_amenities: "Amenities",
    details_payment: "Accepted Payment Methods",
    details_guests: "Guests",
    details_nights: "Nights",
    details_service_fee: "Service fee",
    details_total: "Total",
    details_book_now: "Book now",
    details_rooms_left: "Only",
    details_rooms_left2: "rooms left at this price",
    details_cancellation: "Free cancellation up to 48h before check-in",
    details_tour_title: "360° Virtual Room Tour",
    details_tour_subtitle:
      "Explore the room from every angle. Drag to rotate and discover the space.",
    details_loading_360: "Loading 360° experience...",
    details_rooms_count: "rooms",
    details_type: "Type",
    details_ai_badge: "AI Badge",
    details_rating: "Rating",
    details_price: "Price",
    details_location: "Location",
    details_mobile_money: "Mobile Money",
    details_accepted: "Accepted",
    details_not_available: "Not available",
    details_ai_summary_col: "AI Summary",
    details_sentiment: "Sentiment",
    details_amenities_count: "Amenities",

    // Checkout
    checkout_confirm: "Confirm your stay",
    checkout_step_property: "Property",
    checkout_step_room: "Room",
    checkout_step_payment: "Payment",
    checkout_choose_room: "Choose your room",
    checkout_payment_method: "Choose payment method",
    checkout_checkin: "Check-in",
    checkout_checkout: "Check-out",
    checkout_tomorrow: "Tomorrow",
    checkout_in_days: "In",
    checkout_days: "days",
    checkout_rooms_left: "rooms left",
    checkout_ai_tip: "AI tip:",
    checkout_ai_tip_text:
      "This hotel gets fully booked on weekends. Consider booking now — only",
    checkout_ai_rec: "AI recommends:",
    checkout_ai_room_rec:
      "The Deluxe Room offers the best value — pool view, balcony, and minibar included.",
    checkout_card_number: "Card number",
    checkout_card_expiry: "MM / YY",
    checkout_card_cvc: "CVC",
    checkout_mobile_placeholder:
      "Mobile money number (e.g. +225 07 00 00 00 00)",
    checkout_mobile_hint:
      "You'll receive a confirmation prompt on your phone to approve the payment.",
    checkout_security:
      "Payments are encrypted and secured. Oasis Ressort never stores your card or PIN details.",
    checkout_continue: "Continue",
    checkout_pay: "Pay",
    checkout_processing: "Processing payment...",
    checkout_price_summary: "Price summary",
    checkout_for_nights: "nights",
    checkout_ask_breakfast: "Is breakfast included?",
    checkout_ask_installments: "Can I pay in installments?",
    checkout_ask_transfer: "Is airport transfer available?",
    checkout_ask_placeholder: "Ask AI...",
    checkout_ai_assistant: "AI Assistant",
    checkout_ai_here:
      "I'm right here if you have any questions. Need help with dates, payment, or special requests?",
    checkout_confirmed_title: "Booking Confirmed!",
    checkout_confirmed_text: "Your stay at",
    checkout_confirmed_text2:
      "is confirmed. Your AI travel concierge is ready.",
    checkout_confirmed_checkin: "Check-in",
    checkout_confirmed_checkout: "Check-out",
    checkout_confirmed_room: "Room",
    checkout_confirmed_total: "Total paid",
    checkout_opening_concierge: "Opening your AI travel concierge...",

    // Compare
    compare_back: "Back to results",
    compare_add_properties: "Add properties to compare",
    compare_add_sub:
      "Select at least 2 properties from search results to see an AI-powered comparison.",
    compare_ai_title: "AI Comparison Analysis",
    compare_ai_text: "I've analyzed",
    compare_ai_properties: "properties across",
    compare_ai_locations: "locations.",
    compare_ai_rec:
      "Each offers distinct value — here's my recommendation based on your travel preferences.",
    compare_cheapest: "Most affordable",
    compare_highest_rated: "Highest rated",
    compare_best_business: "Best for business",
    compare_best_family: "Best for families",
    compare_best_luxury: "Best for luxury",

    // Concierge
    concierge_confirmed: "Your booking is confirmed",
    concierge_title: "Welcome to your AI Travel Concierge",
    concierge_subtitle: "I'm here to make your stay at",
    concierge_subtitle2:
      "unforgettable. From airport transfers to dinner reservations, just ask.",
    concierge_web: "Web",
    concierge_app: "Mobile App",
    concierge_whatsapp: "WhatsApp",
    concierge_personalized: "Personalized for your trip",
    concierge_book: "Book now",
    concierge_booked: "Booked",
    concierge_from: "from",
    concierge_free: "Free",
    concierge_ai_title: "AI Insights for Your Trip",
    concierge_ai_1:
      "Your flight arrives at 3:00 PM. I recommend booking airport transfer now to avoid queues.",
    concierge_ai_2:
      'A popular restaurant "Le N\'dolé" is 800m from your hotel. Perfect for dinner tonight.',
    concierge_ai_3:
      "This weekend: Assinie Beach Music Festival. 2km from your hotel.",
    concierge_chat_title: "Your AI Concierge",
    concierge_available: "Available 24/7",
    concierge_chat_1: "Great choice! Your stay at",
    concierge_chat_2: "is confirmed. I'm here to help with anything you need.",
    concierge_chat_3:
      "Want me to book your airport transfer? It's 25 min from the airport.",
    concierge_chat_4: "Yes please! And any restaurant recommendations?",
    concierge_chat_5:
      "Perfect! I've arranged your transfer. For dinner, I recommend 3 local spots:",
    concierge_chat_6:
      "1. Le N'dolé — Ivoirian cuisine (800m)\n2. La Baignoire — French fine dining (1.2km)\n3. Chez Ramage — Seafood by the lagoon (2km)",
    concierge_chat_placeholder: "Ask your concierge...",
    concierge_trip: "Your trip",
    concierge_property_label: "Property",
    concierge_city: "City",
    concierge_checkin: "Check-in",
    concierge_services: "Services",
    concierge_booked_count: "booked",

    // Concierge services
    service_airport_title: "Airport Transfer",
    service_airport_desc:
      "Book a private car from Félix Houphouët-Boigny Airport to your hotel. 25-minute drive.",
    service_taxi_title: "Taxi Booking",
    service_taxi_desc:
      "On-demand taxi service with vetted local drivers. Cash or Mobile Money.",
    service_restaurant_title: "Restaurant Recommendations",
    service_restaurant_desc:
      "Top-rated local restaurants within 2km. Ivoirian, French, and international cuisine.",
    service_events_title: "Local Events",
    service_events_desc:
      "3 events happening this weekend: live music, art exhibition, and food festival.",
    service_tours_title: "Tourist Activities",
    service_tours_desc:
      "Guided tours to Assinie Beach, Banco National Park, and local markets.",
    service_sim_title: "Local SIM Card",
    service_sim_desc:
      "Get a local data SIM card delivered to your hotel. Orange or MTN available.",

    // AI Assistant
    ai_greeting:
      "Hi, I'm your Oasis Ressort AI travel companion. Describe the trip you're dreaming of and I'll find the perfect stays across Africa.",
    ai_online: "Online · AI travel companion",
    ai_found: "I found",
    ai_options_airport:
      "options matching your preferences. Here are the top picks based on ocean views, pool access, and price.",
    ai_found_business:
      "business-friendly hotels near Abidjan airport. All have fast Wi-Fi, conference rooms, and airport shuttles.",
    ai_found_romantic:
      "romantic getaways perfect for couples. I've filtered for ocean views, spa services, and private balconies.",
    ai_found_family:
      "family-friendly options with pools, gardens, and family rooms. Based on your past bookings, you'll love these.",
    ai_found_lastminute:
      "hotels available for tonight in Abidjan with instant booking. Prices are 15% lower than usual.",
    ai_found_cheaper:
      "more affordable options under 50,000 FCFA per night. All still highly rated and with Mobile Money accepted.",
    ai_found_breakfast:
      "Filtered to show only properties with complimentary breakfast included. 4 options match.",
    ai_found_5star:
      "Here are the top-rated 5-star hotels in your area. All rated 4.7+ with exceptional service.",
    ai_found_default:
      "I've analyzed 247 properties across 8 African cities. Based on your request, here are the best matches.",
    ai_chip_cheaper: "Cheaper options",
    ai_chip_breakfast: "Add breakfast",
    ai_chip_family: "Family friendly",
    ai_chip_5star: "Show only 5-star hotels",
    ai_chip_show_more: "Show more",
    ai_chip_near_airport: "Near airport",
    ai_chip_beach: "Beach getaway",
    ai_chip_romantic: "Romantic weekend",
    ai_chip_family_vacation: "Family vacation",
    ai_placeholder: "Ask anything about your trip...",
    ai_footer:
      "AI suggests stays, activities & more. Powered by Oasis Ressort intelligence.",
    ai_float_title: "Ask Oasis AI",
    ai_float_subtitle: "Always here to help",

    // AI response chips
    ai_chips_beach: [
      "Cheaper options",
      "Add breakfast",
      "Show only 5-star",
      "More details",
    ],
    ai_chips_business: [
      "Cheaper options",
      "Add breakfast",
      "Closer to airport",
      "With parking",
    ],
    ai_chips_romantic: [
      "Under 100,000 FCFA",
      "With spa",
      "Ocean view only",
      "All-inclusive",
    ],
    ai_chips_family: [
      "Under 80,000 FCFA",
      "With kids pool",
      "5+ bedrooms",
      "Pet friendly",
    ],
    ai_chips_last_minute: [
      "Show all",
      "Under 50,000 FCFA",
      "Near airport",
      "4+ stars",
    ],
    ai_chips_cheaper: [
      "Under 35,000 FCFA",
      "Add breakfast",
      "Near airport",
      "With pool",
    ],
    ai_chips_breakfast: [
      "Cheaper options",
      "Near airport",
      "Show all",
      "5-star only",
    ],
    ai_chips_5star: [
      "Cheaper options",
      "Add breakfast",
      "Family friendly",
      "More details",
    ],
    ai_chips_default: [
      "Cheaper options",
      "Add breakfast",
      "Family friendly",
      "Show only 5-star hotels",
    ],

    // Footer
    footer_tagline:
      "Africa's AI-first travel booking platform. Describe your perfect trip — we'll handle the rest.",
    footer_discover: "Discover",
    footer_company: "Company",
    footer_support: "Support",
    footer_discover_links: [
      "Popular cities",
      "Beach getaways",
      "Business hotels",
      "Family villas",
      "Digital nomad stays",
    ],
    footer_company_links: [
      "About Oasis Ressort",
      "Careers",
      "Press",
      "Partners",
      "Blog",
    ],
    footer_support_links: [
      "Help Center",
      "Trust & Safety",
      "Cancellation",
      "Payment methods",
      "Contact",
    ],
    footer_encrypted: "Encrypted payments",
    footer_countries: "8+ African countries",
    footer_concierge: "24/7 AI concierge",
    footer_rights: "© 2026 Oasis Ressort. All rights reserved.",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_cookies: "Cookies",

    // Bottom nav
    nav_home: "Home",
    nav_explore: "Explore",
    nav_trips: "Trips",
    nav_messages: "Messages",
    nav_profile: "Profile",

    // Sign In page
    signin_title: "Welcome to Oasis Ressort",
    signin_subtitle: "Sign in to access your AI travel companion",
    signin_email: "Email address",
    signin_password: "Password",
    signin_forgot: "Forgot password?",
    signin_button: "Sign in",
    signin_create_account: "Create account",
    signin_with_google: "Sign in with Google",
    signin_with_facebook: "Sign in with Facebook",
    signin_divider: "or",
    signin_no_account: "Don't have an account?",
    signin_signup: "Sign up",
    signin_error: "Incorrect email or password",
    signin_remember: "Remember me",

    // Sign Up page
    signup_title: "Create your account",
    signup_subtitle:
      "Join Oasis Ressort and start traveling smart across Africa",
    signup_name: "Full name",
    signup_email: "Email address",
    signup_password: "Password",
    signup_confirm_password: "Confirm password",
    signup_phone: "Phone number",
    signup_button: "Create account",
    signup_with_google: "Sign up with Google",
    signup_with_facebook: "Sign up with Facebook",
    signup_divider: "or",
    signup_already_account: "Already have an account?",
    signup_signin: "Sign in",
    signup_error: "An error occurred during registration",
    signup_password_mismatch: "Passwords do not match",
    signup_terms: "I accept the",
    signup_terms_link: "Terms of Service",
    signup_privacy: "and",
    signup_privacy_link: "Privacy Policy",

    // Tourist sites page
    sites_title: "African Tourist Sites",
    sites_subtitle:
      "Discover the natural and cultural wonders of the African continent, curated by our AI.",
    sites_search_placeholder: "Search tourist sites, cities, countries...",
    sites_badge: "AI Discovery",
    sites_filter_all: "All",
    sites_filter_nature: "Nature",
    sites_filter_culture: "Culture",
    sites_filter_plage: "Beaches",
    sites_filter_heritage: "Heritage",
    sites_filter_wildlife: "Wildlife",
    sites_no_results: "No sites found",
    sites_no_results_sub: "Try a different search term.",
    sites_learn_more: "Learn more",
    sites_book_nearby: "Book a stay",
    sites_ai_pick: "AI Pick",
    sites_must_see: "Must see",
    sites_open_year: "Open year-round",
    sites_best_season: "Best season",
    sites_nearby_hotels: "hotels nearby",
    sites_distance: "from the city",
    sites_entry_fee: "Entry",
    sites_free: "Free",

    // Room types
    room_standard: "Standard Room",
    room_deluxe: "Deluxe Room",
    room_suite: "Executive Suite",
    room_bed_queen: "1 Queen bed",
    room_bed_king: "1 King bed",
    room_bed_suite: "1 King + Sofa bed",
    room_feature_city: "City view",
    room_feature_pool: "Pool view",
    room_feature_ocean: "Ocean view",
    room_feature_wifi: "Free Wi-Fi",
    room_feature_desk: "Work desk",
    room_feature_balcony: "Balcony",
    room_feature_minibar: "Minibar",
    room_feature_living: "Living room",
    room_feature_bath: "Bath",
    room_feature_coffee: "Espresso machine",
    room_for_nights: "for",
    room_nights: "nights",

    // PropertyCard
    card_save: "Save property",
    card_view_all_images: "View all",

    // SearchResults
    search_query_default: "I need a quiet hotel near Abidjan airport",
    search_ai_reqs:
      "Based on your query, I've prioritized properties with fast Wi-Fi, airport proximity, and mobile money acceptance.",
    search_mobile_filters_title: "AI Filters",
    search_no_results_reset: "Reset",
    search_results_count: "results",
    search_ai_reqs_tag1: "Fast Wi-Fi",
    search_ai_reqs_tag2: "Airport nearby",
    search_ai_reqs_tag3: "Mobile Money",
    search_ai_reqs_tag4: "4.5+ stars",

    // PropertyDetails
    details_view_all: "View all",
    details_per_night: "/ night",
    details_room_counter: "1 / 4 rooms",
    details_room_loading: "Loading 360° experience...",

    // Compare
    compare_back_link: "Back to results",
    compare_analyzed: "I've analyzed",
    compare_properties_across: "properties across",
    compare_locations: "location(s).",
    compare_recommendation:
      "Each offers distinct value — here's my recommendation based on your travel preferences.",
    compare_book: "Book now",
    compare_row_rating: "Rating",
    compare_row_price: "Price",
    compare_row_per_night: "/ night",
    compare_row_location: "Location",
    compare_row_type: "Type",
    compare_row_mobile: "Mobile Money",
    compare_row_accepted: "Accepted",
    compare_row_not_available: "Not available",
    compare_row_ai_summary: "AI Summary",
    compare_row_sentiment: "Sentiment",
    compare_row_amenities: "Amenities",
    compare_row_amenities_count: "amenities",
    compare_row_ai_badge: "AI Badge",

    // Concierge page strings
    concierge_back_home: "Back to home",
    concierge_chat_q1:
      "Want me to book your airport transfer? It's 25 min from the airport.",
    concierge_chat_a1: "Yes please! And any restaurant recommendations?",
    concierge_chat_q2:
      "Perfect! I've arranged your transfer. For dinner, I recommend 3 local spots:",
    concierge_chat_restaurants:
      "1. Le N'dolé — Ivoirian cuisine (800m)\n2. La Baignoire — French fine dining (1.2km)\n3. Chez Ramage — Seafood by the lagoon (2km)",
    concierge_tomorrow: "Tomorrow",

    // Discover (tour)
    sites_book_tour: "Réserver une visite",

    // Help page
    help_title: "Help Center",
    help_subtitle: "We are here to help you",
    help_back: "Back",
    help_search_placeholder: "Search for help...",
    help_faq: "FAQ",
    help_category_reservations: "Reservations",
    help_category_payments: "Payments",
    help_category_properties: "Properties",
    help_category_account: "Account",
    help_q1: "How can I modify a booking?",
    help_a1:
      "You can modify your booking via your profile or by contacting our customer support. Changes are free up to 48h before arrival.",
    help_q2: "Can I cancel my booking?",
    help_a2:
      "Yes, cancellation is free up to 48h before check-in. After that period, fees may apply.",
    help_q3: "How can I view my bookings?",
    help_a3:
      "All your bookings are visible in the “My Trips” tab of your profile.",
    help_q4: "Which payment methods are accepted?",
    help_a4:
      "We accept credit cards, Mobile Money (Orange Money, MTN Money, Moov, Wave), and bank transfers.",
    help_q5: "Is Mobile Money payment secure?",
    help_a5:
      "Yes, all Mobile Money transactions are encrypted and secured by our financial partners.",
    help_q6: "Can I pay in installments?",
    help_a6:
      "Yes, we offer installment payment options for stays longer than 3 nights.",
    help_q7: "How are properties verified?",
    help_a7:
      "Each property is visited and verified by our team. We check quality, cleanliness, and amenities.",
    help_q8: "Do the photos reflect reality?",
    help_a8:
      "Yes, all photos are recent and accurately represent the properties.",
    help_q9: "Can I visit a property before booking?",
    help_a9:
      "Yes, you can request a 360° virtual tour or an in-person visit depending on availability.",
    help_q10: "How do I reset my password?",
    help_a10:
      "Use the “Forgot password?” link on the login page or contact support.",
    help_q11: "Can I update my personal information?",
    help_a11:
      "Yes, you can edit your information in the “My Info” tab of your profile.",
    help_q12: "How can I delete my account?",
    help_a12: "Contact customer support to request account deletion.",
    help_contact_title: "Contact us",
    help_contact_subtitle:
      "Our team is available to answer all your questions.",
    help_contact_email: "Email",
    help_contact_phone: "Phone",
    help_contact_chat: "Live chat",
    help_contact_chat_desc: "Chat with us in real time",
    help_tips_title: "Useful tips",
    help_tip1: "Book early to get the best rates",
    help_tip2: "Check reviews from other travelers",
    help_tip3: "Use AI filters to refine your search",
    help_no_results: "No results found for your search",

    // Pricing Section
    pricing_saas: 'SAAS ADMIN SOLUTION',
    pricing_title: 'Simple pricing for your business',
    pricing_subtitle: 'Choose the plan that best fits your needs. All our plans include full access to our management platform.',
    pricing_monthly: 'Monthly',
    pricing_annual: 'Annual',
    pricing_save: '-%s',
    pricing_year: 'year',
    pricing_month: 'month',
    pricing_standard: 'Standard',
    pricing_extra: 'Extra',
    pricing_premium: 'Premium',
    pricing_standard_desc: 'Ideal for small businesses',
    pricing_extra_desc: 'Perfect for growing companies',
    pricing_premium_desc: 'Complete solution for large enterprises',
    pricing_features: 'Features included',
    pricing_feature_1: 'Unlimited property management',
    pricing_feature_2: 'Online bookings',
    pricing_feature_3: 'Analytics dashboard',
    pricing_feature_4: '24/7 technical support',
    pricing_feature_5: 'Mobile Money integration',
    pricing_feature_6: 'User management',
    pricing_feature_7: 'Customizable API',
    pricing_standard_limit: 'Up to 50 properties',
    pricing_extra_limit: 'Up to 200 properties',
    pricing_premium_limit: 'Unlimited properties',
    pricing_popular: 'Most popular',
    pricing_get_started: 'Get started now',
    pricing_recommended_for: 'Recommended for:',
    pricing_standard_for: 'Small businesses and startups',
    pricing_extra_for: 'Medium businesses',
    pricing_premium_for: 'Large enterprises and networks',
    pricing_guarantee: '30-day money-back guarantee',

    // Experiences page
    experiences_title: "Unique Experiences",
    experiences_subtitle:
      "Discover unforgettable activities to make your trip exceptional",
    experiences_back: "Back",
    experiences_all: "All",
    experiences_culture: "Culture",
    experiences_adventure: "Adventure",
    experiences_gastronomy: "Gastronomy",
    experiences_wellness: "Wellness",
    experiences_categories: "Categories",
    experiences_popular: "Popular",
    experiences_all_title: "All experiences",
    experiences_book: "Book",
    experiences_no_results: "No experiences found",
    experiences_no_results_sub: "Try another category or adjust your filters",
    experiences_popular_badge: "Popular",
    experiences_banner_title: "Discover Africa differently",
    experiences_banner_subtitle:
      "Authentic experiences curated by our local experts",
    experiences_banner_alt: "African landscape",

    // Travel page
    travel_title: "My Trips",
    travel_subtitle: "Manage all your bookings and travels",
    travel_back: "Back",
    travel_current: "Current",
    travel_upcoming: "Upcoming",
    travel_past: "Past",
    travel_stats_upcoming: "Upcoming trips",
    travel_stats_completed: "Completed trips",
    travel_stats_countries: "Countries visited",
    travel_no_trips: "No trips",
    travel_no_trips_sub: "You don't have any upcoming trips yet",
    travel_plan_new: "Plan a new trip",
    travel_details: "Details",
    travel_checkin: "Check-in",
    travel_status_confirmed: "Confirmed",
    travel_status_pending: "Pending",
    travel_status_cancelled: "Cancelled",
    travel_status_completed: "Completed",

    // Profile page
    profile_title: "My Profile",
    profile_subtitle: "Manage your personal information and preferences",
    profile_back: "Back",
    profile_member_since: "Member since",
    profile_stats_bookings: "Bookings",
    profile_stats_favorites: "Favorites",
    profile_stats_reviews: "Reviews",
    profile_tab_info: "Info",
    profile_tab_bookings: "Bookings",
    profile_tab_favorites: "Favorites",
    profile_tab_settings: "Settings",
    profile_info_title: "My Information",
    profile_info_email: "Email",
    profile_info_phone: "Phone",
    profile_info_address: "Address",
    profile_info_address_value: "Abidjan, Plateau, Côte d'Ivoire",
    profile_edit: "Edit profile",
    profile_save: "Save",
    profile_cancel: "Cancel",
    profile_signout: "Sign out",
    profile_booking_1: "Sofitel Abidjan Hôtel Ivoire",
    profile_booking_2: "Pullman Abidjan",
    profile_booking_3: "Tiama Hotel",
    profile_booking_status_confirmed: "Confirmed",
    profile_booking_status_pending: "Pending",
    profile_booking_status_completed: "Completed",
    profile_favorite_1: "Luxury villa with ocean view",
    profile_favorite_2: "Modern downtown apartment",
    profile_favorite_3: "Comfortable family house",
    profile_loc_abidjan: "Abidjan",
    profile_loc_yopougon: "Yopougon",
    profile_loc_cocody: "Cocody",
    profile_no_bookings: "No bookings",
    profile_no_favorites: "No favorites",
    profile_settings_notifications: "Notifications",
    profile_settings_payment: "Payment methods",
    profile_settings_security: "Security",
    profile_settings_preferences: "Preferences",

    // Experience details
    experience_1_title: "Guided tour of Abidjan",
    experience_1_desc: "Discover the economic capital of Côte d'Ivoire",
    experience_2_title: "Historical tour of Grand-Bassam",
    experience_2_desc: "Explore the UNESCO World Heritage site",
    experience_3_title: "Abidjan culinary experience",
    experience_3_desc: "Taste authentic Ivorian cuisine",
    experience_4_title: "Spa and wellness day",
    experience_4_desc: "Relax in a luxury spa",
    experience_5_title: "Cocody cultural tour",
    experience_5_desc: "Visit museums and art galleries",
    experience_6_title: "Beach adventure in Assinie",
    experience_6_desc: "Enjoy water sports and seaside relaxation",
    experience_loc_abidjan: "Abidjan",
    experience_loc_grand_bassam: "Grand-Bassam",
    experience_loc_plateau: "Plateau",
    experience_loc_yopougon: "Yopougon",
    experience_loc_cocody: "Cocody",
    experience_loc_assinie: "Assinie",

    // Trip details
    trip_1_title: "Paris getaway",
    trip_2_title: "Business trip to New York",
    trip_3_title: "Adventure in Dubai",
    trip_4_title: "Discover Tokyo",
    trip_5_title: "Weekend in London",
    trip_6_title: "Retreat in Bali",
    trip_dest_paris: "Paris, France",
    trip_dest_new_york: "New York, United States",
    trip_dest_dubai: "Dubai, United Arab Emirates",
    trip_dest_tokyo: "Tokyo, Japan",
    trip_dest_london: "London, United Kingdom",
    trip_dest_bali: "Bali, Indonesia",
    trip_accommodation_hotel: "Hotel",
    trip_accommodation_apartment: "Apartment",
    trip_accommodation_resort: "Resort",
    trip_accommodation_villa: "Villa",
    trip_transport_flight: "Flight",
    trip_transport_car: "Car",
    trip_transport_train: "Train",
    trip_transport_ship: "Ship",
  },
} as const;

export type TranslationKey = keyof typeof translations.fr;
