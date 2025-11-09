import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground border-b-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Top bar with logo and search */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-3xl font-black tracking-tight">ANN</div>
            <span className="text-xs font-semibold text-accent ml-2">
              WORLD NEWS
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search news..."
              className="px-4 py-2 rounded bg-primary-foreground text-primary placeholder-muted-foreground text-sm"
            />
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="flex gap-8 text-sm font-semibold overflow-x-auto pb-2">
          {[
            "Home",
            "US",
            "World",
            "Business",
            "Tech",
            "Health",
            "Entertainment",
            "Sports",
          ].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="whitespace-nowrap hover:text-accent transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
