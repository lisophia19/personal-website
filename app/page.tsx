import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionReveal from "@/components/SectionReveal";
import ProjectCard from "@/components/ProjectCard";
import Carousel from "@/components/Carousel";
import FlyingPlane from "@/components/FlyingPlane";

export const metadata: Metadata = { title: "Sophia Li" };

const carouselSlides = [
  { src: "/images/hobby1.JPG", alt: "Cooking", caption: "Cooked some fish, orzo, and salad!" },
  {
    src: "/images/hobby2.JPG",
    alt: "Flowers",
    caption: "Bouquet I made for my little for big-little reveal",
    objectPosition: "center 30%",
  },
  { src: "/images/hobby3.JPG", alt: "Food exploration", caption: "My Beli wrapped" },
  { src: "/images/hobby4.JPG", alt: "Live Music", caption: "Dom Dolla" },
  {
    src: "/images/hobby5.JPG",
    alt: "F1 Racing",
    caption: "F1 race strategy book",
    objectPosition: "center 40%",
  },
  { src: "/images/hobby6.JPG", alt: "Art", caption: "Digital art for cookbook" },
];

const hobbies = [
  { title: "Art", desc: "Acrylic painting, graphite & ink sketching, and art history.", image: "/images/hobby6.JPG", objectPosition: "center" },
  { title: "Floral Arrangements", desc: "Making bouquets for special occasions and room decor.", image: "/images/hobby2.JPG", objectPosition: "center 30%" },
  { title: "Live Music", desc: "Concerts, festivals, DJ sets — I love the energy.", image: "/images/hobby4.JPG", objectPosition: "center" },
  { title: "Fitness", desc: "Strength training and lagree/pilates keep me grounded.", image: null, objectPosition: undefined },
  { title: "Food Adventures", desc: "Seeking out hidden gems and local spots off the beaten path.", image: "/images/hobby1.JPG", objectPosition: "center" },
  { title: "F1 Race Strategy", desc: "Tuning in every Sunday during race season.", image: "/images/hobby5.JPG", objectPosition: "center 40%" },
  { title: "Reading", desc: "Currently: A Gentleman in Moscow — romance, memoir, and fantasy.", image: null, objectPosition: undefined },
  { title: "Matcha", desc: "I'd like to think I've perfected the craft myself.", image: null, objectPosition: undefined },
];

