"use client";
import dynamic from "next/dynamic";

const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full" style={{ color: "var(--dark)", opacity: 0.5 }}>
      Loading map…
    </div>
  ),
});

export default function MapWrapper() {
  return <MapClient />;
}
