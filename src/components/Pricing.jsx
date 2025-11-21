import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      desc: 'For single-location owners testing AI replies',
      features: ['50 responses / mo', '1 connected profile', 'Basic tone controls', 'Email support']
    },
    {
      name: 'Growth',
      price: '$49',
      desc: 'For growing brands managing 2-10 locations',
      featured: true,
      features: ['Unlimited responses', 'Up to 10 profiles', 'Brand voice training', 'Auto-post with guardrails']
    },
    {
      name: 'Scale',
      price: 'Custom',
      desc: 'For franchises and enterprises',
      features: ['Unlimited everything', 'SSO & roles', 'APIs & webhooks', 'Dedicated success manager']
    }
  ];

  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Simple, transparent pricing</h2>
        <p className="mt-3 text-white/70">Start free. Upgrade when you see the value.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-2xl border ${p.featured ? 'border-fuchsia-400/40 bg-white/10 shadow-[0_0_60px_rgba(168,85,247,0.25)]' : 'border-white/10 bg-white/[0.06]'} p-6`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white text-xs px-3 py-1">Most popular</div>
              )}
              <div className="text-white text-lg font-medium">{p.name}</div>
              <div className="mt-1 text-white text-3xl font-semibold">{p.price}<span className="text-base text-white/60">{p.price !== 'Custom' ? '/mo' : ''}</span></div>
              <div className="mt-1 text-white/70 text-sm">{p.desc}</div>
              <div className="mt-5 space-y-2">
                {p.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-white/10 text-emerald-300"><Check size={14} /></span>
                    {f}
                  </div>
                ))}
              </div>
              <button className={`mt-6 w-full rounded-xl px-4 py-2.5 font-medium transition ${p.featured ? 'bg-white text-slate-900 hover:bg-white/90' : 'border border-white/15 text-white/90 hover:bg-white/10'}`}>Choose {p.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
