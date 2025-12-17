export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#F6F7F5] text-[#1E1E1E]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-semibold">
          Takk! Abonnementet ditt er aktivt.
        </h1>

        <p className="mt-4 text-neutral-600">
          Gå til læring og start med dagens økt.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/learn"
            className="rounded-xl bg-black px-6 py-3 text-white text-sm font-medium"
          >
            Gå til læring
          </a>

          <a
            href="/"
            className="rounded-xl border border-neutral-300 px-6 py-3 text-sm"
          >
            Til forsiden
          </a>
        </div>
      </div>
    </main>
  );
}
