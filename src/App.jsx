const featured = [
  { name: "Rainbow Stacker", price: "$18", tag: "Ages 1–3", desc: "Fine-motor play + early counting." },
  { name: "Wooden Train Set", price: "$42", tag: "Ages 3–6", desc: "Classic tracks + magnetic cars." },
  { name: "STEM Builder Kit", price: "$35", tag: "Ages 6–10", desc: "Gears, levers, and connectors." },
  { name: "Plush Dino Buddy", price: "$24", tag: "All ages", desc: "Snuggly companion for story time." },
];

const categories = [
  { title: "Plushies", subtitle: "Soft friends for every age" },
  { title: "STEM & Learning", subtitle: "Build curiosity and skills" },
  { title: "Puzzles & Games", subtitle: "Family fun, brain boosts" },
  { title: "Outdoor Play", subtitle: "Move, jump, explore" },
];

const testimonials = [
  { quote: "The STEM kit was a hit—three builds in one afternoon.", name: "Morgan P." },
  { quote: "Beautiful toys and quick shipping. Gift wrap saved me.", name: "Avery K." },
  { quote: "Great puzzles for every age. Our family game nights improved.", name: "Sam R." },
];

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-extrabold text-slate-100">
      {children}
    </span>
  );
}

function Button({ href, children, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 active:translate-y-0 border";
  const styles =
    variant === "primary"
      ? "border-white/15 bg-gradient-to-br from-neon-gold/90 to-neon-blue/80 text-space-950 hover:from-neon-gold hover:to-neon-blue"
      : "border-white/10 bg-white/5 text-slate-100 hover:bg-white/10";

  return href ? (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  ) : (
    <button className={`${base} ${styles}`}>{children}</button>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-black tracking-tight text-slate-100">{title}</h2>
      <p className="mt-2 max-w-3xl text-slate-300/90 leading-relaxed">{subtitle}</p>
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] shadow-glow">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-full space-stars">
      <Header />
      <main>
        <Hero />

        <section className="mx-auto w-[min(1100px,calc(100%-2rem))] py-14">
          <SectionHeader
            title="Featured picks"
            subtitle="Curated for play value, durability, and big smiles."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <Card key={p.name}>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-neon-gold/25 bg-neon-gold/10 text-xl">
                      🧸
                    </div>
                    <Badge>{p.tag}</Badge>
                  </div>
                  <h3 className="mt-4 text-base font-black text-slate-100">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/90">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="text-base font-black text-slate-100">{p.price}</div>
                    <Button href="#contact" variant="secondary">
                      Ask about it
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] py-14">
          <div className="mx-auto w-[min(1100px,calc(100%-2rem))]">
            <SectionHeader
              title="Shop by category"
              subtitle="Find the right toy quickly—then make it gift-ready."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((c) => (
                <Card key={c.title}>
                  <div className="p-5">
                    <h3 className="text-base font-black text-slate-100">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300/90">{c.subtitle}</p>
                    <a
                      className="mt-4 inline-flex text-sm font-extrabold text-neon-blue hover:underline"
                      href="#contact"
                    >
                      Explore →
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-[min(1100px,calc(100%-2rem))] py-14">
          <SectionHeader
            title="What customers say"
            subtitle="Short, honest feedback from families and gift-givers."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <div className="p-6">
                  <p className="text-slate-100 leading-relaxed">“{t.quote}”</p>
                  <p className="mt-4 text-sm font-bold text-slate-300/90">— {t.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-[min(1100px,calc(100%-2rem))] pb-16">
          <div className="rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-neon-gold/10 to-neon-blue/10 p-6 shadow-glow">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-100">Get updates on new arrivals</h2>
                <p className="mt-2 max-w-2xl text-slate-300/90 leading-relaxed">
                  Monthly newsletter—promotions, gift guides, and play ideas.
                </p>
              </div>

              <form
                className="flex flex-col gap-3 sm:flex-row sm:items-center"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks! You’re subscribed (demo).");
                }}
              >
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full sm:w-80 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                />
                <button
                  type="submit"
                  className="rounded-2xl border border-white/15 bg-gradient-to-br from-neon-gold/90 to-neon-blue/80 px-4 py-3 text-sm font-extrabold text-space-950 transition hover:-translate-y-0.5 active:translate-y-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <Card>
              <div className="p-5">
                <h3 className="text-base font-black text-slate-100">Store hours</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  Mon–Fri: 10am–7pm<br />Sat: 10am–6pm<br />Sun: 11am–5pm
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-5">
                <h3 className="text-base font-black text-slate-100">Location</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  123 Playful Lane<br />WONDERLAND, ST 00000
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-5">
                <h3 className="text-base font-black text-slate-100">Contact</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/90">
                  hello@a1toy.example<br />(555) 123-4567
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-space-950/70 backdrop-blur">
      <div className="mx-auto flex w-[min(1100px,calc(100%-2rem))] items-center justify-between py-3">
        <a href="#top" className="inline-flex items-center gap-2 font-black text-slate-100" aria-label="BrightToy Home">
          <span className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5" aria-hidden="true">
            🧸
          </span>
          BrightToy
        </a>

        <nav className="flex items-center gap-4 text-sm font-bold text-slate-200/90" aria-label="Primary">
          <a className="hover:text-slate-100" href="#top">Home</a>
          <a className="hover:text-slate-100" href="#contact">Contact</a>
          <a
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
            href="#contact"
          >
            Gift help
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto w-[min(1100px,calc(100%-2rem))] py-14">
      <div className="grid gap-5 lg:grid-cols-[1.2fr,0.8fr] lg:items-stretch">
        <div>
          <Badge>New: Holiday gift guide</Badge>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-100 sm:text-5xl">
            Toys that spark imagination.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300/90 leading-relaxed">
            A friendly toy store with curated picks: plushies, puzzles, STEM kits, and outdoor play—made for real childhood joy.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#contact">Get gift recommendations</Button>
            <Button href="#contact" variant="secondary">Browse categories</Button>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-lg font-black text-slate-100">500+</div>
              <div className="text-xs font-bold text-slate-300/80">toy ideas</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-lg font-black text-slate-100">4.8★</div>
              <div className="text-xs font-bold text-slate-300/80">avg rating</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-lg font-black text-slate-100">2–3 days</div>
              <div className="text-xs font-bold text-slate-300/80">shipping</div>
            </div>
          </div>
        </div>

        <Card>
          <div className="p-6">
            <div className="grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <Showcase emoji="🚂" label="Trains" />
                <Showcase emoji="🧩" label="Puzzles" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Showcase emoji="🧪" label="STEM" />
                <Showcase emoji="🪁" label="Outdoor" />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
              <div>
                <div className="text-xs font-black text-slate-100">Free shipping</div>
                <div className="text-xs font-bold text-slate-300/80">On orders over $50</div>
              </div>
              <a className="text-sm font-extrabold text-neon-blue hover:underline" href="#contact">
                Ask for a gift list →
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Showcase({ emoji, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 animate-floaty">
      <div className="text-2xl" aria-hidden="true">{emoji}</div>
      <div className="mt-2 text-sm font-black text-slate-100">{label}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/10 py-6">
      <div className="mx-auto flex w-[min(1100px,calc(100%-2rem))] flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 font-black text-slate-100">
            <span className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5" aria-hidden="true">
              🧸
            </span>
            BrightToy
          </div>
          <p className="mt-2 text-sm text-slate-300/80">© {new Date().getFullYear()} BrightToy. All rights reserved.</p>
        </div>
        <div className="flex gap-4 text-sm font-bold text-slate-200/90">
          <a className="hover:text-slate-100" href="#top">Back to top</a>
          <a className="hover:text-slate-100" href="#contact">Contact</a>
          <a className="hover:text-slate-100" href="#contact">Shipping</a>
        </div>
      </div>
    </footer>
  );
}
