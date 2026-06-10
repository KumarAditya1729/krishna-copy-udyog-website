import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Send, Building2, CheckCircle2, MessageCircle } from "lucide-react";

const WA_NUMBER = "918210150897";
const EMAIL     = "krishnacopyudyog2021@gmail.com";

export function ContactSection() {
  const [form, setForm]       = useState({ name:"", email:"", phone:"", inquiry:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]   = useState(false);

  const contactInfo = [
    {
      icon: Building2,
      title: "Headquarters & Factory",
      lines: ["Kamaldah Path, Navneet Housing Society", "Patna City, Bihar, 800008, India"],
      href: "https://maps.google.com/?q=Kamaldah+Path+Patna+City+Bihar",
    },
    {
      icon: Phone,
      title: "Call or WhatsApp",
      lines: ["+91 8210150897", "(Mon-Sat, 9 AM – 6 PM IST)"],
      href: `https://wa.me/${WA_NUMBER}`,
    },
    {
      icon: Mail,
      title: "Email Inquiries",
      lines: [EMAIL],
      href: `mailto:${EMAIL}`,
    },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function buildWhatsAppMsg() {
    return (
      `*New Inquiry – Krishna Copy Udyog Website*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `📧 *Email:* ${form.email}\n` +
      `📱 *Phone:* ${form.phone || "Not provided"}\n` +
      `📋 *Inquiry Type:* ${form.inquiry || "Not specified"}\n\n` +
      `📝 *Requirements:*\n${form.message}`
    );
  }

  function buildMailtoLink() {
    const subject = encodeURIComponent(`Bulk Inquiry from ${form.name} – Krishna Copy Udyog`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInquiry: ${form.inquiry}\n\nRequirements:\n${form.message}`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSending(true);

    // Open WhatsApp with prefilled message
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildWhatsAppMsg())}`;
    window.open(waUrl, "_blank");

    // After a short delay also open mailto as fallback
    setTimeout(() => {
      window.location.href = buildMailtoLink();
      setSending(false);
      setSubmitted(true);
    }, 800);
  }

  function handleWhatsAppDirect() {
    const text = form.name
      ? buildWhatsAppMsg()
      : "Hi! I want to inquire about bulk notebooks from Krishna Copy Udyog.";
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  }

  const inputClass = "h-14 rounded-xl bg-[rgba(15,13,39,0.6)] border-[rgba(124,92,191,0.2)] text-white placeholder:text-[#8b83b0] focus-visible:ring-[#7c5cbf] focus-visible:border-[#7c5cbf] px-5";

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: '#0f0d27' }}>
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none translate-x-1/3 translate-y-1/3"
        style={{ background: 'radial-gradient(circle, #7c5cbf 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#a78bfa' }}>
            Get In Touch
          </p>
          <h2 className="font-display font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Get Catalogue &amp; <br/>
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #7c5cbf)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>Bulk Pricing</span>
          </h2>
          <p className="text-[#8b83b0] text-lg leading-relaxed">
            Talk to Suraj Kumar directly. Call, WhatsApp, or send us your requirement and we'll share the catalogue with bulk rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* ── Contact Info Cards ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 rounded-2xl p-8 transition-all hover:-translate-y-1 cursor-pointer no-underline"
                  style={{
                    background: 'rgba(30,27,69,0.5)',
                    border: '1px solid rgba(124,92,191,0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div className="bg-[rgba(124,92,191,0.15)] p-4 rounded-2xl shrink-0">
                    <Icon className="w-6 h-6 text-[#a78bfa]" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-white mb-2">{item.title}</h4>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-[#8b83b0] text-base leading-relaxed break-all">{line}</p>
                    ))}
                  </div>
                </a>
              );
            })}

            {/* WhatsApp Quick CTA */}
            <button
              onClick={handleWhatsAppDirect}
              className="flex items-center justify-center gap-3 w-full rounded-2xl py-5 font-bold text-white text-base transition-all hover:-translate-y-1 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                boxShadow: '0 10px 30px rgba(37,211,102,0.25)',
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Instantly
            </button>
          </div>

          {/* ── Contact Form ── */}
          <div className="lg:col-span-7 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: 'rgba(30,27,69,0.7)',
              border: '1px solid rgba(124,92,191,0.3)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c5cbf] rounded-full blur-[100px] opacity-20 pointer-events-none" />

            {submitted ? (
              /* ── SUCCESS STATE ── */
              <div className="flex flex-col items-center justify-center text-center py-12 gap-6 relative z-10">
                <div className="w-20 h-20 rounded-full bg-[rgba(37,211,102,0.15)] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-[#25D366]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Inquiry Sent!</h3>
                <p className="text-[#8b83b0] text-base max-w-sm leading-relaxed">
                  Your message has been sent via WhatsApp and email. Suraj Kumar will get back to you shortly!
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", inquiry:"", message:"" }); }}
                  className="px-8 py-3 rounded-xl font-bold text-white transition-all hover:opacity-80"
                  style={{ background: 'rgba(124,92,191,0.3)', border: '1px solid rgba(124,92,191,0.5)' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              /* ── FORM ── */
              <>
                <h3 className="font-display font-bold text-2xl text-white mb-8 relative z-10">Send us a message</h3>

                <form className="space-y-6 relative z-10" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-semibold text-[#c4b5fd]">Full Name *</Label>
                      <Input
                        id="name" name="name" required
                        value={form.name} onChange={handleChange}
                        placeholder="Your Full Name"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-semibold text-[#c4b5fd]">Email Address *</Label>
                      <Input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-semibold text-[#c4b5fd]">Phone / WhatsApp</Label>
                      <Input
                        id="phone" name="phone"
                        value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="inquiry" className="text-sm font-semibold text-[#c4b5fd]">Inquiry Type</Label>
                      <select
                        id="inquiry" name="inquiry"
                        value={form.inquiry} onChange={handleChange}
                        className="flex h-14 w-full rounded-xl border px-5 py-2 text-base appearance-none bg-[rgba(15,13,39,0.6)] border-[rgba(124,92,191,0.2)] text-white focus:outline-none focus:ring-1 focus:ring-[#7c5cbf] transition-colors"
                      >
                        <option value="" className="bg-[#1e1b45] text-[#8b83b0]">Select an option...</option>
                        <option value="Bulk Export"        className="bg-[#1e1b45] text-white">Bulk Export</option>
                        <option value="Domestic Wholesale" className="bg-[#1e1b45] text-white">Domestic Wholesale</option>
                        <option value="OEM / Custom Branding" className="bg-[#1e1b45] text-white">OEM / Custom Branding</option>
                        <option value="Other"              className="bg-[#1e1b45] text-white">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold text-[#c4b5fd]">Your Requirements *</Label>
                    <Textarea
                      id="message" name="message" required rows={5}
                      value={form.message} onChange={handleChange}
                      placeholder="Please specify product types, GSM, binding, quantity, and destination port/city..."
                      className="rounded-xl bg-[rgba(15,13,39,0.6)] border-[rgba(124,92,191,0.2)] text-white placeholder:text-[#8b83b0] focus-visible:ring-[#7c5cbf] focus-visible:border-[#7c5cbf] p-5 resize-none"
                    />
                  </div>

                  {/* Primary: WhatsApp submit */}
                  <button
                    type="submit"
                    disabled={sending || !form.name || !form.email || !form.message}
                    className="w-full h-14 rounded-xl font-bold text-white text-base flex items-center justify-center gap-2 mt-2 transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    style={{
                      background: sending
                        ? 'rgba(124,92,191,0.5)'
                        : 'linear-gradient(135deg, #7c5cbf, #a78bfa)',
                      boxShadow: '0 10px 25px rgba(124,92,191,0.3)',
                    }}
                  >
                    {sending ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#8b83b0]">
                    Clicking submit will open WhatsApp &amp; your email client with your details pre-filled.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
