import { useState } from "react";
import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { WHATSAPP_COMPANY, INSTAGRAM, TIKTOK } from "./data";
import { SectionHead } from "./Sections";
import { TikTokIcon } from "./TikTokIcon";

const SERVICE_TYPES = [
  "حجز فندقي",
  "وحدة ضيافة / شقة",
  "منتجع أو شاليه",
  "برنامج حج أو عمرة",
  "حجز مجموعات أو وفود",
  "خدمات إعاشة وضيافة",
  "استفسار عقاري / استثماري",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "مكة المكرمة",
    service: SERVICE_TYPES[0],
    date: "",
    guests: "2",
    notes: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "طلب حجز جديد – شركة راحة الزائر للسياحة",
      "",
      `الاسم: ${form.name || "-"}`,
      `رقم الجوال: ${form.phone || "-"}`,
      `الوجهة: ${form.destination}`,
      `نوع الخدمة: ${form.service}`,
      `تاريخ الوصول: ${form.date || "-"}`,
      `عدد الأشخاص: ${form.guests || "-"}`,
      `ملاحظات: ${form.notes || "-"}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_COMPANY}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="bg-secondary py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHead
            eyebrow="تواصل معنا"
            title="أرسل طلبك ونعود إليك بأفضل الخيارات"
            desc="فريقنا جاهز لمساعدتك في اختيار الإقامة المناسبة لك ولعائلتك أو لمجموعتك."
          />

          <div className="mt-8 space-y-4">
            <a
              href={`https://wa.me/${WHATSAPP_COMPANY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lux card-lux-hover flex items-center gap-4 p-5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-accent">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-bold text-muted-foreground">
                  الجوال وواتساب
                </span>
                <span dir="ltr" className="block text-lg font-extrabold text-primary">
                  0558344453
                </span>
              </span>
            </a>

            <div className="card-lux flex items-center gap-4 p-5">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-accent">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-bold text-muted-foreground">الموقع</span>
                <span className="block text-lg font-extrabold text-primary">
                  مكة المكرمة – حي العوالي
                </span>
              </span>
            </div>

            <div className="flex gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="حساب انستقرام"
                className="card-lux card-lux-hover inline-flex h-12 w-12 items-center justify-center text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="حساب تيك توك"
                className="card-lux card-lux-hover inline-flex h-12 w-12 items-center justify-center text-primary"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="card-lux grid gap-4 p-6 sm:p-8 sm:grid-cols-2">
          <Input label="الاسم" value={form.name} onChange={set("name")} required />
          <Input
            label="رقم الجوال"
            value={form.phone}
            onChange={set("phone")}
            type="tel"
            required
          />
          <Select label="الوجهة" value={form.destination} onChange={set("destination")}>
            {[
              "مكة المكرمة",
              "المدينة المنورة",
              "الرياض",
              "جدة",
              "الطائف",
              "العلا",
              "أبها",
              "المنطقة الشرقية",
              "وجهة أخرى",
            ].map((d) => (
              <option key={d}>{d}</option>
            ))}
          </Select>
          <Select label="نوع الخدمة" value={form.service} onChange={set("service")}>
            {SERVICE_TYPES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </Select>
          <Input label="تاريخ الوصول" value={form.date} onChange={set("date")} type="date" />
          <Input
            label="عدد الأشخاص"
            value={form.guests}
            onChange={set("guests")}
            type="number"
            min={1}
          />
          <label className="sm:col-span-2 flex flex-col gap-1.5">
            <span className="text-xs font-bold text-muted-foreground">الملاحظات</span>
            <textarea
              rows={4}
              value={form.notes}
              onChange={set("notes")}
              placeholder="اذكر أي تفاصيل تساعدنا في ترشيح الخيار المناسب"
              className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
            />
          </label>
          <button type="submit" className="btn-gold sm:col-span-2">
            <MessageCircle className="h-5 w-5" />
            إرسال الطلب عبر واتساب
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold text-muted-foreground">{label}</span>
      <input
        {...props}
        className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}

function Select({
  label,
  children,
  ...props
}: { label: string } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold text-muted-foreground">{label}</span>
      <select
        {...props}
        className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
      >
        {children}
      </select>
    </label>
  );
}
