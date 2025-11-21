import { CheckCircle2, MousePointerClick, FileText, MessageSquare } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Connect your profiles',
      desc: 'Securely link Google, Yelp, and Facebook pages in a few clicks to sync your latest reviews.',
      icon: <MousePointerClick size={18} className="text-fuchsia-300" />
    },
    {
      title: 'Set your voice',
      desc: 'Upload examples and brand guidelines. The model mirrors your tone across every response.',
      icon: <FileText size={18} className="text-indigo-300" />
    },
    {
      title: 'Approve with one tap',
      desc: 'Generate batches of replies. Approve, edit, or auto-post with guardrails in place.',
      icon: <CheckCircle2 size={18} className="text-cyan-300" />
    },
  ];

  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">From review to response — in seconds</h2>
          <p className="mt-3 text-white/70">A streamlined workspace designed for speed and quality. Keep oversight while cutting manual work.</p>

          <div className="mt-8 space-y-5">
            {steps.map((s, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <div className="h-10 w-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium">{s.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="rounded-xl border border-white/10 bg-slate-950 p-5">
              <div className="flex items-center gap-3 text-white/70 text-sm">
                <MessageSquare size={18} className="text-fuchsia-300" />
                <span>Sample review</span>
              </div>
              <p className="mt-3 text-white/80">
                "The staff was friendly and the food was great but our order took a while to arrive."
              </p>
              <div className="mt-5 text-xs text-white/50">EchoReply suggestions</div>
              <div className="mt-2 grid gap-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-white/80">
                  Thanks for visiting and for the kind words about our team and food. We're sorry about the wait — we've shared this with our kitchen lead to improve timing. We'd love to make it up to you next time.
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-white/80">
                  We appreciate the feedback and your patience. We're tightening up our prep during peak hours. Hope to welcome you back soon!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
