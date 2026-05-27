import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoVs from "@/assets/logo-vs.png";
import heroGym from "@/assets/hero-gym.jpg";
import modJiu from "@/assets/mod-jiujitsu.jpg";
import modMuay from "@/assets/mod-muaythai.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centro de Lutas VS — Jiu-Jitsu & Muay Thai" },
      {
        name: "description",
        content:
          "Centro de Lutas VS: Jiu-Jitsu e Muay Thai. Treine com os melhores professores e desperte o lutador que existe em você.",
      },
      { property: "og:title", content: "Centro de Lutas Victor Simon" },
      {
        property: "og:description",
        content: "Jiu-Jitsu e Muay Thai. Treine onde os campeões treinam.",
      },
    ],
  }),
  component: Landing,
});

const modalidades = [
  {
    nome: "Jiu-Jitsu Adulto & Kids",
    img: modJiu,
    desc: "Arte marcial focada em técnicas de imobilização e finalização no combate corpo a corpo.",
  },
  {
    nome: "Muay Thai Adulto & Kids",
    img: modMuay,
    desc: "Arte marcial tailandesa que utiliza socos, chutes, joelhadas e cotoveladas em combate em pé.",
  },
];

const professores = [
  {
    nome: "Victor Simon",
    esp: "Muay Thai",
    iniciais: "VS",
    img: "/victor-simon.jpg",
    desc: "Professor formado pela UFSC em Educação Física, pratica artes marciais desde os 6 anos, com mais de 70 lutas e 15 anos de experiência como professor.",
  },
  { nome: "Luan Hakym", esp: "Muay Thai", iniciais: "LH", img: "/luan-hakym.jpg" },
  { nome: "João Rosa", esp: "Jiu-Jitsu", iniciais: "JR", img: "/joao-rosa.jpg" },
  { nome: "Bruno Ribeiro", esp: "Muay Thai", iniciais: "BR", img: "/bruno-ribeiro.jpg" },
];


const navItems = [
  { id: "modalidades", label: "Modalidades" },
  { id: "historia", label: "História" },
  { id: "professores", label: "Professores" },
  { id: "contato", label: "Contato" },
];

