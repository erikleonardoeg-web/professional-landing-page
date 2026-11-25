// Configuração central da TDS GYM. Edite aqui para atualizar a página inteira.
export const WHATSAPP_NUMBER = "5544991272551";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_MESSAGES = {
  hero: "Olá! Conheci a TDS GYM pelo site e gostaria de saber mais sobre como começar a treinar.",
  planos: "Olá! Gostaria de conhecer os planos disponíveis da TDS GYM.",
  contato: "Olá! Gostaria de obter mais informações sobre a TDS GYM.",
  cta: "Olá! Tenho interesse em começar a treinar na TDS GYM.",
} as const;

export const GYM = {
  name: "TDS GYM",
  instagram: "https://www.instagram.com/tds.gym/",
  instagramHandle: "@tds.gym",
  whatsappDisplay: "+55 44 99127-2551",
  address: "Av. Alziro Zarur, 415 - Casa 1 - Vila Vardelina, Maringá - PR, 87080-590, Brasil",
  mapsQuery: "Av. Alziro Zarur, 415, Vila Vardelina, Maringá - PR, 87080-590",
};

export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(GYM.mapsQuery)}&output=embed`;
export const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(GYM.mapsQuery)}`;
export const mapsOpen = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GYM.mapsQuery)}`;

export const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Academia", href: "#academia" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "Planos", href: "#planos" },
  { label: "Localização", href: "#localizacao" },
];

const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

// PROVISÓRIO: imagens ilustrativas (Unsplash). NÃO são fotos da TDS GYM.
// Substitua por fotos reais (fachada, ambiente, equipamentos, equipe) e marque provisional: false.
export const IMAGES = {
  hero: { src: u("photo-1534438327276-14e5300c3a48", 1920), alt: "Imagem ilustrativa de ambiente de academia", provisional: true },
  about: { src: u("photo-1571902943202-507ec2618e8f", 1200), alt: "Imagem ilustrativa de treino de musculação", provisional: true },
};

export const GALLERY: { src: string; alt: string; provisional: boolean }[] = [
  { src: u("photo-1540497077202-7c8a3999166f"), alt: "Imagem ilustrativa: área de equipamentos", provisional: true },
  { src: u("photo-1517836357463-d25dfeac3438"), alt: "Imagem ilustrativa: treino com pesos", provisional: true },
  { src: u("photo-1581009146145-b5ef050c2e1e"), alt: "Imagem ilustrativa: treino de força", provisional: true },
  { src: u("photo-1593079831268-3381b0db4a77"), alt: "Imagem ilustrativa: halteres", provisional: true },
  { src: u("photo-1534438327276-14e5300c3a48"), alt: "Imagem ilustrativa: salão de musculação", provisional: true },
  { src: u("photo-1571902943202-507ec2618e8f"), alt: "Imagem ilustrativa: treino em academia", provisional: true },
];

// Preencha com a lista oficial. Vazio = exibe convite para consultar pelo WhatsApp.
export const MODALIDADES: { name: string; description: string; image: string; alt: string }[] = [];

// Planos oficiais: preencha name/price/features. Vazio = "CONSULTE NOSSOS PLANOS".
export const PLANOS: { name: string; price?: string; period?: string; features: string[]; highlight?: boolean }[] = [];

// Apenas informações confirmadas.
export const DIFERENCIAIS = [
  { icon: "MapPin", title: "Na Vila Vardelina", text: "Localização em Maringá, na Av. Alziro Zarur, 415." },
  { icon: "MessageCircle", title: "Atendimento direto", text: "Tire suas dúvidas e fale com a equipe pelo WhatsApp." },
  { icon: "Instagram", title: "Acompanhe a rotina", text: "Novidades e o dia a dia da academia no Instagram @tds.gym." },
] as const;
