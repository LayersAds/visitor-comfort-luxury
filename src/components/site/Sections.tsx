import { useState } from "react";
import {
  BedDouble,
  KeyRound,
  Landmark,
  MoonStar,
  Route,
  Compass,
  Briefcase,
  Palmtree,
  Map,
  Handshake,
  Check,
  ChevronDown,
  UtensilsCrossed,
} from "lucide-react";
import {
  SERVICES,
  STAY_GROUPS,
  DESTINATIONS,
  WHY,
  CATERING,
  STEPS,
  FAQ,
} from "./data";

const ICONS: Record<string, React.ElementType> = {
  hotel: BedDouble,
  key: KeyRound,
  kaaba: Landmark,
  mosque: MoonStar,
  route: Route,
  compass: Compass,
  briefcase: Briefcase,
  palm: Palmtree,
  map: Map,
  handshake: Handshake,
};

export function SectionHead({
  eyebrow,
  title,
  desc,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="text-xs font-extrabold tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2
        className={`mt-3 text-3xl leading-tight sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}
      >
        {title}
      </h2>
      <div className={`gold-rule mt-4 ${center ? "mx-auto" : ""}`} />
      {desc && (
        <p
          className={`mt-4 text-[15px] leading-8 ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="container-x">
        <SectionHead
          eyebrow="خدماتنا"
          title="خدمات سياحية وضيافة متكاملة"
          desc="من الحجز الفندقي إلى تنظيم برامج الإقامة للمجموعات والوفود، نغطي احتياجك من مكان واحد."
          center
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] ?? BedDouble;
            return (
              <article key={s.title} className="card-lux card-lux-hover overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-card text-accent shadow-md">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Stays() {
  return (
    <section id="stays" className="bg-secondary py-24">
      <div className="container-x">
        <SectionHead
          eyebrow="خيارات الإقامة"
          title="اختر نمط الإقامة الذي يناسبك"
          desc="مجموعات منظمة من وحدات الضيافة تناسب الأفراد والعائلات والمجموعات والشركات."
          center
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
          {STAY_GROUPS.map((g) => (
            <article key={g.title} className="card-lux card-lux-hover overflow-hidden">
              <img
                src={g.img}
                alt={g.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-64 w-full object-cover sm:h-72"
              />
              <div className="p-6">
                <h3 className="text-xl text-primary">{g.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Destinations() {
  return (
    <section id="destinations" className="bg-background py-24">
      <div className="container-x">
        <SectionHead
          eyebrow="الوجهات"
          title="وجهاتنا داخل المملكة"
          desc="تغطية واسعة تبدأ من الحرمين الشريفين وتمتد إلى أبرز مدن ومناطق المملكة."
          center
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <article
              key={d.name}
              className="group relative isolate overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]"
            >
              <img
                src={d.img}
                alt={d.name}
                loading="lazy"
                width={1200}
                height={900}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 25%, color-mix(in oklab, var(--navy-deep) 88%, transparent) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl text-primary-foreground">{d.name}</h3>
                <p className="mt-1 text-xs leading-6 text-primary-foreground/80">{d.desc}</p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-accent"
                >
                  استكشف الإقامة
                  <span aria-hidden>←</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Hajj() {
  const points = [
    "حجوزات إقامة بالقرب من المواقع المهمة",
    "خيارات للمجموعات والأفراد",
    "خدمات للوفود والشركات",
    "تنسيق برامج الإقامة",
    "حلول الإعاشة والضيافة",
    "دعم قبل وأثناء الرحلة",
  ];
  return (
    <section className="surface-navy py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHead
            eyebrow="الحج والعمرة"
            title="راحة تليق بضيوف الرحمن"
            desc="نعتني بتفاصيل الإقامة والإعاشة حتى يتفرغ ضيوف الرحمن لعبادتهم، بترتيبات واضحة ومتابعة مستمرة من فريقنا."
            light
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-primary-foreground/90"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {p}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-gold mt-8">
            اطلب برنامج إقامة
          </a>
        </div>
        <div className="relative">
          <img
            src="/images/hajj.jpg"
            alt="معتمرون في طريقهم إلى المسجد الحرام"
            loading="lazy"
            width={1200}
            height={912}
            className="h-[28rem] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
          />
          <img
            src="/images/madinah.jpg"
            alt="المسجد النبوي الشريف في المدينة المنورة"
            loading="lazy"
            width={1200}
            height={912}
            className="absolute -bottom-8 left-4 hidden h-40 w-56 rounded-3xl border-4 border-[var(--cream)] object-cover shadow-[var(--shadow-lift)] sm:block"
          />
        </div>
      </div>
    </section>
  );
}

export function Catering() {
  return (
    <section className="bg-background py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <img
          src="/images/catering.jpg"
          alt="بوفيه ضيافة فاخر في قاعة مناسبات"
          loading="lazy"
          width={1200}
          height={900}
          className="h-[24rem] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
        />
        <div>
          <SectionHead
            eyebrow="المطاعم والإعاشة"
            title="ضيافة وطعام بمعايير احترافية"
            desc="حلول إعاشة متكاملة للفنادق والفعاليات والمجموعات وضيوف الرحمن."
          />
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {CATERING.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 rounded-xl bg-secondary px-4 py-3 text-sm text-foreground/85"
              >
                <UtensilsCrossed className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


export function About() {
  return (
    <section id="about" className="bg-background py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <img
          src="/images/family.jpg"
          alt="عائلة تصل إلى الفندق"
          loading="lazy"
          width={1200}
          height={900}
          className="h-[24rem] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
        />
        <div>
          <SectionHead
            eyebrow="من نحن"
            title="شركة راحة الزائر للسياحة"
            desc="شركة سعودية متخصصة في السياحة والضيافة والحجوزات، تتخذ من مكة المكرمة مقرًا لها، وتقدم حلولًا متكاملة للإقامة والإعاشة والبرامج السياحية."
          />
          <p className="mt-5 text-[15px] leading-8 text-muted-foreground">
            نخدم الحجاج والمعتمرين وزوار الحرمين الشريفين، والسياح المحليين والدوليين، والعائلات
            والأفراد، والشركات والمؤسسات والوفود الرسمية، ومنظمي الرحلات الجماعية ووكالات السفر
            ومنظمي المؤتمرات والفعاليات، إضافة إلى المستثمرين وشركاء القطاع السياحي.
          </p>
          <p className="mt-4 text-[15px] leading-8 text-muted-foreground">
            نعمل وفق الأنظمة واللوائح السعودية، ونحرص على وضوح الإجراءات وسرعة الاستجابة في كل مرحلة
            من مراحل الحجز.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section id="why" className="bg-secondary py-24">
      <div className="container-x">
        <SectionHead
          eyebrow="لماذا راحة الزائر؟"
          title="أسباب تجعل حجزك معنا أكثر راحة"
          center
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <div key={w} className="card-lux card-lux-hover flex items-start gap-3 p-5">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-xs font-extrabold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-7 text-foreground/85">{w}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section className="bg-background py-24">
      <div className="container-x">
        <SectionHead eyebrow="خطوات الحجز" title="خمس خطوات فقط تفصلك عن إقامتك" center />
        <ol className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <li key={s.t} className="card-lux card-lux-hover p-6">
              <span className="text-gradient-gold text-3xl font-extrabold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base text-primary">{s.t}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-24">
      <div className="container-x">
        <SectionHead eyebrow="الأسئلة الشائعة" title="إجابات سريعة قبل الحجز" center />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="card-lux overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                >
                  <span className="text-[15px] font-bold text-primary">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="border-t border-border px-6 py-5 text-sm leading-8 text-muted-foreground">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
