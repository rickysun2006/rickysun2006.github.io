import Image from "next/image";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About" title="A little about me">
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="card p-7 sm:col-span-2">
          <p className="text-[15px] sm:text-base leading-[1.8] text-soft">
            I&rsquo;m a second-year undergrad at SUSTech, majoring in Computer
            Science and Engineering. My research sits at the intersection of{" "}
            <span className="font-semibold text-[rgb(var(--fg))]">
              human&ndash;AI collaboration
            </span>
            ,{" "}
            <span className="font-semibold text-[rgb(var(--fg))]">
              creativity support
            </span>
            , and{" "}
            <span className="font-semibold text-[rgb(var(--fg))]">
              visualization
            </span>
            &mdash; with a growing curiosity about how these tools might open
            new ways of thinking in the digital humanities.
          </p>
          <p className="mt-5 text-[15px] sm:text-base leading-[1.8] text-soft">
            I care about building interfaces that think{" "}
            <em className="not-italic text-brand font-medium">with</em> people,
            not just <em className="not-italic">for</em> them &mdash; systems
            that invite reflection, playfulness, and a little bit of friction.
            I like working at the seam between technical craft and humanistic
            questions.
          </p>
        </div>

        <div className="card p-7 flex flex-col">
          <div className="section-label mb-3">Offline</div>
          <p className="text-[15px] leading-[1.75] text-soft">
            Designated can-opener for two cats.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <CatCard
              src="/images/schrodinger.jpg"
              name="Schrödinger"
              suffix="Elizabeth Sun"
            />
            <CatCard
              src="/images/planck.jpg"
              name="Planck"
              suffix="Margaret Yang"
            />
          </div>

          <p className="mt-5 text-sm text-muted leading-relaxed">
            Also: long walks, reading across disciplines, and picking up new
            languages.
          </p>
        </div>
      </div>
    </Section>
  );
}

function CatCard({
  src,
  name,
  suffix,
}: {
  src: string;
  name: string;
  suffix: string;
}) {
  return (
    <figure className="group relative overflow-hidden rounded-2xl border border-subtle bg-surface">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={src}
          alt={`${name} ${suffix}`}
          fill
          sizes="(max-width: 640px) 40vw, 180px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>
      <figcaption className="absolute bottom-0 left-0 right-0 px-3 pb-2.5 pt-8">
        <div className="text-[13px] font-semibold text-white drop-shadow-sm">
          {name}
        </div>
        <div className="text-[10px] font-mono uppercase tracking-wider text-white/80">
          {suffix}
        </div>
      </figcaption>
    </figure>
  );
}
