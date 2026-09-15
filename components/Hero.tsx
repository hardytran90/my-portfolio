export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden px-6 pb-24 pt-40">
            <div aria-hidden 
            className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full opacity-30 blur-[110px]"
            style={{
                backgroundImage: "radial-gradient(closest-side, var(--color-past), transparent 70%)",
            }}
            />
            <div aria-hidden
            className="pointer-events-none absolute -bottom-56 left-[-8%] h-[520px] w-[520px] rounded-full opacity-30 blur-[110px]" 
            style={{
                backgroundImage: "radial-gradient(closest-side, var(--color-future), transparent 70%)",
            }}
            />
            <div className="relative mx-auto max-w-3xl">
            <p className="text-xs text-muted">Adelaide, South Australia</p>

            <h1 className="mt-6 text-[2.5rem] leading-[1.1] tracking-tight text-ink sm:text-6xl">
            Ten years in business & finance.
            <br />
            Now I build{" "}
            <span className="bg-[linear-gradient(100deg,var(--color-past)_0%,var(--color-future)_100%)] bg-clip-text text-transparent">
                software.
            </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I'm Hardy — a software engineer in Adelaide.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
          
            <a href="#projects"
            className="rounded-full bg-[linear-gradient(100deg,var(--color-past)_0%,var(--color-future)_100%)] px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5">
            See what I've built
          </a>
          
            <a href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-future/60 hover:text-future">
            Get in touch
          </a>
        </div>
      </div>
        </section>
    )
}