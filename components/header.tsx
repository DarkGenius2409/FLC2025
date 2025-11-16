"use client";

import Link from "next/link";
import { FaGlobeAmericas } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const items = [
    "Home",
    "About-Us",
    "World",
    "Business",
    "Tech",
    "Health",
    "Entertainment",
    "Robotics",
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur-2xl text-primary-foreground border-b-2 border-accent shadow-accent shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/" className="flex items-center gap-4">
            <FaGlobeAmericas size={25} className="text-accent" />
            <div className="text-3xl font-black tracking-tight">INN</div>
          </Link>

          <div className="flex items-center gap-2 bg-primary-foreground rounded px-2 py-1">
            <CiSearch className="text-black" />
            <input
              type="text"
              placeholder="Search news..."
              className="flex-1 bg-primary-foreground text-primary placeholder-muted-foreground text-sm px-2 py-1 focus:outline-none"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 text-sm font-semibold overflow-x-auto pb-2">
          {items.map((item) => {
            const slug = item.toLowerCase();
            const href = slug === "home" ? "/" : `/${slug}`;
            const isActive = pathname.includes(item);

            return (
              <Link
                key={item}
                href={href}
                className={`whitespace-nowrap transition-colors ${isActive ? "text-accent font-bold" : "hover:text-accent"
                  }`}
              >
                {item.replaceAll("-", " ")}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
