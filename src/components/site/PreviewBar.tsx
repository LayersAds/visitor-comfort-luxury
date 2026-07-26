import { Sparkles } from "lucide-react";
import { WHATSAPP_SUBSCRIBE } from "./data";

export function PreviewBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-accent/40 bg-[color-mix(in_oklab,var(--navy-deep)_92%,transparent)] backdrop-blur-xl">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-3 sm:flex-row">
        <p className="flex items-center gap-2 text-center text-[13px] leading-6 text-primary-foreground/85 sm:text-right">
          <Sparkles className="hidden h-4 w-4 shrink-0 text-accent sm:block" />
          هذا الموقع نسخة معاينة فقط. هل أعجبك الموقع وتريد اعتماده والاشتراك؟
        </p>
        <a
          href={WHATSAPP_SUBSCRIBE}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold w-full !py-2.5 text-sm sm:w-auto"
        >
          أعجبني الموقع – أريد الاشتراك
        </a>
      </div>
    </div>
  );
}
