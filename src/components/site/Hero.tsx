import { useState } from "react";
import { CalendarDays, MapPin, Users, MessageCircle } from "lucide-react";
import { WHATSAPP_COMPANY } from "./data";
import { ArabicDateInput, formatArabicDate } from "./ArabicDateInput";

export function Hero() {
  const [destination, setDestination] = useState("مكة المكرمة");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const book = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "السلام عليكم ورحمة الله وبركاته 🌿",
      "أرغب في إتمام حجز عبر *شركة راحة الزائر للسياحة*، وهذه تفاصيل طلبي:",
      "",
      `• الوجهة: ${destination}`,
      `• تاريخ الوصول: ${checkIn ? formatArabicDate(checkIn) : "غير محدد"}`,
      `• تاريخ المغادرة: ${checkOut ? formatArabicDate(checkOut) : "غير محدد"}`,
      `• عدد النزلاء: ${guests || "-"}`,
      "",
      "أرجو تزويدي بالخيارات المتاحة والأسعار. وشكرًا لكم 🌸",
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_COMPANY}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <img
        src="/images/hero-makkah.jpg"
        alt="الحرم المكي الشريف والكعبة المشرفة وقت المغرب"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--navy-deep) 82%, transparent) 0%, color-mix(in oklab, var(--navy-deep) 62%, transparent) 45%, color-mix(in oklab, var(--navy-deep) 88%, transparent) 100%)",
        }}
      />

      <div className="container-x flex min-h-[100svh] flex-col justify-center pb-16 pt-32 sm:pt-36">
        <div className="rise max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold text-primary-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            مكة المكرمة • المدينة المنورة • جميع مناطق المملكة
          </span>

          <h1 className="mt-6 text-4xl leading-[1.25] text-primary-foreground sm:text-5xl lg:text-6xl">
            رحلتك تبدأ براحة…
            <br />
            <span className="text-gradient-gold">وإقامتك نختارها بعناية</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/85 sm:text-lg">
            نوفّر لك حجوزات موثوقة للفنادق والشقق والمنتجعات ووحدات الضيافة في مكة المكرمة والمدينة
            المنورة وجميع أنحاء المملكة، بخيارات تناسب احتياجك وميزانيتك.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#stays" className="btn-gold">
              استعرض خيارات الإقامة
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_COMPANY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light"
            >
              <MessageCircle className="h-5 w-5" />
              تواصل معنا عبر واتساب
            </a>
          </div>
        </div>

        <form
          onSubmit={book}
          className="rise mt-12 rounded-3xl border border-white/25 bg-white/85 p-4 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-5"
        >
          <div className="grid gap-3 md:grid-cols-5">
            <Field label="الوجهة" icon={<MapPin className="h-4 w-4" />}>
              <select
                name="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-foreground outline-none"
              >
                <option>مكة المكرمة</option>
                <option>المدينة المنورة</option>
                <option>الرياض</option>
                <option>جدة</option>
                <option>الطائف</option>
                <option>العلا</option>
                <option>أبها</option>
                <option>المنطقة الشرقية</option>
              </select>
            </Field>
            <Field label="تاريخ الوصول" icon={<CalendarDays className="h-4 w-4" />}>
              <ArabicDateInput value={checkIn} onChange={setCheckIn} />
            </Field>
            <Field label="تاريخ المغادرة" icon={<CalendarDays className="h-4 w-4" />}>
              <ArabicDateInput value={checkOut} onChange={setCheckOut} />
            </Field>
            <Field label="عدد النزلاء" icon={<Users className="h-4 w-4" />}>
              <input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-foreground outline-none"
              />
            </Field>
            <button type="submit" className="btn-gold h-full min-h-14 w-full">
              <MessageCircle className="h-5 w-5" />
              حجز
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1 rounded-2xl border border-border bg-card px-4 py-3">
      <span className="flex items-center gap-1.5 text-[11px] font-bold text-muted-foreground">
        <span className="text-accent">{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}
