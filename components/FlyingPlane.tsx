"use client";
import Link from "next/link";
import { useState } from "react";

function PlaneSVG({ hovered }: { hovered: boolean }) {
  const c = hovered ? "var(--accent)" : "var(--dark)";
  return (
    <svg viewBox="0 0 48 30" width="44" height="28" fill="none" aria-hidden>
      {/* Fuselage */}
      <ellipse cx="22" cy="15" rx="18" ry="5.5" fill={c} />
      {/* Nose */}
      <path d="M 40 15 L 47 13.5 L 47 16.5 Z" fill={c} />
      {/* Upper wing */}
      <path d="M 19 13 L 28 2 L 33 4 L 23 13 Z" fill={c} />
      {/* Lower wing */}
      <path d="M 19 17 L 28 28 L 33 26 L 23 17 Z" fill={c} opacity="0.72" />
      {/* Vertical tail fin */}
      <path d="M 6 13 L 6 5 L 13 13 Z" fill={c} />
      {/* Horizontal tail fin */}
      <path d="M 6 17 L 6 25 L 13 17 Z" fill={c} opacity="0.72" />
      {/* Cockpit window */}
      <circle cx="32" cy="12.5" r="2" fill="white" opacity="0.45" />
    </svg>
  );
}

export default function FlyingPlane() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden my-8"
      style={{ height: 110 }}
    >
      {/* Dashed wave path — same curve as flyAcross keyframes */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 110"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M 0 55 C 6.25 25, 18.75 25, 25 55
             C 31.25 85, 43.75 85, 50 55
             C 56.25 25, 68.75 25, 75 55
             C 81.25 85, 93.75 85, 100 55"
          fill="none"
          stroke="var(--dark)"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.22"
        />
      </svg>

      {/* Animated, clickable plane */}
      <Link
        href="/map"
        className="absolute block"
        style={{ animation: "flyAcross 14s linear infinite", textDecoration: "none" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Visit London map"
      >
        <PlaneSVG hovered={hovered} />
        {hovered && (
          <span
            className="absolute whitespace-nowrap text-xs font-semibold rounded-full px-2.5 py-1"
            style={{
              bottom: "calc(100% + 5px)",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "var(--dark)",
              color: "white",
              pointerEvents: "none",
            }}
          >
            ✈ Fly to London
          </span>
        )}
      </Link>

      {/* Subtle hint label */}
      <p
        className="absolute bottom-0 right-0 text-xs"
        style={{ color: "var(--dark)", opacity: 0.3, fontStyle: "italic" }}
      >
        click the plane →
      </p>
    </div>
  );
}
