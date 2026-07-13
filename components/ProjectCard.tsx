"use client";

interface ProjectLink {
  label: string;
  href?: string;
  disabled?: boolean;
  target?: string;
}

interface ProjectCardProps {
  title: string;
  badge?: string;
  description: React.ReactNode;
  links: ProjectLink[];
}

export default function ProjectCard({ title, badge, description, links }: ProjectCardProps) {
  return (
    <div className="project-card relative bg-white rounded-xl p-8 mb-8 transition-transform duration-300 hover:-translate-y-1">
      {/* Top accent gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl"
        style={{ background: "linear-gradient(90deg, var(--dark), var(--accent), transparent)" }}
      />

      <div className="flex items-start justify-between gap-3 mb-4">
        <h3
          className="mt-0 text-xl font-bold leading-snug"
          style={{ color: "var(--dark)", fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
        {badge && (
          <span
            className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full tracking-wide"
            style={{ backgroundColor: "var(--accent)", color: "white" }}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="text-gray-500 leading-relaxed mb-6 text-sm">{description}</div>

      <div className="flex gap-3 flex-wrap">
        {links.map((link, i) =>
          link.disabled ? (
            <span
              key={i}
              className="inline-block px-4 py-2 rounded-md text-sm font-medium text-gray-400 cursor-not-allowed"
              style={{ backgroundColor: "#e9e9e9" }}
            >
              {link.label}
            </span>
          ) : (
            <a
              key={i}
              href={link.href}
              target={link.target}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
              className="inline-block px-4 py-2 rounded-md text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--dark)", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--dark)")}
            >
              {link.label}
            </a>
          )
        )}
      </div>
    </div>
  );
}