function Landing() {
  const [open, setOpen] = useState(false);
  const [contName, setContName] = useState("");
  const [contPhone, setContPhone] = useState("");
  const [contMessage, setContMessage] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    const msg = `Olá me chamo ${contName}, meu telefone é ${contPhone} tenho interesse em marcar uma aula experimental e ter mais informações a respeito das aulas. Minha mensagem é: ${contMessage}`;
    const url = `https://wa.me/5548998314433?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoVs} alt="Victor Simon" className="h-10 w-10 rounded-sm" width={40} height={40} />
            <div className="leading-tight">
              <div className="display text-sm tracking-widest sm:text-base">Centro de Lutas</div>
              <div className="display text-xs text-primary sm:text-sm">Victor Simon</div>
            </div>
          </a>

          <nav className="hidden gap-8 md:flex">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="display text-sm tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <nav className="border-t border-border bg-background md:hidden">
            <div className="flex flex-col px-4 py-2">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="display border-b border-border py-4 text-sm tracking-widest text-foreground last:border-0"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroGym}
            alt=""
            className="h-full w-full object-cover opacity-50"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-32">
          <span className="display mb-4 inline-block w-fit border-l-2 border-primary pl-3 text-xs tracking-[0.4em] text-primary sm:text-sm">
            Desde o primeiro Jab, até o último round.
          </span>
          <h1 className="display text-5xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl">
            DESPERTE
            <br />
            <span className="text-primary">SUA FORÇA</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Centro de Lutas VS — um espaço onde técnica, disciplina e respeito transformam a sua vida.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="display inline-flex items-center justify-center bg-primary px-8 py-4 text-sm tracking-widest text-primary-foreground transition hover:brightness-110"
            >
              Aula Experimental
            </a>
            <a
              href="#modalidades"
              className="display inline-flex items-center justify-center border border-border bg-card/50 px-8 py-4 text-sm tracking-widest text-foreground transition hover:border-primary hover:text-primary"
            >
              Ver Modalidades
            </a>
          </div>
        </div>

        {/* stats strip */}
        <div className="relative border-y border-border bg-card/60 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
            {[
              ["+15", "Anos no Tatame"],
              ["+300", "Alunos Ativos"],
              ["5", "Faixas Pretas"],
              ["+10", "Títulos"],
            ].map(([n, l]) => (
              <div key={l} className="px-6 py-6 text-center">
                <div className="display text-4xl text-primary sm:text-5xl">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section id="modalidades" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <div className="display mb-3 text-xs tracking-[0.4em] text-primary">Modalidades</div>
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              Escolha sua <span className="text-primary"> arte marcial</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {modalidades.map((m) => (
            <article
              key={m.nome}
              className="group relative aspect-[4/5] overflow-hidden border border-border bg-card"
            >
              <img
                src={m.img}
                alt={m.nome}
                loading="lazy"
                width={900}
                height={900}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="display text-2xl sm:text-3xl">{m.nome}</h3>
                <div className="mt-2 h-0.5 w-10 bg-primary transition-all duration-500 group-hover:w-full" />
                <p className="mt-3 text-sm text-muted-foreground">{m.desc}</p>
              </div>
              <div className="display absolute right-4 top-4 text-xs tracking-widest text-primary">
                / 0{modalidades.indexOf(m) + 1}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* História */}
      <section id="historia" className="relative border-y border-border bg-card/40">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-2">
          <div>
            <div className="display mb-3 text-xs tracking-[0.4em] text-primary">História</div>
            <h2 className="display text-4xl leading-tight sm:text-5xl md:text-6xl">
              NOSSA HISTÓRIA
              <br />
              <span className="text-stroke">COMEÇA AQUI:</span>
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground">
            <p className="text-base sm:text-lg">
              Centro de Lutas VS nasceu da paixão pelo combate e do respeito profundo pela
              tradição das artes marciais. Fundada por Victor Simon, faixa preta dedicado à formação
              de atletas e cidadãos, nosso centro de lutas virou referência na região.
            </p>
            <p>
              Aqui, cada aluno recebe atenção individual. Do iniciante que tem o primeiro contato 
              com o esporte ao competidor que sobe ao ringue em busca do título — todos são forjados sob
              os mesmos pilares: <span className="text-primary">técnica, disciplina e respeito</span>.
            </p>
            <p>
              Mais do que um centro de lutas, enfrentamos juntos nossos desafios.
            </p>
          </div>
        </div>
      </section>

      {/* Professores */}
      <section id="professores" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mb-12">
          <div className="display mb-3 text-xs tracking-[0.4em] text-primary">Equipe</div>
          <h2 className="display text-4xl sm:text-5xl md:text-6xl">
            Nossos <span className="text-primary">Professores</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {professores.map((p) => (
            <div
              key={p.nome}
              className="group relative border border-border bg-card p-6 transition hover:border-primary"
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-24 w-24 rounded-full border-2 border-primary bg-background">
                  {p.img ? (
                    <AvatarImage src={p.img} alt={`Foto do professor ${p.nome}`} />
                  ) : (
                    <AvatarFallback>{p.iniciais}</AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <h3 className="display text-xl">{p.nome}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.esp}</p>
                </div>
              </div>

              {p.desc ? (
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {p.desc}
                </p>
              ) : null}

              <div className="display absolute right-4 top-4 text-xs tracking-widest text-muted-foreground transition group-hover:text-primary">
                /0{professores.indexOf(p) + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="relative overflow-hidden border-t border-border bg-card/40">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="display mb-3 text-xs tracking-[0.4em] text-primary">Contato</div>
          <h2 className="display max-w-3xl text-4xl leading-tight sm:text-5xl md:text-6xl">
            Pronto para <span className="text-primary">o desafio?</span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              {[
                ["Endereço", "Rua João Motta Espezim, 363 - Saco dos Limões, Florianópolis - SC, 88045-401"],
                ["Telefone / WhatsApp", "(48)99831-4433"],
                ["E-mail", "contato@victorsimonrfa.com.br"],
                ["Horário", "Consultar disponibilidade por modalidade"],
              ].map(([l, v]) => (
                <div key={l} className="border-l-2 border-primary pl-4">
                  <div className="display text-xs tracking-widest text-primary">{l}</div>
                  <div className="mt-1 text-base text-foreground sm:text-lg">{v}</div>
                </div>
              ))}
            </div>

            <form
              className="space-y-4 border border-border bg-background/60 p-6 sm:p-8"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="display text-xs tracking-widest text-muted-foreground">Nome</label>
                <input
                  value={contName}
                  onChange={(e) => setContName(e.target.value)}
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="display text-xs tracking-widest text-muted-foreground">Telefone</label>
                <input
                  value={contPhone}
                  onChange={(e) => setContPhone(e.target.value)}
                  className="mt-2 w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                  placeholder="(11) 99999-0000"
                />
              </div>
              <div>
                <label className="display text-xs tracking-widest text-muted-foreground">Mensagem</label>
                <textarea
                  rows={4}
                  value={contMessage}
                  onChange={(e) => setContMessage(e.target.value)}
                  className="mt-2 w-full resize-none border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                  placeholder="Quero agendar uma aula experimental"
                />
              </div>
              <button
                type="submit"
                className="display w-full bg-primary px-6 py-4 text-sm tracking-widest text-primary-foreground transition hover:brightness-110"
              >
                Quero Treinar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoVs} alt="VICTOR SIMON" className="h-10 w-10" width={40} height={40} />
            <div>
              <div className="display text-sm tracking-widest">Centro de Lutas VS</div>
              <div className="text-xs text-muted-foreground">Tropa da mão limpinha · Desde 2021</div>
            </div>
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-widest text-muted-foreground">
            <a href="#modalidades" className="hover:text-primary">Modalidades</a>
            <a href="#historia" className="hover:text-primary">História</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Victor Simon RFA
          </div>
        </div>
      </footer>
    </div>
  );
}
