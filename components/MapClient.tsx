"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  spots as allSpots,
  CATEGORY_EMOJI,
  CATEGORY_LABEL,
  type Category,
  type Spot,
} from "@/data/london-spots";

// Fix Leaflet's default icon path issue with Next.js
function fixLeafletIcons() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
}

function makeCategoryIcon(category: Category) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width:38px; height:38px; border-radius:50%;
      background:var(--dark,#3a4d39);
      border:3px solid var(--accent,#a3b18a);
      display:flex; align-items:center; justify-content:center;
      font-size:18px; box-shadow:0 2px 8px rgba(0,0,0,0.25);
    ">${CATEGORY_EMOJI[category]}</div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -42],
  });
}

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} out of 5 stars`}>
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </span>
  );
}

const ALL_CATEGORIES: Category[] = ["food", "cafe", "activity", "museum", "bar", "shopping"];

export default function MapClient() {
  const [active, setActive] = useState<Set<Category>>(new Set(ALL_CATEGORIES));

  useEffect(() => { fixLeafletIcons(); }, []);

  const toggle = (cat: Category) =>
    setActive(prev => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });

  const visible = allSpots.filter(s => active.has(s.category));

  return (
    <div className="flex flex-col h-full">
      {/* Filter chips */}
      <div
        className="flex flex-wrap gap-2 px-4 py-3 border-b"
        style={{ backgroundColor: "white", borderColor: "var(--light)" }}
      >
        {ALL_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => toggle(cat)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: active.has(cat) ? "var(--dark)" : "var(--light)",
              color: active.has(cat) ? "white" : "var(--dark)",
              border: "none",
              cursor: "pointer",
            }}
          >
            {CATEGORY_EMOJI[cat]} {CATEGORY_LABEL[cat]}
          </button>
        ))}
        {active.size < ALL_CATEGORIES.length && (
          <button
            onClick={() => setActive(new Set(ALL_CATEGORIES))}
            className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: "var(--accent)",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Show all
          </button>
        )}
      </div>

      {/* Map */}
      <div className="flex-1" style={{ minHeight: 0 }}>
        <MapContainer
          center={[51.5074, -0.1278]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {visible.map((spot: Spot) => (
            <Marker
              key={spot.id}
              position={[spot.lat, spot.lng]}
              icon={makeCategoryIcon(spot.category)}
            >
              <Popup maxWidth={280}>
                <div style={{ fontFamily: "'Roboto', sans-serif", minWidth: 220 }}>
                  {spot.photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={spot.photo}
                      alt={spot.title}
                      style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 8, marginBottom: 8 }}
                    />
                  )}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <strong style={{ color: "var(--dark)", fontSize: 15 }}>{spot.title}</strong>
                    <span
                      style={{
                        fontSize: 11,
                        padding: "2px 8px",
                        borderRadius: 999,
                        backgroundColor: "var(--accent)",
                        color: "white",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {CATEGORY_EMOJI[spot.category]} {CATEGORY_LABEL[spot.category]}
                    </span>
                  </div>
                  <div style={{ color: "#e6a817", fontSize: 14, marginBottom: 6 }}>
                    <Stars n={spot.rating} />
                  </div>
                  <p style={{ fontSize: 13, color: "#555", lineHeight: 1.5, margin: "0 0 8px" }}>
                    {spot.description}
                  </p>
                  {spot.link && (
                    <a
                      href={spot.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 12,
                        color: "var(--accent)",
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      Visit website →
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Empty state */}
      {allSpots.length === 0 && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ top: 56 }}
        >
          <div
            className="text-center p-8 rounded-2xl"
            style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
          >
            <p className="text-2xl mb-2">📍</p>
            <p className="font-semibold" style={{ color: "var(--dark)" }}>
              No spots yet
            </p>
            <p className="text-sm opacity-60">Add entries to <code>data/london-spots.ts</code></p>
          </div>
        </div>
      )}
    </div>
  );
}
