import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, MapPin, MessageCircle, Navigation } from "lucide-react";
import { DIFERENCIAIS, GYM, IMAGES, MODALIDADES, NAV, PLANOS, WA_MESSAGES, mapsDirections, mapsEmbed, mapsOpen, waLink } from "@/config/gym";
import { Header } from "@/components/site/Header";
import { Logo } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/Cta";
import { Gallery } from "@/components/site/Gallery";
import { SectionTitle } from "@/components/site/SectionTitle";
import { WhatsAppIcon } from "@/components/site/Icons";

const TITLE = "TDS Gym | Academia em Maringá - PR";
const DESC = "Conheça a TDS Gym em Maringá. Entre em contato pelo WhatsApp, consulte nossos planos e comece a treinar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Index,
});

const icons = { MapPin, MessageCircle, Instagram };

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        {/* HERO */}
        <section id="inicio" className="relative flex min-h-[100svh] items-end pb-16 pt-28 md:items-center md:pb-0">
          {/* PROVISÓRIO: imagem ilustrativa */}
          <img src={IMAGES.hero.src} alt={IMAGES.hero.alt} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
          <div className="container-site relative">
            <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">Academia em Maringá · PR</p>
            <h1 className="mt-4 max-w-4xl font-display text-[3.4rem] uppercase leading-[0.9] text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 sm:text-7xl md:text-8xl lg:text-[8.5rem]">
              Seu próximo nível <span className="text-primary">começa aqui.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80 animate-in fade-in duration-1000 md:text-xl">
              Transforme sua rotina, supere seus limites e conquiste sua melhor versão.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={waLink(WA_MESSAGES.hero)}><WhatsAppIcon /> Quero começar a treinar</CtaLink>
              <CtaLink href="#academia" variant="outline" external={false}>Conheça a academia</CtaLink>
            </div>
          </div>
        </section>

        {/* APRESENTAÇÃO */}
        <section id="academia" className="section">
          <div className="container-site grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <SectionTitle eyebrow="A academia" title="Mais que treinar. Evoluir todos os dias." />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Na TDS GYM, cada treino representa uma oportunidade de evoluir. Um espaço dedicado a quem busca mais saúde, disposição e qualidade de vida.
              </p>
              <a href={waLink(WA_MESSAGES.contato)} target="_blank" rel="noopener noreferrer" className="link-arrow mt-8">Fale com a equipe <ArrowRight className="h-4 w-4" /></a>
            </Reveal>
            <Reveal delay={100} className="relative">
              <div className="accent-frame">
                <img src={IMAGES.about.src} alt={IMAGES.about.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* MODALIDADES */}
        <section id="modalidades" className="section bg-card">
          <div className="container-site">
            <Reveal><SectionTitle eyebrow="Modalidades" title="Encontre seu jeito de evoluir." /></Reveal>
            {MODALIDADES.length > 0 ? (
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {MODALIDADES.map((m, i) => (
                  <Reveal key={m.name} delay={i * 80}>
                    <article className="card-site group overflow-hidden">
                      <img src={m.image} alt={m.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="p-6"><h3 className="font-display text-3xl uppercase">{m.name}</h3><p className="mt-2 text-muted-foreground">{m.description}</p></div>
                    </article>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal className="mt-12">
                <div className="card-site flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                  <p className="max-w-xl text-lg text-muted-foreground">Quer saber quais modalidades estão disponíveis e os horários de cada uma? Fale com a gente e receba as informações atualizadas.</p>
                  <CtaLink href={waLink(WA_MESSAGES.contato)}><WhatsAppIcon /> Consultar modalidades</CtaLink>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="section">
          <div className="container-site">
            <Reveal><SectionTitle eyebrow="Por que a TDS" title="O ambiente certo faz a diferença." /></Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {DIFERENCIAIS.map((d, i) => {
                const Icon = icons[d.icon];
                return (
                  <Reveal key={d.title} delay={i * 80}>
                    <div className="card-site h-full p-8">
                      <Icon className="h-9 w-9 text-primary" strokeWidth={1.75} />
                      <h3 className="mt-6 font-display text-3xl uppercase">{d.title}</h3>
                      <p className="mt-2 text-muted-foreground">{d.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="section bg-card">
          <div className="container-site">
            <Reveal><SectionTitle eyebrow="Planos" title="Escolha seu plano. Comece sua evolução." /></Reveal>
            {PLANOS.length > 0 ? (
              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {PLANOS.map((p) => (
                  <div key={p.name} className={`card-site flex flex-col p-8 ${p.highlight ? "border-primary" : ""}`}>
                    <h3 className="font-display text-3xl uppercase">{p.name}</h3>
                    {p.price && <p className="mt-4 font-display text-5xl">{p.price}<span className="text-base text-muted-foreground">{p.period}</span></p>}
                    <ul className="mt-6 flex-1 space-y-2 text-muted-foreground">{p.features.map((f) => <li key={f}>— {f}</li>)}</ul>
                    <CtaLink href={waLink(WA_MESSAGES.planos)} className="mt-8">Quero este plano</CtaLink>
                  </div>
                ))}
              </div>
            ) : (
              <Reveal className="mt-12">
                <div className="plan-feature relative overflow-hidden p-8 md:p-14">
                  <p className="eyebrow">Valores e condições</p>
                  <p className="mt-4 font-display text-5xl uppercase leading-none md:text-7xl">Consulte nossos planos</p>
                  <p className="mt-4 max-w-xl text-lg text-muted-foreground">Fale com a equipe pelo WhatsApp e conheça as opções disponíveis para você começar a treinar.</p>
                  <CtaLink href={waLink(WA_MESSAGES.planos)} className="mt-8"><WhatsAppIcon /> Consultar planos</CtaLink>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* GALERIA */}
        <section className="section">
          <div className="container-site">
            <Reveal><SectionTitle eyebrow="Galeria" title="Conheça a TDS GYM." /></Reveal>
            <p className="mt-4 text-sm text-muted-foreground">Imagens ilustrativas. Em breve, fotos do nosso espaço.</p>
            <div className="mt-10"><Gallery /></div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="section bg-card">
          <div className="container-site grid gap-10 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <SectionTitle eyebrow="Localização" title="Estamos esperando por você." />
              <div className="mt-8 flex gap-3 text-lg text-muted-foreground">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <address className="not-italic">{GYM.address}</address>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <CtaLink href={mapsDirections}><Navigation className="h-5 w-5" /> Como chegar</CtaLink>
                <CtaLink href={mapsOpen} variant="outline">Abrir no Google Maps</CtaLink>
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-3">
              <div className="aspect-[4/3] w-full overflow-hidden border border-border md:aspect-[16/10]">
                <iframe title="Mapa da TDS GYM" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="map-frame h-full w-full border-0" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final relative overflow-hidden py-20 md:py-32">
          <div className="container-site relative text-center">
            <h2 className="font-display text-5xl uppercase leading-[0.9] sm:text-7xl md:text-8xl">Chegou a hora<br />de começar.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">Seu próximo passo começa com uma decisão. Entre em contato com a TDS GYM e conheça as opções para começar a treinar.</p>
            <CtaLink href={waLink(WA_MESSAGES.cta)} className="btn-invert mt-10"><WhatsAppIcon /> Fale com a gente pelo WhatsApp</CtaLink>
          </div>
        </section>
      </main>

      <footer className="border-t border-border pb-28 pt-16 md:pb-12">
        <div className="container-site grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo className="h-20 w-auto" />
            <p className="mt-4 max-w-sm text-muted-foreground">{GYM.address}</p>
          </div>
          <nav aria-label="Rodapé">
            <p className="eyebrow">Navegação</p>
            <ul className="mt-4 space-y-2">{NAV.map((n) => <li key={n.href}><a className="nav-link" href={n.href}>{n.label}</a></li>)}</ul>
          </nav>
          <div>
            <p className="eyebrow">Contato</p>
            <ul className="mt-4 space-y-3">
              <li><a className="nav-link inline-flex items-center gap-2" href={waLink(WA_MESSAGES.contato)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="h-4 w-4" /> {GYM.whatsappDisplay}</a></li>
              <li><a className="nav-link inline-flex items-center gap-2" href={GYM.instagram} target="_blank" rel="noopener noreferrer"><Instagram className="h-4 w-4" /> {GYM.instagramHandle}</a></li>
            </ul>
          </div>
        </div>
        <p className="container-site mt-12 border-t border-border pt-6 text-sm text-muted-foreground">© {new Date().getFullYear()} TDS GYM. Todos os direitos reservados.</p>
      </footer>

      <a href={waLink(WA_MESSAGES.contato)} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="wa-float">
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
