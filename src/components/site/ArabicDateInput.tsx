import { useRef } from "react";

function formatAr(value: string) {
  if (!value) return "";
  const [y, m, d] = value.split("-");
  if (!y || !m || !d) return value;
  return `${d} / ${m} / ${y}`;
}

export function ArabicDateInput({
  value,
  onChange,
  required,
  className = "",
}: {
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLInputElement>(null);

  const open = () => {
    const el = ref.current;
    if (!el) return;
    // showPicker is available in modern browsers
    (el as HTMLInputElement & { showPicker?: () => void }).showPicker?.();
    el.focus();
  };

  return (
    <span
      onClick={open}
      className={`relative flex w-full cursor-pointer items-center ${className}`}
    >
      <input
        ref={ref}
        type="date"
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      />
      <span
        dir="rtl"
        className={`pointer-events-none text-sm font-semibold ${
          value ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {value ? formatAr(value) : "يوم / شهر / سنة"}
      </span>
    </span>
  );
}

export { formatAr as formatArabicDate };
