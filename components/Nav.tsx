"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HOME_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Experience" },
  { href: "#hobbies", label: "Hobbies" },
];

function IconLinkedIn({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-label="LinkedIn">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconEmail({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Email">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

function IconPhone({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Phone">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 .02h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;
  const textColor = solid ? "white" : "var(--dark)";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 transition-all duration-300"
      style={{
        backgroundColor: solid ? "var(--dark)" : "transparent",
        boxShadow: solid ? "0 2px 16px rgba(0,0,0,0.12)" : "none",
      }}
    >
      {/* Left: name + contact icons */}
      <div className="flex flex-col gap-1">
        <Link
          href="/"
          className="font-bold tracking-wide leading-tight"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: textColor, textDecoration: "none" }}
        >
          Sophia Li
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sophia-y-li1/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-60"
            style={{ color: textColor }}
            title="LinkedIn"
          >
            <IconLinkedIn size={18} />
          </a>
          <a
            href="mailto:sophia_y_li1@brown.edu"
            className="transition-opacity duration-200 hover:opacity-60"
            style={{ color: textColor }}
            title="sophia_y_li1@brown.edu"
          >
            <IconEmail size={18} />
          </a>
          <a
            href="tel:+17037760928"
            className="transition-opacity duration-200 hover:opacity-60"
            style={{ color: textColor }}
            title="(703) 776-0928"
          >
            <IconPhone size={17} />
          </a>
        </div>
      </div>

      {/* Right: nav links */}
      <div className="flex items-center gap-8">
        {isHome &&
          HOME_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: textColor, textDecoration: "none" }}
            >
              {label}
            </a>
          ))}
        <Link
          href="/map"
          className="font-medium transition-all duration-200 px-4 py-1.5 rounded-full"
          style={{
            color: pathname === "/map" ? "var(--dark)" : "white",
            backgroundColor: pathname === "/map" ? "var(--accent)" : "rgba(255,255,255,0.15)",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          London Map
        </Link>
      </div>
    </nav>
  );
}
