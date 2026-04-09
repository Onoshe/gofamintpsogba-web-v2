'use client';

export default function SectionHeader({
  kicker,
  title,
  description,
  centered = false
}: {
  kicker?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <header className={`max-w-[700px] py-4 ${centered ? 'text-center mx-auto' : ''} fade-in`}>
      {kicker && <span className="text-red-600 font-bold uppercase tracking-wider text-2xl">{kicker}</span>}
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-indigo-800">{title}</h2>
      {description && <p className="text-muted-foreground text-lg">{description}</p>}
    </header>
  );
}
