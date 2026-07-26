import { Instagram, MapPin, Phone } from "lucide-react";
import { NAV, SERVICES, INSTAGRAM, TIKTOK, WHATSAPP_COMPANY } from "./data";
import { TikTokIcon } from "./TikTokIcon";

export function Footer() {
  return (
    <footer className="surface-navy pt-20">
      <div className="container-x grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="شعار شركة راحة الزائر للسياحة"
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 rounded-2xl object-cover"
            />
            <span className="text-lg font-extrabold text-primary-foreground">
              راحة الزائر للسياحة
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-primary-foreground/70">
            حلول متكاملة في السياحة والضيافة والحجوزات، بتركيز خاص على مكة المكرمة والمدينة المنورة
            وتغطية جميع مناطق المملكة.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="انستقرام راحة الزائر"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-primary-foreground transition-colors hover:bg-white/10"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تيك توك راحة الزائر"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-primary-foreground transition-colors hover:bg-white/10"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav>
          <h3 className="text-base text-primary-foreground">روابط الموقع</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-base text-primary-foreground">خدماتنا</h3>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.title} className="text-sm text-primary-foreground/70">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-base text-primary-foreground">تواصل معنا</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a
                dir="ltr"
                href={`https://wa.me/${WHATSAPP_COMPANY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                0502053445
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              مكة المكرمة – حي العوالي
            </li>
          </ul>
          <a href="#contact" className="btn-gold mt-6 !py-2.5 text-sm">
            احجز الآن
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-x text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} شركة راحة الزائر للسياحة. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
