import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />

      {/* Top nav */}
      <nav className="relative z-20 max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 shadow-[0_0_50px_rgba(139,92,246,0.6)]" />
          <span className="text-white/90 text-lg font-semibold tracking-tight">EchoReply AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#how">How it works</a>
          <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-white/80 hover:text-white transition-colors">Sign in</button>
          <a href="#pricing" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-white/90 transition-colors">
            Get started
            <ArrowRight size={18} />
          </a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-6 pb-20 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4 backdrop-blur">
            <Sparkles size={14} className="text-fuchsia-300" />
            AI review response automation for Google, Yelp & Facebook
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            Turn every customer review into brand-building conversation
          </h1>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            EchoReply AI crafts on-brand, empathetic responses to every review in seconds. Maintain your voice, boost ratings, and save hours each week.
          </p>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white font-medium shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:opacity-95 transition">
              Start free trial
              <ArrowRight size={18} />
            </a>
            <a href="#how" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white/85 hover:bg-white/5 transition">
              See how it works
            </a>
          </div>
          {/* Logos */}
          <div className="mt-10 flex items-center justify-center md:justify-start gap-6 opacity-90">
            <span className="text-white/50 text-sm">Responds on</span>
            <img src="/logos/google.svg" alt="Google" className="h-6" />
            <img src="/logos/yelp.svg" alt="Yelp" className="h-6" />
            <img src="/logos/facebook.svg" alt="Facebook" className="h-6" />
          </div>
        </div>
        {/* Spline 3D animation */}
        <div className="relative h-[420px] sm:h-[520px] md:h-[600px]">
          <div className="absolute inset-0 rounded-[28px] overflow-hidden ring-1 ring-white/10 shadow-[0_0_80px_rgba(168,85,247,0.25)]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Gradient overlay for glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Decorative radial glow behind Spline */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full opacity-50" style={{
        background: 'radial-gradient(closest-side, rgba(168,85,247,0.25), rgba(59,130,246,0.18), transparent 70%)'
      }} />
    </section>
  );
}
