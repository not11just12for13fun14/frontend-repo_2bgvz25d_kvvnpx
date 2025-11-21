import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <footer className="relative border-t border-white/10 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400" />
            <span>EchoReply AI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} EchoReply Inc.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
