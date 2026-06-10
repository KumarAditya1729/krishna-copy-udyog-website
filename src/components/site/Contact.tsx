import { useId, useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, User } from "lucide-react";
import { SITE, telLink, mailLink, waLink } from "@/lib/site";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.phone.trim()) next.phone = "Phone is required";
    else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone";
    if (!form.product.trim()) next.product = "Product is required";
    setErrors(next);
    if (Object.keys(next).length) return;

    const msg =
      `Hello ${SITE.name}, I am interested in a bulk order.\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Product Required: ${form.product}\n` +
      `Quantity: ${form.quantity || "-"}\n` +
      `Message: ${form.message || "-"}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FCF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Get in Touch
          </span>
          <h2 className="mt-3 font-display font-extrabold text-[#3A3A3A] text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Get Catalogue &amp; Bulk Pricing
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9F9F9F] leading-relaxed">
            Talk to Suraj Kumar directly. Call, WhatsApp, or send us your requirement and
            we&apos;ll share the catalogue with bulk rates.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Contact card */}
          <div className="lg:col-span-2 rounded-2xl bg-[#3A3A3A] text-white p-6 sm:p-8 shadow-card relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-white/10">
                  <User className="h-5 w-5 text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">
                    Contact Person
                  </div>
                  <div className="font-display font-bold text-lg text-white">{SITE.contact}</div>
                </div>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                  <a href={telLink} className="text-white font-semibold hover:text-primary transition">
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                  <a
                    href={mailLink}
                    className="text-white font-semibold hover:text-primary transition break-all"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                  <span className="text-white/80 leading-relaxed">{SITE.address}</span>
                </li>
              </ul>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={telLink}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-[#3A3A3A] font-semibold hover:bg-primary hover:text-white transition"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href={waLink(`Hello ${SITE.name}, I want bulk pricing.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:opacity-90 transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="lg:col-span-3 rounded-2xl bg-white border border-[#D9D9D9] p-6 sm:p-8 shadow-card"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="Your Name"
                required
                value={form.name}
                onChange={(v) => update("name", v)}
                placeholder="e.g. Ramesh Sharma"
                error={errors.name}
              />
              <Field
                label="Phone Number"
                required
                type="tel"
                value={form.phone}
                onChange={(v) => update("phone", v)}
                placeholder="+91 ..."
                error={errors.phone}
              />
              <Field
                label="Product Required"
                required
                value={form.product}
                onChange={(v) => update("product", v)}
                placeholder="e.g. A4 Register 200 pages"
                error={errors.product}
              />
              <Field
                label="Quantity"
                value={form.quantity}
                onChange={(v) => update("quantity", v)}
                placeholder="e.g. 500 pcs"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="enquiry-message"
                className="block text-sm font-semibold text-[#333333] mb-1.5"
              >
                Message
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={4}
                placeholder="Share size, paper, customization or delivery details..."
                className="w-full rounded-lg border border-[#D9D9D9] bg-white px-4 py-3 text-[#333333] placeholder:text-[#BBBBBB] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-[#25D366] text-white font-semibold shadow-card hover:opacity-90 transition"
            >
              <Send className="h-4 w-4" /> Send Enquiry on WhatsApp
            </button>
            <p className="mt-3 text-xs text-[#9F9F9F]">
              Submitting opens WhatsApp with your details prefilled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground mb-1.5">
        {label} {required && <span className="text-accent" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={120}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        autoComplete={
          type === "tel" ? "tel" : type === "email" ? "email" : "off"
        }
        className={`w-full rounded-xl border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent transition ${
          error ? "border-destructive" : "border-input focus:border-accent"
        }`}
      />
      {error && (
        <p id={errorId} className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
