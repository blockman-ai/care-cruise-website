export default function TestimonialCard({ quote, name, service }) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white/10 p-6">
      <p className="text-lg text-pink-300" aria-label="5 out of 5 stars">
        ★★★★★
      </p>
      <blockquote className="mt-4 flex-grow text-lg leading-[1.85]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <footer className="mt-6 border-t border-white/10 pt-5">
        <p className="font-bold">{name}</p>
        <p className="mt-1 text-sm text-pink-200">{service}</p>
      </footer>
    </article>
  );
}
