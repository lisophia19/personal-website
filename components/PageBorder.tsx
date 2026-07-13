"use client";

const LINE_COLOR = "rgba(58,77,57,0.7)";
const LINE_WIDTH = 3;
const GAP = 7; // gap between the two parallel lines

function BorderLines({ side }: { side: "left" | "right" }) {
  const base = 14; // distance of inner line from edge
  return (
    <>
      {[base, base + GAP + LINE_WIDTH].map((offset, i) => (
        <div
          key={i}
          className="hidden xl:block fixed top-0 bottom-0 pointer-events-none"
          style={{
            [side]: offset,
            width: LINE_WIDTH,
            zIndex: 35,
            background: `linear-gradient(to bottom, transparent 0%, ${LINE_COLOR} 6%, ${LINE_COLOR} 94%, transparent 100%)`,
          }}
        />
      ))}
    </>
  );
}

export default function PageBorder() {
  return (
    <>
      <BorderLines side="left" />
      <BorderLines side="right" />
    </>
  );
}
