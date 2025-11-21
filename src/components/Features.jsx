import { Shield, Smile, Clock, Wand2, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Wand2 className="text-fuchsia-300" size={20} />,
      title: 'On-brand responses',
      desc: 'Train the tone to match your brand and adapt per location and platform.'
    },
    {
      icon: <Clock className="text-indigo-300" size={20} />,
      title: 'Save hours weekly',
      desc: 'Bulk-generate and approve responses across Google, Yelp and Facebook in minutes.'
    },
    {
      icon: <Smile className="text-cyan-300" size={20} />,
      title: 'Delight customers',
      desc: 'Empathetic, context-aware replies that turn critics into fans and fans into advocates.'
    },
    {
      icon: <Shield className="text-emerald-300" size={20} />,
      title: 'Compliance & safety',
      desc: 'Smart filters avoid sensitive claims and keep responses professional and secure.'
    },
  ];

  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-4 backdrop-blur">
            <Sparkles size={14} className="text-cyan-300" />
            Why teams choose EchoReply
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Designed for multi-location brands</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Centralize review management, keep replies consistent, and accelerate your response time across every channel.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="h-10 w-10 rounded-lg bg-white/[0.06] flex items-center justify-center mb-3 shadow-inner">
                {f.icon}
              </div>
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="text-white/70 text-sm mt-1 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
