import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0066FF] to-[#7F00FF] flex items-center justify-center shadow-2xl">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3v18l14-9L5 3z" fill="#fff" />
            </svg>
          </div>
          <div>
            <div className="text-lg font-bold">UVPlayer</div>
            <div className="text-xs text-gray-300 -mt-1">Play Everything. Everywhere.</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a className="text-gray-300 hover:text-white" href="#features">Features</a>
          <a className="text-gray-300 hover:text-white" href="#pricing">Pricing</a>
          <a className="text-gray-300 hover:text-white" href="#roadmap">Roadmap</a>
          <a className="px-4 py-2 bg-gradient-to-br from-[#0066FF] to-[#7F00FF] text-black rounded-lg font-semibold shadow-lg" href="#get">Get Early Access</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        <section className="grid md:grid-cols-2 gap-8 items-center py-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Play Everything. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#7F00FF]">Everywhere</span>.</h1>
            <p className="text-gray-300 mt-4 max-w-xl">One universal AI-powered media player for <strong>videos, music, photos, and streaming</strong> — all in one sleek app. Cloud sync, AI subtitles, social watch parties, and advanced formats support.</p>
            <div className="mt-6 flex gap-3">
              <a id="get" className="px-5 py-3 bg-gradient-to-br from-[#0066FF] to-[#7F00FF] text-black rounded-lg font-semibold shadow hover:scale-[1.01] transition" href="#">Get Early Access</a>
              <a className="px-5 py-3 border border-gray-700 rounded-lg text-gray-200 hover:border-white" href="#demo">Watch Demo</a>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0F1720] border border-gray-800 p-6 shadow-2xl">
            <div className="w-full h-56 rounded-lg bg-gradient-to-br from-[#001833] to-[#1a0033] flex items-center justify-center">
              <div className="text-gray-400">[App Mockup Preview]</div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-gray-400">
              <div className="p-3 bg-[#071024] rounded-lg">
                <div className="h-3 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
              </div>
              <div className="p-3 bg-[#071024] rounded-lg">
                <div className="h-3 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
              </div>
              <div className="p-3 bg-[#071024] rounded-lg">
                <div className="h-3 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-8">
          <h2 className="text-2xl font-bold">Features</h2>
          <p className="text-gray-400 mt-2 max-w-2xl">UVPlayer unifies playback, cloud, AI and social features into one fast, lightweight app.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#071024] rounded-2xl border border-gray-800"><div className="font-semibold text-white">Universal Playback</div><div className="text-gray-400 text-sm mt-2">Supports MP4, MKV, MOV, FLAC, RAW, HEIC, 8K, HDR</div></div>
            <div className="p-6 bg-[#071024] rounded-2xl border border-gray-800"><div className="font-semibold text-white">AI Subtitles</div><div className="text-gray-400 text-sm mt-2">Speech-to-text, auto-translation, subtitle editing</div></div>
            <div className="p-6 bg-[#071024] rounded-2xl border border-gray-800"><div className="font-semibold text-white">Cloud Sync</div><div className="text-gray-400 text-sm mt-2">Play directly from Google Drive, Dropbox, OneDrive</div></div>
          </div>
        </section>

        <section id="pricing" className="py-8">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="text-gray-400 mt-2">Simple and transparent — start free, upgrade for AI & cloud features.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-[#071024] border-gray-800"><div className="text-lg font-semibold">Free</div><div className="text-gray-400 text-sm">$0</div><ul className="mt-4 text-gray-300 text-sm space-y-2"><li>• Universal playback</li><li>• Local library</li><li>• Basic player</li></ul></div>
            <div className="p-6 rounded-2xl border bg-gradient-to-br from-[#051233] to-[#2b0033] border-transparent shadow-2xl"><div className="text-lg font-semibold">Pro</div><div className="text-gray-400 text-sm">$4.99/mo</div><ul className="mt-4 text-gray-300 text-sm space-y-2"><li>• AI subtitles</li><li>• Cloud sync</li><li>• Social Mode</li></ul></div>
            <div className="p-6 rounded-2xl border bg-[#071024] border-gray-800"><div className="text-lg font-semibold">Enterprise</div><div className="text-gray-400 text-sm">$19.99/mo</div><ul className="mt-4 text-gray-300 text-sm space-y-2"><li>• Team libraries</li><li>• Priority support</li><li>• Large storage</li></ul></div>
          </div>
        </section>

        <section id="roadmap" className="py-8">
          <h2 className="text-2xl font-bold">Roadmap</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#071024] rounded-2xl border border-gray-800"><div className="text-sm text-gray-400">Q1 2026</div><div className="font-semibold text-white mt-2">Beta Launch</div><ul className="text-gray-300 text-sm mt-3 space-y-2"><li>• Windows, Mac, Android, iOS</li></ul></div>
            <div className="p-6 bg-[#071024] rounded-2xl border border-gray-800"><div className="text-sm text-gray-400">Q2 2026</div><div className="font-semibold text-white mt-2">AI Library</div><ul className="text-gray-300 text-sm mt-3 space-y-2"><li>• Auto-tagging</li><li>• Cloud Sync</li></ul></div>
            <div className="p-6 bg-[#071024] rounded-2xl border border-gray-800"><div className="text-sm text-gray-400">Q3 2026</div><div className="font-semibold text-white mt-2">Streaming Hub</div><ul className="text-gray-300 text-sm mt-3 space-y-2"><li>• YouTube, Spotify integrations</li></ul></div>
          </div>
        </section>

      </main>

      <footer className="mt-12 border-t border-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-bold">UVPlayer</div>
            <div className="text-gray-400 text-sm mt-1">One app for every media. © {new Date().getFullYear()}</div>
          </div>
          <div className="flex items-center gap-4">
            <a className="text-gray-300 hover:text-white" href="#">Terms</a>
            <a className="text-gray-300 hover:text-white" href="#">Privacy</a>
            <a className="px-4 py-2 bg-gradient-to-br from-[#0066FF] to-[#7F00FF] text-black rounded-lg font-semibold" href="#">Get Early Access</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
