"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 60% 40%, #dde8d4 0%, #e8e4dd 45%, #f3f1ee 100%)",
      }}
    >
      {/* Aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute rounded-full"
          style={{
            width: 560, height: 560,
            background: "radial-gradient(circle, #c5d8b8 0%, transparent 68%)",
            top: "-140px", left: "-100px",
            filter: "blur(56px)",
            opacity: 0.5,
            animation: "floatBlob 13s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 420, height: 420,
            background: "radial-gradient(circle, #a3b18a 0%, transparent 68%)",
            bottom: "-80px", right: "-60px",
            filter: "blur(50px)",
            opacity: 0.35,
            animation: "floatBlob 17s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 280, height: 280,
            background: "radial-gradient(circle, #e8d5c0 0%, transparent 70%)",
            top: "35%", right: "20%",
            filter: "blur(60px)",
            opacity: 0.45,
            animation: "floatBlob 20s ease-in-out infinite 4s",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-8 max-w-5xl w-full pt-20">

        {/* Text — staggered entrance */}
        <div className="flex-1 text-center md:text-left">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{
              color: "var(--dark)", opacity: 0.55,
              animation: "fadeInUp 0.6s ease 0.1s both",
            }}
          >
            Welcome
          </p>
          <h1
            className="mb-4 leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              color: "var(--dark)",
              animation: "fadeInUp 0.7s ease 0.25s both",
            }}
          >
            Sophia Li
          </h1>
          <p
            className="text-xl md:text-2xl mb-3 font-medium"
            style={{
              color: "var(--dark)", opacity: 0.85,
              animation: "fadeInUp 0.6s ease 0.42s both",
            }}
          >
            CS + Economics @ Brown University
          </p>
          <p
            className="leading-relaxed max-w-md"
            style={{
              color: "var(--dark)", opacity: 0.62,
              animation: "fadeInUp 0.6s ease 0.58s both",
            }}
          >
            Two-time Bloomberg intern · Quantitative researcher · Builder of things that matter
          </p>
          <div
            className="mt-8 flex gap-4 justify-center md:justify-start flex-wrap"
            style={{ animation: "fadeInUp 0.6s ease 0.72s both" }}
          >
            <a
              href="#about"
              className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: "var(--dark)" }}
            >
              Learn more
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: "2px solid var(--dark)",
                color: "var(--dark)",
                backgroundColor: "transparent",
              }}
            >
              My work
            </a>
          </div>
        </div>

        {/* Headshot */}
        <div
          className="flex-shrink-0"
          style={{ animation: "fadeInUp 0.8s ease 0.35s both" }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full ring-pulse"
              style={{ border: "3px solid var(--accent)" }}
            />
            <Image
              src="/images/headshot.jpg"
              alt="Sophia Li"
              width={260}
              height={260}
              className="rounded-full object-cover relative z-10"
              style={{
                border: "4px solid var(--accent)",
                boxShadow: "0 16px 56px rgba(58,77,57,0.22)",
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.4, animation: "fadeInUp 0.6s ease 1s both" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--dark)" }}>
          scroll
        </span>
        <svg
          className="animate-bounce-slow"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
        >
          <path
            d="M10 3v14M3 10l7 7 7-7"
            stroke="var(--dark)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
