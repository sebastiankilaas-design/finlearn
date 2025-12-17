"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"no" | "en">("no");

  const STRIPE_LINK =
    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK ||
    "https://buy.stripe.com/REPLACE_ME";

  const t = {
    no: {
      brand: "FinLearn",
      headline: "Lær personlig økonomi. Ett nivå av gangen.",
      sub:
        "En enkel, trygg og strukturert måte å lære personlig økonomi og investering på – " +
        "bygget for vanlige folk. 2 minutter om dagen.",
      start: "Start gratis",
      upgrade: "Oppgrader til Pro – 99 kr/mnd",
      trust: "Ingen reklame. Ingen bullshit. Bare praktisk læring.",
      sections: [
        {
          title: "Budsjett & kontroll",
          text:
            "Få oversikt over penger inn og ut. Lær enkle systemer du faktisk klarer å følge.",
        },
        {
          title: "Sparing & buffer",
          text:
            "Bygg økonomisk trygghet steg for steg, selv med lav inntekt.",
        },
        {
          title: "Renter & investering",
          text:
            "Forstå rentes rente, fond og risiko – uten komplisert finansspråk.",
        },
      ],
      howTitle: "Slik funker det",
      how: [
        "1. Velg daglig økt (2–3 min)",
        "2. Fullfør korte oppgaver",
        "3. Bygg streak og nivå",
        "4. Oppgrader når du vil",
      ],
      footer:
        "FinLearn er et læringsverktøy – ikke finansiell rådgivning.",
    },
    en: {
      brand: "FinLearn",
      headline: "Learn personal finance. One level at a time.",
      sub:
        "A simple, calm and structured way to learn personal finance and investing – " +
        "built for everyday people. 2 minutes a day.",
      start: "Start free",
      upgrade: "Upgrade to Pro – NOK 99/month",
      trust: "No ads. No hype. Just practical learning.",
      sections: [
        {
          title: "Budget & control",
          text:
            "Understand where your money goes and build systems you can actually stick to.",
        },
        {
          title: "Saving & safety buffer",
          text:
            "Build financial security step by step, even on a normal income.",
        },
        {
          title: "Interest & investing",
          text:
            "Understand compounding, funds and risk – without finance jargon.",
        },
      ],
      howTitle: "How it works",
      how: [
        "1. Pick a daily session (2–3 min)",
        "2. Complete short exercises",
        "3. Build streaks and levels",
        "4. Upgrade anytime",
      ],
      footer:
        "FinLearn is an educational tool, not financial advice.",
    },
  }[lang];

  return (
    <main className="min-h-screen bg-[#F6F7F5] text-[#1E1E1E]">
      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="font-semibold text-lg">{t.brand}</div>
        <button
          onClick={() => setLang(lang === "no" ? "en" : "no")}
          className="text-sm rounded-full border border-neutral-300 px-4 py-2 hover:bg-white"
        >
          {lang === "no" ? "English" : "Norsk"}
        </button>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          {t.headline}
        </h1>
        <p className="mt-6 text-lg text-neutral-600">{t.sub}</p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#learn"
            className="rounded-xl bg-black px-6 py-3 text-white text-sm font-medium text-center"
          >
            {t.start}
          </a>

          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium text-center hover:bg-white"
          >
            {t.upgrade}
          </a>
        </div>

        <p className="mt-6 text-sm text-neutral-500">{t.trust}</p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.sections.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <h3 className="font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{s.text}</p>
          </div>
        ))}
      </section>

      {/* How it works */}
      <section
        id="learn"
        className="mx-auto max-w-4xl px-6 py-16"
      >
        <h2 className="text-2xl font-semibold">{t.howTitle}</h2>
        <ul className="mt-6 space-y-3 text-neutral-700">
          {t.how.map((step) => (
            <li key={step} className="rounded-xl bg-white p-4 shadow-sm">
              {step}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-xl bg-black px-6 py-3 text-white text-sm font-medium"
          >
            {t.upgrade}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-xs text-neutral-500">
        {t.footer}
      </footer>
    </main>
  );
}