const skills = [
  "Python", "R", "PyTorch", "TypeScript", "React", "Next.js",
  "Deep Learning", "Statistical Modeling", "Algorithms",
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ── About ─────────────────────────────────────────────────────────── */}
      <SectionReveal id="about" className="px-8 py-24 max-w-3xl mx-auto">
        <h2
          className="gradient-text text-3xl font-bold mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Me
        </h2>
        <p className="leading-relaxed mb-5">
          Hello! I&apos;m Sophia Li, a junior at Brown University pursuing a dual degree in
          Computer Science and Economics, with a passion for data-driven solutions and scalable
          system architecture.
        </p>
        <p className="leading-relaxed mb-5">
          <strong>Background:</strong> I&apos;m from Northern Virginia, and I now call Providence,
          Rhode Island home while studying at Brown. I&apos;m fascinated by the intersection of
          finance, software development, and research — particularly how computer science can be
          leveraged to solve complex real-world problems and extract meaningful insights from large
          datasets. I&apos;ve spent the past two summers interning at Bloomberg, where I&apos;ve
          gained valuable experience in financial technology and data analysis.
        </p>
        <p className="leading-relaxed mb-5">
          <strong>Interests:</strong> Quantitative research, software engineering, data science,
          computational biology, deep learning applications, and system design.
        </p>
        <p className="leading-relaxed mb-5">
          <strong>Extracurriculars:</strong> Kappa Delta · Hack@Brown · Undergraduate Teaching
          Assistant · Women in CS
        </p>

        {/* Skills */}
        <div className="mt-6 mb-8">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--dark)", opacity: 0.5 }}
          >
            Tools &amp; Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="skill-tag px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div
          className="p-6 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(245,248,242,0.9) 100%)",
            boxShadow: "0 4px 24px rgba(58,77,57,0.08)",
            border: "1px solid rgba(163,177,138,0.25)",
          }}
        >
          <p
            className="font-semibold mb-3 text-sm tracking-widest uppercase"
            style={{ color: "var(--dark)", opacity: 0.55 }}
          >
            Contact
          </p>
          <ul className="space-y-2">
            {[
              { label: "Email", href: "mailto:sophia_y_li1@brown.edu", text: "sophia_y_li1@brown.edu" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/sophia-y-li1/", text: "linkedin.com/in/sophia-y-li1", external: true },
              { label: "Phone", href: "tel:+17037760928", text: "(703) 776-0928" },
            ].map(({ label, href, text, external }) => (
              <li key={label} className="flex items-center gap-2">
                <span className="text-sm font-medium opacity-50 w-16">{label}</span>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-sm transition-colors duration-200 hover:opacity-70"
                  style={{ color: "var(--accent)" }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>

      {/* Divider */}
      <div className="mx-8 max-w-3xl lg:mx-auto" style={{ borderTop: "1px solid var(--light)" }} />

      {/* ── Experience & Projects ──────────────────────────────────────────── */}
      <SectionReveal id="projects" className="px-8 py-24 max-w-3xl mx-auto">
        <h2
          className="gradient-text text-3xl font-bold mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Experience &amp; Projects
        </h2>

        <ProjectCard
          title="Head Teaching Assistant — CSCI 0500"
          badge="Head TA · Fall 2026"
          description={
            <p>
              Serving as Head TA for CSCI 0500, Brown&apos;s new required algorithms and data
              structures course. Responsibilities include coordinating a team of TAs, developing
              course materials, holding office hours, and supporting students across the full
              curriculum.
            </p>
          }
          links={[]}
        />

        <ProjectCard
          title="Undergraduate Teaching Assistant — CSCI 1570"
          badge="TA · Fall 2025"
          description={
            <p>
              Served as a TA for CSCI 1570 (Design and Analysis of Algorithms) at Brown University.
              Held weekly office hours, graded assignments, and helped students develop rigorous
              problem-solving skills in algorithm design, complexity analysis, and proof-writing.
            </p>
          }
          links={[]}
        />

        <ProjectCard
          title="What's in my Fridge? (CSCI 1430 — Computer Vision)"
          description={
            <>
              <p className="mb-3">
                Built an end-to-end ingredient detection and recipe recommendation system with
                teammates Nina Py Brozovich, Bryant Cortez, and Martin Arias. Used a DINO v2 +
                LoRA fine-tuning pipeline to classify fridge contents from photos, overcoming
                challenges of overlapping and clustered objects.
              </p>
              <p>
                Best model (DINO2-base + LoRA) achieved <em>88.7% classification accuracy</em>.
                The full pipeline retrieved the correct recipe at Top-1 in <em>12.1% of cases</em>{" "}
                — 4× better than YOLO-only — with the end-to-end system correctly identifying
                garlic, cucumber, and tomato in a real fridge photo and surfacing{" "}
                <em>Simple Tomato Salad</em> as the top result (P=0.50, R=0.40, F1=0.44).
              </p>
            </>
          }
          links={[
            { label: "Poster PDF", href: "/files/DL Final Project Writeup.pdf", target: "_blank" },
          ]}
        />

        <ProjectCard
          title="AI Tools & Certifications (In Progress)"
          description={
            <p>
              Currently exploring various AI tools and platforms through hands-on learning and
              certification programs. Experimenting with AI wrappers, completing relevant
              certifications, and building practical applications to understand the latest
              developments in artificial intelligence and machine learning.
            </p>
          }
          links={[{ label: "Coming Soon", disabled: true }]}
        />

        <ProjectCard
          title="Deep Learning Protein Structure Prediction (Spring 2025)"
          description={
            <p>
              Reimplementation of rawMSA using CNN + BiLSTMs in PyTorch for protein secondary
              structure prediction from raw multiple sequence alignments, achieving{" "}
              <em>89.5% accuracy</em>. Developed preprocessing pipelines to handle noisy
              Stockholm-format datasets.
            </p>
          }
          links={[
            { label: "GitHub", href: "https://github.com/lisophia19/rawMSA-replica", target: "_blank" },
            { label: "Project Writeup", href: "/files/DL Final Project Writeup.pdf", target: "_blank" },
          ]}
        />

        <ProjectCard
          title="VIX Spike Prediction"
          description={
            <>
              <p className="mb-3">
                Developed a statistical model in Python to predict volatility spikes in the VIX
                using historical macroeconomic indicators. Conducted extensive backtesting across
                different market regimes and iteratively refined features and volatility proxies to
                address noise and low initial predictive power.
              </p>
              <p>
                <em>What we learned:</em> Defining a benchmark for a volatility spike is
                inherently difficult — thresholds are inconsistent across time periods and
                challenging to quantify, which complicates both prediction accuracy and evaluation.
              </p>
            </>
          }
          links={[
            {
              label: "Jupyter Notebook",
              href: "https://drive.google.com/file/d/1lUnOgN6PuLRkqTeqPt-hb6zQ5H_NMxcZ/view?usp=sharing",
              target: "_blank",
            },
            {
              label: "Presentation",
              href: "https://docs.google.com/presentation/d/1ZDVdxdcZc4jOmiK11pfEtaLbFogtyr7RbmLQqHWf7gE/edit?usp=sharing",
              target: "_blank",
            },
          ]}
        />

        <ProjectCard
          title="Crawford Lab @ Brown University (2023 – 2025)"
          description={
            <p>
              Researched computational challenges in large human genetic datasets for the{" "}
              <em>mvMAPIT</em> R package. Integrated a more efficient matrix-vector multiplication
              algorithm and built simulation scripts for testing performance.
            </p>
          }
          links={[
            { label: "GitHub", href: "https://lcrawlab.github.io/mvMAPIT/", target: "_blank" },
          ]}
        />
      </SectionReveal>

      {/* Divider */}
      <div className="mx-8 max-w-3xl lg:mx-auto" style={{ borderTop: "1px solid var(--light)" }} />

      {/* ── Hobbies ───────────────────────────────────────────────────────── */}
      <SectionReveal id="hobbies" className="px-8 py-24 max-w-3xl mx-auto">
        <h2
          className="gradient-text text-3xl font-bold mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hobbies
        </h2>

        {/* Hobby photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {hobbies.map(({ title, desc, image, objectPosition }) =>
            image ? (
              <div
                key={title}
                className="relative rounded-xl overflow-hidden group"
                style={{ height: 192 }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: objectPosition ?? "center" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(30,45,30,0.82) 0%, rgba(30,45,30,0.1) 55%, transparent 100%)",
                  }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(58,77,57,0.15)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-semibold text-white text-sm leading-tight">{title}</p>
                  <p
                    className="text-xs mt-0.5 opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={title}
                className="rounded-xl p-4 flex flex-col justify-end transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  height: 192,
                  background: "linear-gradient(145deg, rgba(163,177,138,0.18) 0%, rgba(58,77,57,0.08) 100%)",
                  border: "1px solid rgba(163,177,138,0.3)",
                }}
              >
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--dark)" }}>
                  {title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--dark)", opacity: 0.6 }}>
                  {desc}
                </p>
              </div>
            )
          )}
        </div>

        {/* Flying plane → London map */}
        <FlyingPlane />

        <h3
          className="text-xl font-bold mb-6"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--dark)" }}
        >
          Photo Gallery
        </h3>
        <Carousel slides={carouselSlides} />
      </SectionReveal>
    </>
  );
}
