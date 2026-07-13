import type { Metadata } from "next";
import MapWrapper from "@/components/MapWrapper";

export const metadata: Metadata = {
  title: "London Map — Sophia Li",
  description: "My personal guide to London — food, cafés, activities, and hidden gems from my study abroad semester.",
};

export default function MapPage() {
  return (
    <div className="flex flex-col" style={{ height: "100dvh", paddingTop: "64px" }}>
      {/* Page header */}
      <div
        className="px-8 py-6 border-b flex-shrink-0"
        style={{ backgroundColor: "var(--background)", borderColor: "var(--light)" }}
      >
        <h1
          className="text-3xl font-bold mb-1"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--dark)" }}
        >
          London
        </h1>
        <p className="opacity-60 text-sm" style={{ color: "var(--dark)" }}>
          My personal recommendations from studying abroad — click any pin to read more.
        </p>
      </div>

      {/* Map fills remaining height */}
      <div className="flex-1 relative" style={{ minHeight: 0 }}>
        <MapWrapper />
      </div>
    </div>
  );
}
