import { useState } from "react";
import { X, Send } from "lucide-react";
import { WHATSAPP_COMPANY } from "./data";

const QUICK = [
  "أرغب في حجز فندق بمكة المكرمة",
  "أرغب في حجز وحدة ضيافة بالمدينة المنورة",
  "أرغب بعرض سعر لمجموعة",
];

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const send = (message?: string) => {
    const body = (message ?? text).trim() || "السلام عليكم، أرغب بالاستفسار عن خدماتكم 🌿";
    window.open(
      `https://wa.me/${WHATSAPP_COMPANY}?text=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setText("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 left-5 z-[60] flex flex-col items-start gap-3">
      {open && (
        <div className="w-[min(88vw,340px)] overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]">
          <div className="surface-navy flex items-center gap-3 px-4 py-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]">
              <WhatsAppIcon className="h-6 w-6 text-white" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-bold text-primary-foreground">شركة راحة الزائر</p>
              <p className="text-[11px] text-primary-foreground/70">عادةً نرد خلال دقائق</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="إغلاق نافذة المحادثة"
              className="text-primary-foreground/80 hover:text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-3 bg-secondary/60 px-4 py-4">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-card px-4 py-3 text-sm leading-6 text-foreground shadow-sm">
              أهلاً بك 🌿 اكتب رسالتك وسنكمل المحادثة على واتساب مباشرة.
            </div>
            <div className="flex flex-wrap gap-2">
              {QUICK.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-end gap-2 border-t border-border bg-card p-3"
          >
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={2}
              placeholder="اكتب رسالتك هنا..."
              aria-label="نص الرسالة"
              className="max-h-28 flex-1 resize-none rounded-2xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
            />
            <button
              type="submit"
              aria-label="إرسال عبر واتساب"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105"
            >
              <Send className="h-5 w-5 -scale-x-100" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="تواصل معنا عبر واتساب"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_18px_35px_-12px_rgba(37,211,102,0.8)] transition-transform hover:scale-105"
      >
        {open ? (
          <X className="h-7 w-7 text-white" />
        ) : (
          <WhatsAppIcon className="h-8 w-8 text-white" />
        )}
      </button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.470 0 1.45 1.06 2.85 1.21 3.05.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 01-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 01-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4a9.33 9.33 0 016.65 2.76 9.31 9.31 0 012.75 6.65c0 5.19-4.22 9.41-9.41 9.41zM20.46 3.54A11.75 11.75 0 0012.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.14 1.59 5.94L.07 24l6.33-1.66a11.86 11.86 0 005.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.48-8.36z" />
    </svg>
  );
}
