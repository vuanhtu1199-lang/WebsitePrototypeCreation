import { useState, useEffect, useRef, useCallback } from "react";
import svgPaths from "@/imports/ConstructQldMobile/svg-hlp6ebxj1v";
import aboutSvg from "@/imports/Section-1/svg-ffkrh6ctfc";
import faqSvg from "@/imports/Section-2/svg-ci6s0k97t4";

import imgHeroBg from "@/imports/ConstructQldDesktopSm-1/1c78a27cb93b8e1864da822b18b0998077658673.png";
import imgAbout from "@/imports/ConstructQldDesktopSm-1/62b5fb7399a4c8e07cf4f8e8ad76993ccf2668ca.png";
import imgProj1 from "@/imports/ConstructQldDesktopSm-1/4e5394a6920318e4a6e974f3cd9674b0a5fe7dd6.png";
import imgProj2a from "@/imports/ConstructQldDesktopSm-1/da27a46dc8078953aa73c2d2588b2b7193da4107.png";
import imgProj2b from "@/imports/ConstructQldDesktopSm-1/142b0b7396ef766d3115b4a7236c1bbe9aac27f8.png";
import imgProj3 from "@/imports/ConstructQldDesktopSm-1/4e616da646f44f330ed4425184c9032ef98089bb.png";
import imgProj4 from "@/imports/ConstructQldDesktopSm-1/ddb7aefbfc3acccd1672c9bdd2284e0d16d9c457.png";
import imgProj5 from "@/imports/ConstructQldDesktopSm-1/85c24732ddc9b63aa6887c9e01682297ee32eb7b.png";
import imgWhyUsBg from "@/imports/ConstructQldDesktopSm-1/f0a5ae6d016f6e0b35305126c7e539647c478e77.png";
import imgDavidLansdell from "@/imports/ConstructQldDesktopSm-1/8d29293451dd8fdfea0fc92f15f3b91f17684b40.png";
import imgDavidDirector from "@/imports/ConstructQldDesktopSm-1/3849eacacaa613d286caca5a991e26fa60175bda.png";
import imgConstructionBg from "@/imports/ConstructQldDesktopSm-1/c9a857ac12e83ad66507bb2254e207dabba94373.png";
import imgLogo from "@/imports/ConstructQldDesktopSm-1/09226c2e8d97c3c0c5923aa477aa8ef349cbed29.png";
import logoQldGov from "@/imports/ConstructQldDesktopSm-1/afe076ce4c7ecd668cb18150ea361de4823d102a.png";
import logoBrisbaneAirport from "@/imports/ConstructQldDesktopSm-1/d08b16d98b2970922879f37b72b2018bb4030d11.png";
import logoBCC from "@/imports/ConstructQldDesktopSm-1/eed8866d2447cde40b3ac449c31b845a6ca07f8b.png";
import logoDefence from "@/imports/ConstructQldDesktopSm-1/794d6512373440c293f1f5b937f4c2036f196191.png";
import logoQldHealth from "@/imports/ConstructQldDesktopSm-1/837c8157faf2063b319f28be40562d69271536ea.png";
import logoQldRail from "@/imports/ConstructQldDesktopSm-1/b19a61d35b5930286cfc5def3d4442f671c427fa.png";
import logoTransurban from "@/imports/ConstructQldDesktopSm-1/b067922edabb8532b905bb864b3054ffef48685f.png";
import logoAirservices from "@/imports/ConstructQldDesktopSm-1/d686d5bde99ec2c63c1ef080d3a749ba1d112069.png";
import logoEducation from "@/imports/ConstructQldDesktopSm-1/b43a7d3e34803702798c223d5ecd64bd4c9519e7.png";
import logoHousing from "@/imports/ConstructQldDesktopSm-1/5270e57075b8d535ff0d08953d66d4a1f1904d9c.png";
import logoYouthJustice from "@/imports/ConstructQldDesktopSm-1/18b8158d1b409900526e85d8a6d8679b151f19ce.png";
import logoAirports from "@/imports/ConstructQldDesktopSm-1/0e900319e754d23ebf4783ad2193a37703d90d43.png";
import logoQCS from "@/imports/ConstructQldDesktopSm-1/03155c7a3b333db917e755eb7abe64a429ba658b.png";
import logoRegis from "@/imports/ConstructQldDesktopSm-1/ca03546fe94b6752d299c57012918f86053fcb09.png";
import logoStVincents from "@/imports/ConstructQldDesktopSm-1/2f62ae2c28533167af9b49ac90d935d6984961d0.png";
import logoBloomberg from "@/imports/ConstructQldDesktopSm-1/b63759244a0d5c207c80d1ed6161d387855abed4.png";

// ===== DATA =====

interface Project {
  id: number;
  images: string[];
  category: string;
  location: string;
  title: string;
}

const projects: Project[] = [
  {
    id: 1,
    images: [imgProj1, imgProj2a, imgProj3],
    category: "Government & Justice",
    location: "Brisbane CBD, QLD",
    title: "Brisbane Supreme Court & Justice Centre",
  },
  {
    id: 2,
    images: [imgProj2a, imgProj2b, imgProj4],
    category: "Government & Justice",
    location: "South Bank, QLD",
    title: "Queensland Cultural & Arts Precinct",
  },
  {
    id: 3,
    images: [imgProj3, imgProj5, imgProj1],
    category: "Transport Infrastructure",
    location: "Gold Coast, QLD",
    title: "Gold Coast Airport International Terminal 9",
  },
  {
    id: 4,
    images: [imgProj4, imgProj2b, imgProj2a],
    category: "Health & Science",
    location: "Brisbane, QLD",
    title: "Princess Alexandra Hospital Redevelopment",
  },
  {
    id: 5,
    images: [imgProj5, imgProj4, imgProj3],
    category: "Defence Infrastructure",
    location: "Townsville, QLD",
    title: "ADF Capital Infrastructure Works Programme",
  },
];

const clientLogos = [
  { src: logoQldGov, alt: "Queensland Government" },
  { src: logoBrisbaneAirport, alt: "Brisbane Airport" },
  { src: logoBCC, alt: "Brisbane City Council" },
  { src: logoDefence, alt: "Defence" },
  { src: logoQldHealth, alt: "Queensland Health" },
  { src: logoQldRail, alt: "Queensland Rail" },
  { src: logoTransurban, alt: "Transurban" },
  { src: logoAirservices, alt: "Airservices Australia" },
  { src: logoEducation, alt: "Department of Education" },
  { src: logoHousing, alt: "Department of Housing" },
  { src: logoYouthJustice, alt: "Youth Justice" },
  { src: logoAirports, alt: "Airports" },
  { src: logoQCS, alt: "QCS" },
  { src: logoRegis, alt: "Regis" },
  { src: logoStVincents, alt: "St Vincents" },
  { src: logoBloomberg, alt: "Bloomberg" },
];

// ===== HELPERS =====

function GoldSquare() {
  return (
    <div className="relative shrink-0 size-2">
      <svg className="absolute inset-0 size-full" viewBox="0 0 8 8" fill="none">
        <path d="M8 0H0V8H8V0Z" fill="#E5B869" />
      </svg>
    </div>
  );
}

function SectionLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="pt-1.5 shrink-0">
        <GoldSquare />
      </div>
      <p className={`font-['DM_Mono:Medium',sans-serif] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap leading-[19.6px] ${light ? "text-white" : "text-black"}`}>
        {text}
      </p>
    </div>
  );
}

//===== NAVBAR =====

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Why Us", href: "#why-us" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "FAQs", href: "#faq" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px] border-b border-white/8 transition-colors duration-300 ${
          scrolled ? "bg-[#0a1b3a]/90" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between py-4">
          <a href="#" className="shrink-0">
            <img src={imgLogo} alt="Construct Queensland" className="h-11 w-auto object-contain" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-['Onest:Medium',sans-serif] font-medium text-[15px] text-white/80 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden lg:flex">
            <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#0a1b3a] text-[15px] bg-[#e5b869] px-6 py-3">
              Get In Touch
            </span>
            <div className="bg-[#d4a44f] border-l border-[#0a1b3a]/25 flex items-center justify-center w-[46px]">
              <svg width="18" height="18" viewBox="0 0 18.4 18.4" fill="none">
                <path d={svgPaths.p30053000} fill="#0A1B3A" />
              </svg>
            </div>
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2.5"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-1.5 w-7">
              <div className="bg-white h-0.5 w-7" />
              <div className="bg-white h-0.5 w-7" />
              <div className="bg-white h-0.5 w-7" />
            </div>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu overlay */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Slide-in panel from right */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full bg-[#0a1b3a] flex flex-col lg:hidden transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 backdrop-blur-[12px]">
          <a href="#" onClick={closeMenu} className="shrink-0">
            <img src={imgLogo} alt="Construct Queensland" className="h-11 w-auto object-contain" />
          </a>
          {/* X close button — two crossed bars */}
          <button
            onClick={closeMenu}
            className="p-2.5 flex items-center justify-center"
            aria-label="Close menu"
          >
            <div className="relative w-[22px] h-[22px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white h-[2px] w-[30px] rotate-45" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white h-[2px] w-[30px] -rotate-45" />
              </div>
            </div>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 overflow-y-auto px-5 pt-4">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className={`flex items-center justify-between py-4 ${
                i === 0
                  ? "border-t border-b border-[rgba(255,255,255,0.08)]"
                  : "border-b border-[rgba(255,255,255,0.08)]"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 40 + 60}ms` : "0ms" }}
            >
              <span className="font-['Onest:Medium',sans-serif] font-medium text-[18.4px] text-white leading-[1.5]">
                {label}
              </span>
              {/* Chevron right */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M11.354 8.35354L6.35403 13.3535C6.30757 13.4 6.25242 13.4368 6.19173 13.462C6.13103 13.4871 6.06598 13.5001 6.00028 13.5001C5.93458 13.5001 5.86953 13.4871 5.80883 13.462C5.74813 13.4368 5.69298 13.4 5.64653 13.3535C5.60007 13.3071 5.56322 13.2519 5.53808 13.1912C5.51294 13.1305 5.5 13.0655 5.5 12.9998C5.5 12.9341 5.51294 12.869 5.53808 12.8083C5.56322 12.7476 5.60007 12.6925 5.64653 12.646L10.2934 7.99979L5.64653 3.35354C5.55271 3.25972 5.5 3.13247 5.5 2.99979C5.5 2.86711 5.55271 2.73986 5.64653 2.64604C5.74035 2.55222 5.8676 2.49951 6.00028 2.49951C6.13296 2.49951 6.26021 2.55222 6.35403 2.64604L11.354 7.64604C11.4005 7.69248 11.4374 7.74762 11.4626 7.80832C11.4877 7.86902 11.5007 7.93408 11.5007 7.99979C11.5007 8.0655 11.4877 8.13056 11.4626 8.19126C11.4374 8.25196 11.4005 8.3071 11.354 8.35354Z" fill="white" fillOpacity="0.35" />
              </svg>
            </a>
          ))}
        </div>

        {/* Bottom: Contact Us + tagline */}
        <div className="px-5 pb-7 pt-8 flex flex-col gap-4">
          <a
            href="#contact"
            onClick={closeMenu}
            className="flex items-center w-full border border-[#e5b869] bg-[#e5b869]"
          >
            <span className="flex-1 font-['Onest:Bold',sans-serif] font-bold text-[#0a1b3a] text-[18px] text-center px-9 py-[18px] leading-[1.2]">
              Contact Us
            </span>
            <div className="bg-[#d4a44f] border-l border-[#0a1b3a]/40 flex items-center justify-center w-[58px] self-stretch">
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path d={svgPaths.p102e07c0} fill="#0A1B3A" />
              </svg>
            </div>
          </a>
          <div className="flex items-center justify-center gap-2.5">
            <span className="font-['DM_Mono:Regular',sans-serif] text-[12px] text-white/55 tracking-[0.48px] uppercase">
              Brisbane, Queensland
            </span>
            <span className="font-['DM_Mono:Regular',sans-serif] text-[12px] text-[#e5b869] tracking-[0.48px]">·</span>
            <span className="font-['DM_Mono:Regular',sans-serif] text-[12px] text-white/55 tracking-[0.48px] uppercase">
              Executive Advisory
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// ===== HERO SECTION =====

function HeroSection() {
  return (
    <section id="hero" className="relative bg-[#0a1b3a] min-h-screen flex flex-col overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a1b3a]" />
        <img src={imgHeroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,27,58,0.68) 0%, rgba(6,16,36,0.88) 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 75% 25%, rgba(229,184,105,0.1) 0%, transparent 55%)" }}
        />
      </div>

      {/* Content — mobile: top-aligned below navbar; desktop: vertically centered */}
      <div className="relative z-10 flex-1 flex lg:items-center">
        <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-[80px] pt-8 pb-11 lg:pt-[130px] lg:pb-[110px] mt-[77px] lg:mt-0 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 lg:gap-8">

          {/* Left — text block */}
          <div className="w-full lg:w-[800px] lg:shrink-0">
            {/* Label */}
            <div className="flex items-start gap-[10px] mb-[16px] lg:mb-[22px]">
              <div className="pt-[5.25px] lg:pt-[5.6px] shrink-0">
                <GoldSquare />
              </div>
              <p className="font-['DM_Mono:Medium',sans-serif] text-[15px] lg:text-[16px] text-white tracking-[0.6px] lg:tracking-[0.64px] uppercase leading-[21.75px]">
                Executive Construction Advisory
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-['Onest:Medium',sans-serif] font-medium text-white mb-0">
              <span className="block text-[35.2px] leading-[40.48px] tracking-[-1.056px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-1.92px]">
                Certainty in Delivery,{" "}
              </span>
              <span className="block text-[35.2px] leading-[40.48px] tracking-[-1.056px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-1.92px] text-[#e5b869]">
                Excellence in Leadership
              </span>
            </h1>

            {/* Paragraph */}
            <p className="font-['Onest:Regular',sans-serif] text-[rgba(255,255,255,0.92)] text-[17px] leading-[27.2px] mt-[18px] lg:text-[20px] lg:leading-[28px] lg:mt-[28px] lg:max-w-[740px]">
              Construct Queensland provides government departments and asset leaders with executive-tier
              construction leadership and delivery capability across complex, high-risk portfolios.
            </p>

            {/* Buttons — stacked on mobile, side-by-side on desktop */}
            <div className="flex flex-col lg:flex-row gap-[13.8px] lg:gap-[18px] mt-6 lg:mt-[42px]">
              <a href="#capabilities" className="flex w-full lg:w-auto">
                <span className="font-['Onest:Bold',sans-serif] font-bold text-[#0a1b3a] text-[16.5px] leading-[19.8px] bg-[#e5b869] px-6 py-4 flex-1 text-center">
                  Our Capabilities
                </span>
                <div className="bg-[#d4a44f] border-l border-[#0a1b3a]/42 flex items-center justify-center w-[58px] self-stretch">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d={svgPaths.p102e07c0} fill="#0A1B3A" />
                  </svg>
                </div>
              </a>
              <a href="#projects" className="flex w-full lg:w-auto border border-white/25">
                <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-white text-[16.5px] leading-[19.8px] px-6 py-4 flex-1 text-center">
                  View Projects
                </span>
                <div className="bg-white/12 border-l border-white/38 flex items-center justify-center w-[58px] self-stretch">
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d={svgPaths.p102e07c0} fill="white" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Right — stat cards: full-width vertical stack on mobile, column on desktop */}
          <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-auto lg:min-w-[290px] lg:shrink-0">
            {[
              { value: "25+", label: "Years of Executive Experience" },
              { value: "24+", label: "Landmark Infrastructure Projects" },
              { value: "$2B+", label: "Capital Programme Oversight" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="backdrop-blur-[16px] bg-white/6 border border-white/14 px-[22px] py-[20px] lg:px-[36px] lg:py-[30px]"
              >
                <p className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#e5b869] text-[32px] leading-[32px] tracking-[-0.96px] lg:text-[54.72px] lg:leading-[54.72px] lg:tracking-[-1.6416px] mb-1.5 lg:mb-2">
                  {value}
                </p>
                <p className="font-['Onest:Medium',sans-serif] font-medium text-[rgba(255,255,255,0.88)] text-[15px] leading-[21px] lg:text-[16px] lg:leading-[21.6px] lg:text-[rgba(255,255,255,0.85)]">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ===== ABOUT SECTION =====

function AboutSection() {
  const capabilityCards = [
    {
      svgPath: aboutSvg.p5abe8e0,
      viewBox: "0 0 63 63",
      size: 63,
      title: "Executive Secondment & Advisory",
      desc: "Seamless integration into departmental delivery units, providing instant leadership uplift, clear delegations, and strategic accountability on public works.",
    },
    {
      svgPath: aboutSvg.p398a6c00,
      viewBox: "0 0 64 64",
      size: 64,
      title: "Modern Methods of Construction (MMC)",
      desc: "Pioneered the Queensland Government MMC Programme in partnership with the Office of the Queensland Government Architect (OQGA), advancing modular and off-site delivery.",
    },
    {
      svgPath: aboutSvg.p2b518e80,
      viewBox: "0 0 64 64",
      size: 64,
      title: "Programme Recovery & Cost Certainty",
      desc: "Targeted high-value interventions that turn around distressed projects, restore stakeholder confidence, and establish ironclad constructability pathways under budget.",
    },
  ];

  return (
    <section id="about" className="bg-white py-[60px] lg:py-[100px]">
      <div className="max-w-7xl mx-auto px-5 lg:px-[80px]">
        {/* Top: text + image */}
        <div className="flex flex-col lg:flex-row items-start gap-10 mb-10 lg:mb-[60px]">
          <div className="flex-1 min-w-0">
            <SectionLabel text="About" />
            <h2 className="font-['Onest:Regular',sans-serif] font-normal text-[#0a1b3a] text-[28px] lg:text-[40px] leading-[1.2] lg:leading-[48px] tracking-[-1px] mt-4 mb-0">
              Where Policy Intent Meets On-the-Ground Delivery
            </h2>
            <div className="pt-[18px]">
              <p className="font-['Onest:Regular',sans-serif] text-[#475467] text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[28px]">
                Established in 2019 by Director David Lansdell, Construct Queensland operates at the
                executive echelon of infrastructure delivery. Having served as Construction Director and
                Executive Director for critical Queensland portfolios, we bridge commercial rigour with
                government governance.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[626px] lg:shrink-0 h-[240px] sm:h-[340px] lg:h-[502px] relative overflow-hidden">
            <img
              src={imgAbout}
              alt="Gold Coast Airport International Terminal"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom: 3-column capability cards */}
        <div id="capabilities" className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {capabilityCards.map(({ svgPath, viewBox, size, title, desc }) => (
            <div
              key={title}
              className="border-l border-[#e5e7eb] flex flex-col gap-8 lg:gap-10 p-6 lg:p-8"
            >
              <div className="shrink-0">
                <svg width={size} height={size} viewBox={viewBox} fill="none" className="block">
                  <path d={svgPath} fill="#0A1B3A" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#0a1b3a] text-[20px] lg:text-[24px] leading-[32px]">
                  {title}
                </p>
                <p className="font-['Onest:Regular',sans-serif] text-[#475467] text-[15px] lg:text-[16px] leading-[24px]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== PROJECTS SECTION =====

interface GalleryState {
  images: string[];
  index: number;
  title: string;
}

function GalleryModal({ gallery, onClose }: { gallery: GalleryState; onClose: () => void }) {
  const [idx, setIdx] = useState(gallery.index);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + gallery.images.length) % gallery.images.length);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % gallery.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gallery.images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 font-['Onest:Regular',sans-serif] text-white/70 hover:text-white text-[14px]"
        >
          Close ×
        </button>
        <div className="relative aspect-[16/9] bg-black overflow-hidden">
          <img
            src={gallery.images[idx]}
            alt={gallery.title}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
        {gallery.images.length > 1 && (
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setIdx((i) => (i - 1 + gallery.images.length) % gallery.images.length)}
              className="backdrop-blur-[17px] bg-black/30 border border-white/20 p-2 text-white px-4"
            >
              ←
            </button>
            <span className="font-['Onest:Regular',sans-serif] text-white/60 text-sm">
              {idx + 1} / {gallery.images.length}
            </span>
            <button
              onClick={() => setIdx((i) => (i + 1) % gallery.images.length)}
              className="backdrop-blur-[17px] bg-[#d4a44f] p-2 text-white px-4"
            >
              →
            </button>
          </div>
        )}
        <p className="font-['Onest:Regular',sans-serif] text-white text-[15px] mt-3 text-center opacity-80">
          {gallery.title}
        </p>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const [desktopPaused, setDesktopPaused] = useState(false);
  const [gallery, setGallery] = useState<GalleryState | null>(null);
  const [cardImgIdxs, setCardImgIdxs] = useState<Record<string, number>>({});
  // Mobile slider state
  const [mobileSlideIdx, setMobileSlideIdx] = useState(0);
  const mobileAutoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startMobileAuto = useCallback(() => {
    if (mobileAutoRef.current) clearInterval(mobileAutoRef.current);
    mobileAutoRef.current = setInterval(() => {
      setMobileSlideIdx((i) => (i + 1) % projects.length);
    }, 4000);
  }, []);

  useEffect(() => {
    startMobileAuto();
    return () => { if (mobileAutoRef.current) clearInterval(mobileAutoRef.current); };
  }, [startMobileAuto]);

  const goMobile = useCallback((dir: "prev" | "next") => {
    setMobileSlideIdx((i) =>
      dir === "prev" ? (i - 1 + projects.length) % projects.length : (i + 1) % projects.length
    );
    startMobileAuto();
  }, [startMobileAuto]);

  const handleCardNav = (
    trackIdx: string,
    dir: "prev" | "next",
    total: number,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setCardImgIdxs((prev) => {
      const curr = prev[trackIdx] ?? 0;
      const next = dir === "prev" ? (curr - 1 + total) % total : (curr + 1) % total;
      return { ...prev, [trackIdx]: next };
    });
  };

  const tripleProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="bg-[#0b0c0e] py-[80px] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <SectionLabel text="Selected Projects" light />
            <h2 className="font-['Onest:Regular',sans-serif] font-normal text-white text-[32px] leading-[1.2] tracking-[-0.8px] mt-3 max-w-md">
              Explore our landmark portfolio.
            </h2>
          </div>
          <a href="#contact" className="group flex border border-white/25 self-start">
            <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-white text-[16px] px-7 py-3.5">
              Get In Touch
            </span>
            <div className="bg-white/12 group-hover:bg-[#d4a44f] border-l border-white/38 flex items-center justify-center w-[46px] transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 18.4 18.4" fill="none">
                <path d={svgPaths.p30053000} fill="white" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* ===== DESKTOP CAROUSEL — 4:3 images, text below ===== */}
      <div className="hidden lg:block overflow-hidden pl-5">
        <div
          className={`carousel-track-desktop${desktopPaused ? " carousel-paused" : ""}`}
          style={{ display: "flex", gap: "24px" }}
        >
          {tripleProjects.map((project, idx) => {
            const imgIdx = cardImgIdxs[String(idx)] ?? 0;
            const currentImg = project.images[imgIdx] ?? project.images[0];
            return (
              <div
                key={idx}
                className="relative shrink-0 w-[484px] group cursor-pointer"
                onMouseEnter={() => setDesktopPaused(true)}
                onMouseLeave={() => setDesktopPaused(false)}
              >
                {/* 4:3 image container */}
                <div className="relative overflow-hidden" style={{ height: "363px" }}>
                  <img
                    src={currentImg}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Category badge — visible on hover */}
                  <div className="absolute top-4 left-4 backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.1)] px-[9px] py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-['Onest:Regular',sans-serif] text-white text-[14px] leading-5 whitespace-nowrap">
                      {project.category}
                    </p>
                  </div>

                  {/* Nav arrows — always visible on hover */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => handleCardNav(String(idx), "prev", project.images.length, e)}
                      title="Previous image"
                    >
                      <div className="backdrop-blur-[17px] bg-[rgba(0,0,0,0.3)] hover:bg-[#d4a44f] border border-white/10 p-[4.3px] flex items-center justify-center transition-colors duration-200">
                        <svg width="21" height="21" viewBox="0 0 21.4286 21.4286" fill="none" style={{ transform: "scaleX(-1)" }}>
                          <path d={svgPaths.p33b71300} fill="white" />
                        </svg>
                      </div>
                    </button>
                    <button
                      onClick={(e) => handleCardNav(String(idx), "next", project.images.length, e)}
                      title="Next image"
                    >
                      <div className="backdrop-blur-[17px] bg-[rgba(0,0,0,0.3)] hover:bg-[#d4a44f] border border-white/10 p-[4.3px] flex items-center justify-center transition-colors duration-200">
                        <svg width="21" height="21" viewBox="0 0 21.4286 21.4286" fill="none">
                          <path d={svgPaths.p33b71300} fill="white" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Text below image — visible on hover */}
                <div className="pt-4 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-['DM_Mono:Medium',sans-serif] text-[#e5b869] text-[14px] tracking-[0.56px] uppercase leading-5">
                    {project.location}
                  </p>
                  <p className="font-['Onest:Regular',sans-serif] text-white text-[20px] leading-[28px]">
                    {project.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== MOBILE SLIDER ===== */}
      <div className="lg:hidden px-5">
        {/* Card */}
        {(() => {
          const project = projects[mobileSlideIdx];
          const imgIdx = cardImgIdxs[`ms${mobileSlideIdx}`] ?? 0;
          const currentImg = project.images[imgIdx] ?? project.images[0];
          return (
            <div className="relative">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={currentImg}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 backdrop-blur-[16px] bg-black/30 border border-white/10 px-2.5 py-1">
                  <p className="font-['Onest:Regular',sans-serif] text-white text-[13px]">
                    {project.category}
                  </p>
                </div>
                {/* Image nav arrows (top-right) */}
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 flex items-center gap-1">
                    <button onClick={(e) => handleCardNav(`ms${mobileSlideIdx}`, "prev", project.images.length, e)} className="backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] hover:bg-[#d4a44f] border border-white/10 p-[4.3px] transition-colors duration-200">
                      <svg width="18" height="18" viewBox="0 0 21.4286 21.4286" fill="none" style={{ transform: "scaleX(-1)" }}>
                        <path d={svgPaths.p33b71300} fill="white" />
                      </svg>
                    </button>
                    <button onClick={(e) => handleCardNav(`ms${mobileSlideIdx}`, "next", project.images.length, e)} className="backdrop-blur-[16px] bg-[rgba(0,0,0,0.3)] hover:bg-[#d4a44f] border border-white/10 p-[4.3px] transition-colors duration-200">
                      <svg width="18" height="18" viewBox="0 0 21.4286 21.4286" fill="none">
                        <path d={svgPaths.p33b71300} fill="white" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <p className="font-['DM_Mono:Medium',sans-serif] text-[#e5b869] text-[13px] tracking-[0.56px] uppercase">
                  {project.location}
                </p>
                <p className="font-['Onest:Regular',sans-serif] text-white text-[19px] leading-7 mt-1">
                  {project.title}
                </p>
              </div>
            </div>
          );
        })()}

        {/* Slide navigation */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => { setMobileSlideIdx(i); startMobileAuto(); }}
                className={`h-1 transition-all duration-300 ${i === mobileSlideIdx ? "w-6 bg-[#e5b869]" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => goMobile("prev")}
              className="bg-black/30 border border-white/10 backdrop-blur-[16px] p-2.5 hover:bg-[#d4a44f] transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 21.4286 21.4286" fill="none" style={{ transform: "scaleX(-1)" }}>
                <path d={svgPaths.p33b71300} fill="white" />
              </svg>
            </button>
            <button
              onClick={() => goMobile("next")}
              className="bg-black/30 border border-white/10 backdrop-blur-[16px] p-2.5 hover:bg-[#d4a44f] transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 21.4286 21.4286" fill="none">
                <path d={svgPaths.p33b71300} fill="white" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {gallery && <GalleryModal gallery={gallery} onClose={() => setGallery(null)} />}
    </section>
  );
}

// ===== WHY CHOOSE US =====

function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-white py-[60px] lg:py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionLabel text="Our Commitment" />
            <h2 className="font-['Onest:Regular',sans-serif] font-normal text-[#111827] text-[32px] leading-[1.2] tracking-[-0.8px] mt-4 mb-5">
              Why Choose Us
            </h2>
            <p className="font-['Onest:Regular',sans-serif] text-[#5b6574] text-[18px] leading-[1.65] mb-8">
              At Construct Queensland, we understand that choosing the right construction leadership
              partner is decisive for the success of your capital programme. Here is why government
              departments and institutional owners choose us:
            </p>
            <div className="flex flex-col gap-4 mb-16">
              {[
                "Senior Executive Involvement",
                "On-Time, On-Budget Integrity",
                "Safety and Compliance",
                "Client-Centred Approach",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                    <path d={svgPaths.p10b1df80} fill="#E5B869" />
                  </svg>
                  <span className="font-['Onest:Medium',sans-serif] font-medium text-[#0a1b3a] text-[16px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {[
                { value: "100%", label: "Programme Governance" },
                { value: "25+", label: "Years of Experience" },
                { value: "24+", label: "Completed Landmarks" },
                { value: "16+", label: "Government Clients" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-['Onest:Medium',sans-serif] font-medium text-[#0a1b3a] text-[32px] leading-8 tracking-[-0.8px]">
                    {value}
                  </p>
                  <p className="font-['DM_Mono:Medium',sans-serif] text-[#5b6574] text-[14px] tracking-[0.56px] uppercase mt-1.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[300px]">
            <img src={imgWhyUsBg} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== SERVICES SECTION =====

function ServicesSection() {
  const services = [
    {
      num: "#01",
      title: "Executive Portfolio Leadership",
      desc: "Director-level secondment into your portfolio, with authority over governance, delegations and risk decisions.",
    },
    {
      num: "#02",
      title: "Client-Sided Project Management",
      desc: "A low-friction extension of your existing delivery unit, holding the contractor and consultant interfaces day to day.",
    },
    {
      num: "#03",
      title: "Business Cases & PAF Studies",
      desc: "Investment-grade business cases tested for constructability, cost and time viability before funding is committed.",
    },
    {
      num: "#04",
      title: "Modern Methods of Construction",
      desc: "Modularisation, DfMA and off-site prefabrication, used to compress delivery schedules on social housing programmes.",
    },
    {
      num: "#05",
      title: "Superintendent Contract Admin",
      desc: "Impartial superintendent services under AS 2124, AS 4000 and AS 4902, certifying claims, time extensions and completion.",
    },
    {
      num: "#06",
      title: "Distressed Programme Recovery",
      desc: "Forensic intervention on stalled programmes. We reset the baseline and stage the works so live sites keep operating.",
    },
  ];

  return (
    <section id="services" className="bg-[#f7f8fa] py-[60px] lg:py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionLabel text="What We Do" />
            <h2 className="font-['Onest:Regular',sans-serif] font-normal text-[#111827] text-[32px] leading-[1.2] tracking-[-0.8px] mt-4 mb-5">
              Comprehensive Construction Services
            </h2>
            <p className="font-['Onest:Regular',sans-serif] text-[#5b6574] text-[18px] leading-[1.65] mb-14">
              Senior-level construction leadership and delivery capability for complex, high-risk capital
              portfolios.
            </p>
            <div className="mb-9">
              <p className="font-['Onest:Regular',sans-serif] text-[#5b6574] text-[16px]">
                Contact Us for Consultation
              </p>
              <p className="font-['Onest:Regular',sans-serif] text-[#5b6574] text-[16px] mt-1.5">
                Call us:{" "}
                <span className="font-['Onest:Bold',sans-serif] font-bold text-[#0a1b3a]">
                  0436 603 061
                </span>
              </p>
            </div>
            <a href="#contact" className="group flex self-start w-fit">
              <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-white text-[16px] bg-[#0a1b3a] px-7 py-3.5">
                Get In Touch
              </span>
              <div className="bg-[#061024] group-hover:bg-[#d4a44f] border-l border-white/30 flex items-center justify-center w-[46px] transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 18.4 18.4" fill="none">
                  <path d={svgPaths.p3c2a0580} fill="white" />
                </svg>
              </div>
            </a>
          </div>

          <div className="border-t border-[rgba(10,27,58,0.14)]">
            {services.map(({ num, title, desc }) => (
              <div key={num} className="border-b border-[rgba(10,27,58,0.14)] py-9 grid grid-cols-[50px_1fr] gap-5">
                <p className="font-['Onest:Bold',sans-serif] font-bold text-[#0b0c0e] text-[16px]">{num}</p>
                <div>
                  <p className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#0b0c0e] text-[18px] leading-6 mb-3">
                    {title}
                  </p>
                  <p className="font-['Onest:Regular',sans-serif] text-[#475467] text-[16px] leading-[1.65]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== TRUSTED BY SECTION =====

function TrustedBySection() {
  const allLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="bg-[#0b0c0e] py-[60px] lg:py-[100px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">

        {/* Header row: label+heading left, button right — bottom-aligned */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
          <div className="max-w-[780px]">
            <SectionLabel text="Trusted By" light />
            <h2 className="font-['Onest:Regular',sans-serif] font-normal text-white text-[26px] leading-[1.2] tracking-[-0.65px] mt-3 lg:text-[32px] lg:leading-[38.4px] lg:tracking-[-0.8px] lg:mt-0 lg:whitespace-nowrap">
              Key Statutory Authorities &amp; Tier-1 Operators
            </h2>
          </div>
          <a href="#contact" className="group flex border border-white/25 w-fit shrink-0">
            <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-white text-[16px] leading-[19.2px] px-7 py-[14px]">
              Get In Touch
            </span>
            <div className="bg-white/12 group-hover:bg-[#d4a44f] border-l border-white/38 flex items-center justify-center w-[46px] self-stretch transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 18.4 18.4" fill="none">
                <path d={svgPaths.p3c2a0580} fill="white" />
              </svg>
            </div>
          </a>
        </div>

        {/* Quote block — full width */}
        <div className="mt-8 lg:mt-[44px] bg-[#14161a] border border-white/10 p-6 lg:p-[48px]">
          <p className="font-['Onest:Light',sans-serif] font-light text-white text-[17px] leading-[1.55] tracking-[-0.42px] lg:text-[24px] lg:leading-[36px] lg:tracking-[-0.6px]">
            "Construct Queensland bridges the gap between executive policy intent and practical contractor execution. In high-risk brownfield and government portfolios, our sustained focus on constructability, cost certainty, and transparent governance delivers landmark results."
          </p>
          <div className="mt-7 lg:mt-[28px]">
            <p className="font-['Onest:Bold',sans-serif] font-bold text-white text-[18px] leading-[27px]">
              David Lansdell
            </p>
            <p className="font-['DM_Mono:Medium',sans-serif] text-white text-[12px] lg:text-[14px] tracking-[0.56px] uppercase leading-[16.8px] mt-0.5">
              Director — Construct Queensland | Former Executive Director, QLD Government
            </p>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="mt-12 lg:mt-[72px]">
          <div className="relative overflow-hidden py-[10px]">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: "linear-gradient(to right, #0b0c0e, transparent)" }} />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: "linear-gradient(to left, #0b0c0e, transparent)" }} />
            <div
              className="carousel-track-logos flex items-center"
              style={{ width: "max-content", gap: "56px" }}
            >
              {allLogos.map((logo, idx) => (
                <div key={idx} className="flex items-center justify-center h-[60px] shrink-0 opacity-[0.78]">
                  <img src={logo.src} alt={logo.alt} className="max-h-[56px] max-w-[240px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ===== LEADERSHIP SECTION =====

function LeadershipSection() {
  const credentials = [
    "Executive Director (QLD Gov)",
    "Lendlease Senior Leadership Alumnus",
    "Lead for MMC Programme Delivery (OQGA)",
    "Corrections, Health & Aviation Expert",
  ];

  return (
    <section id="leadership" className="bg-white py-[60px] lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-[80px]">
        <div className="bg-white border border-[#eef0f2] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.05)] overflow-hidden grid lg:grid-cols-[400px_1fr]">

          {/* Photo column */}
          <div className="bg-[#0a1b3a] relative min-h-[280px] lg:min-h-0">
            <img
              src={imgDavidDirector}
              alt="David Lansdell"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          {/* Content column */}
          <div className="flex flex-col justify-center px-6 py-8 lg:p-[48px]">
            {/* Label */}
            <div className="flex items-start gap-[10px] mb-[18px]">
              <div className="pt-[4.9px] shrink-0">
                <GoldSquare />
              </div>
              <span className="font-['DM_Mono:Medium',sans-serif] text-[14px] tracking-[0.56px] uppercase text-black leading-[19.6px]">
                Executive Profile
              </span>
            </div>

            {/* Name */}
            <h2 className="font-['Onest:Regular',sans-serif] font-normal text-[#111827] text-[28px] leading-[1.2] tracking-[-0.7px] mb-[18px] lg:text-[40px] lg:leading-[48px] lg:tracking-[-1px]">
              David Lansdell
            </h2>

            {/* Title */}
            <p className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#e5b869] text-[18px] leading-[24.3px] mb-[16px]">
              Director — Construct Queensland
            </p>

            {/* Bio */}
            <p className="font-['Onest:Regular',sans-serif] font-normal text-[#5b6574] text-[16px] leading-[26.4px]">
              Over 25 years across government and tier-1 delivery, including the QCS portfolio of
              works — with the institutional insight and senior-level visibility rarely accessible to
              external advisors.
            </p>

            {/* Credentials — 2-col on desktop, 1-col on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-3.5 pt-6 pb-7 lg:pt-[24px] lg:pb-[28px]">
              {credentials.map((cred) => (
                <div key={cred} className="flex items-center gap-[10px]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                    <path d={svgPaths.p27a39400} fill="#5B6574" />
                  </svg>
                  <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#0a1b3a] text-[16px] leading-[24px]">
                    {cred}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact row */}
            <div className="border-t border-[#eef0f2] pt-5 lg:pt-[22px] flex flex-col lg:flex-row lg:items-center lg:gap-[22px] gap-4">
              <a href="tel:0436603061" className="flex items-center gap-[8px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                  <path d={svgPaths.p27a46300} fill="#5B6574" />
                </svg>
                <span className="font-['Onest:Bold',sans-serif] font-bold text-[#0a1b3a] text-[16px] leading-[24px]">
                  0436 603 061
                </span>
              </a>
              <a href="mailto:dlansdell@constructqld.com.au" className="flex items-center gap-[8px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                  <path d={svgPaths.p2aa90880} fill="#5B6574" />
                </svg>
                <span className="font-['Onest:Bold',sans-serif] font-bold text-[#0a1b3a] text-[16px] leading-[24px]">
                  dlansdell@constructqld.com.au
                </span>
              </a>
              <a href="https://linkedin.com" className="group flex w-fit mt-1 lg:mt-0">
                <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-white text-[14px] leading-[16.8px] bg-[#0a1b3a] px-5 py-2">
                  Connect on LinkedIn
                </span>
                <div className="bg-[#061024] group-hover:bg-[#d4a44f] border-l border-white/30 flex items-center justify-center w-[38px] self-stretch transition-colors duration-200">
                  <svg width="18" height="18" viewBox="0 0 18.4 18.4" fill="none">
                    <path d={svgPaths.p2434d500} fill="white" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ===== CONTACT SECTION =====

function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "border border-[rgba(10,27,58,0.35)] px-3.5 py-3 text-[16px] font-['Onest:Regular',sans-serif] text-[#0a1b3a] placeholder-[#8e96a4] focus:outline-none focus:border-[#0a1b3a] w-full bg-white";

  return (
    <section id="contact" className="bg-[#f0f4f8] py-20 relative overflow-hidden">
      <div className="absolute bottom-0 left-5 opacity-[0.18] pointer-events-none">
        <img
          src={imgConstructionBg}
          alt=""
          className="w-[184px] h-[123px] object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="flex items-start gap-2.5 mb-5">
              <div className="pt-1.5 shrink-0">
                <GoldSquare />
              </div>
              <span className="font-['DM_Mono:Medium',sans-serif] text-[14px] tracking-[0.56px] uppercase text-[#0a1b3a]">
                Engagement & Consultation
              </span>
            </div>
            <h2 className="font-['Onest:Regular',sans-serif] font-normal text-[#0a1b3a] text-[32px] leading-[1.2] tracking-[-0.8px] mb-5">
              Partner with Construct Queensland
            </h2>
            <p className="font-['Onest:Regular',sans-serif] text-[#5b6574] text-[16px] leading-[1.65]">
              Whether you require executive secondment to stabilise a high-risk portfolio, strategic
              advisory for PAF business cases, or expert client-sided project leadership, our directors
              are available for confidential consultations.
            </p>
          </div>

          <div className="bg-white border-t-2 border-[#0a1b3a] shadow-[0px_4px_12px_rgba(10,27,58,0.05)] p-5 lg:p-7">
            <h3 className="font-['Onest:Medium',sans-serif] font-medium text-[#0a1b3a] text-[22px] tracking-[-0.55px] mb-5">
              Request a Consultation
            </h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-12 h-12 bg-[#e5b869] flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.p10b1df80} fill="#0A1B3A" />
                  </svg>
                </div>
                <p className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#0a1b3a] text-[18px]">
                  Request Submitted
                </p>
                <p className="font-['Onest:Regular',sans-serif] text-[#5b6574] text-[15px] mt-2 text-center">
                  We will be in touch within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#0a1b3a] text-[14px]">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#0a1b3a] text-[14px]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#0a1b3a] text-[14px]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#0a1b3a] text-[14px]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#0a1b3a] text-[14px]">
                    Message
                  </label>
                  <textarea
                    placeholder="Outline your portfolio, programme requirements, or advisory needs..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button type="submit" className="group flex">
                  <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-white text-[16px] tracking-[0.96px] uppercase bg-[#0a1b3a] px-6 py-3.5 flex-1 text-center">
                    Request a Consultation
                  </span>
                  <div className="bg-[#061024] group-hover:bg-[#d4a44f] border-l border-white/30 flex items-center justify-center w-[46px] transition-colors duration-200">
                    <svg width="18" height="18" viewBox="0 0 18.4 18.4" fill="none">
                      <path d={svgPaths.p30053000} fill="white" />
                    </svg>
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FAQ SECTION =====

function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "What sectors and project scopes does Construct Queensland specialise in?",
      a: "Construct Queensland specialises in complex, high-risk government and institutional infrastructure. Our core sector expertise spans Corrective Services & Youth Justice facilities, Social Housing MMC programmes, Health & Tertiary precincts, Aviation, and Transport infrastructure across Queensland.",
    },
    {
      q: "How do government departments and institutional clients engage your services?",
      a: "We offer agile engagement models tailored to public sector governance, including executive secondment into departmental delivery units, client-sided project management, and targeted advisory commissions. You can initiate a consultation by contacting our Director directly on 0436 603 061 or via enquiries@constructqld.com.au.",
    },
    {
      q: "What is Construct Queensland's role in Programme Recovery & Distressed Projects?",
      a: "We provide rapid, forensic interventions for capital projects experiencing cost or schedule distress. Our team conducts situation analyses, renegotiates critical baseline milestones, resolves contractor disputes, and restores stakeholder confidence while maintaining operations in live, sensitive environments.",
    },
    {
      q: "Do you provide design management and Modern Methods of Construction (MMC) advisory?",
      a: "Yes. Construct Queensland led the establishment of the Queensland Government MMC Programme in partnership with the Office of the Queensland Government Architect (OQGA). We provide strategic design management, constructability reviews, and off-site modular prefabrication strategies from initial PAF feasibility through to delivery.",
    },
    {
      q: "What contract administration and Superintendent services do you offer?",
      a: "We act as independent Superintendents and Superintendent Representatives under standard Australian construction contracts (including AS 2124, AS 4000, and AS 4902), providing impartial assessment of contractor claims, variations, Extensions of Time (EOTs), and certification of Practical Completion.",
    },
    {
      q: "How does Construct Queensland integrate with existing departmental delivery teams?",
      a: "Our model is designed to be low-friction and collaborative. Having operated at Executive Director level within Queensland Government (QBuild, EPW, QCS), we seamlessly embed within internal agency structures, respecting delegations and procurement protocols while providing instant leadership uplift.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-[60px] pb-[70px]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col">
            <div className="inline-block border border-[#161616] px-3 py-1 mb-6">
              <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#161616] text-[12px] tracking-[0.72px] uppercase">
                Common Enquiries · Expanded State
              </span>
            </div>
            <h2 className="font-['Onest:Regular',sans-serif] font-normal text-[#161616] text-[40px] leading-[48px] tracking-[-1px]">
              Frequently Asked Questions
            </h2>
            {/* Spacer pushes enquiry block to bottom */}
            <div className="flex-1" />
            <div className="flex flex-col gap-4 mt-8 lg:mt-0">
              <h3 className="font-['Onest:Medium',sans-serif] font-medium text-[#161616] text-[20px] tracking-[-0.5px]">
                Have a Specific Programme Enquiry?
              </h3>
              <p className="font-['Onest:Regular',sans-serif] text-[#6b7280] text-[16px] leading-6 max-w-xs">
                Our executive leadership is available to discuss advisory mandates, programme
                recoveries, and procurement pathways.
              </p>
              <p className="font-['Onest:Regular',sans-serif] text-[#6b7280] text-[16px]">
                Call us:{" "}
                <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-[#161616]">
                  0436 603 061
                </span>
              </p>
              <a href="#contact" className="group flex w-fit">
                <span className="font-['Onest:SemiBold',sans-serif] font-semibold text-white text-[16px] bg-[#0a1b3a] px-7 py-3.5">
                  Get In Touch
                </span>
                <div className="bg-[#061024] group-hover:bg-[#d4a44f] border-l border-white/30 flex items-center justify-center w-[46px] transition-colors duration-200">
                  <svg width="18" height="18" viewBox="0 0 18.4 18.4" fill="none">
                    <path d={svgPaths.p3c2a0580} fill="white" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div>
            {faqs.map(({ q, a }, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="border-b border-[#e5e7eb]">
                  <button
                    className="flex items-center justify-between py-6 w-full text-left gap-4"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <p className="font-['Onest:Medium',sans-serif] font-medium text-[#161616] text-[18px] leading-[24.3px] flex-1">
                      {q}
                    </p>
                    <div className="flex items-center justify-center size-6 shrink-0">
                      {isOpen ? (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d={faqSvg.p2a87ddc0} fill="#161616" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d={svgPaths.p9106f00} fill="#161616" />
                        </svg>
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="pb-6 w-full">
                      <p className="font-['Onest:Regular',sans-serif] text-[#5b6574] text-[16px] leading-[26.4px]">
                        {a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FOOTER =====

function Footer() {
  const navLinks = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Why Us", "#why-us"],
    ["Services", "#services"],
    ["Clients", "#clients"],
    ["Leadership", "#leadership"],
    ["FAQs", "#faq"],
    ["Contact Us", "#contact"],
  ];

  return (
    <footer className="bg-[#061024] pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-5">
        {/* Main grid: left info | right block */}
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 lg:gap-20 pb-14">
          {/* Left: logo + description + credentials */}
          <div className="flex flex-col gap-6">
            <img
              src={imgLogo}
              alt="Construct Queensland"
              className="h-9 w-auto object-contain self-start"
            />
            <p className="font-['Onest:Regular',sans-serif] text-white/65 text-[14px] leading-[1.65]">
              Specialist infrastructure advisory and executive project delivery practice, providing
              high-level construction leadership across Queensland Government portfolios and tier-1
              assets.
            </p>
            <div className="font-['Onest:Regular',sans-serif] text-white/40 text-[13px] leading-[1.7]">
              <p>QBCC Licence #15243890</p>
              <p>ABN 48 624 819 032</p>
              <p>Brisbane, QLD</p>
            </div>
          </div>

          {/* Right block: Quick Nav | Head Office / Acknowledgement full-width below */}
          <div className="grid sm:grid-cols-2 gap-10">
            {/* Quick Navigation */}
            <div>
              <p className="font-['DM_Mono:Medium',sans-serif] text-[#e5b869] text-[12px] tracking-[0.48px] uppercase mb-5">
                Quick Navigation
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {navLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="font-['Onest:Medium',sans-serif] font-medium text-white/75 text-[14px] hover:text-white transition-colors leading-[1.5]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Head Office */}
            <div>
              <p className="font-['DM_Mono:Medium',sans-serif] text-[#e5b869] text-[12px] tracking-[0.48px] uppercase mb-4">
                Head Office
              </p>
              <p className="font-['Onest:Regular',sans-serif] text-white/75 text-[14px] leading-[1.5]">
                Brisbane City, QLD 4000
              </p>
              <a
                href="mailto:enquiries@constructqld.com.au"
                className="font-['Onest:Regular',sans-serif] text-white/55 text-[14px] mt-1.5 block hover:text-white transition-colors"
              >
                enquiries@constructqld.com.au
              </a>
              <a
                href="https://linkedin.com"
                className="mt-4 flex items-center gap-2 border border-white/20 px-4 py-2 w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p318e7a00} fill="white" />
                </svg>
                <span className="font-['Onest:Medium',sans-serif] font-medium text-white text-[13px]">
                  LinkedIn
                </span>
              </a>
            </div>

            {/* Acknowledgement of Country — full width below both columns */}
            <div className="sm:col-span-2 pt-2 border-t border-white/10">
              <p className="font-['DM_Mono:Medium',sans-serif] text-[#e5b869] text-[12px] tracking-[0.48px] uppercase mb-3">
                Acknowledgement of Country
              </p>
              <p className="font-['Onest:Regular',sans-serif] text-white/45 text-[13px] leading-[1.65]">
                Construct Queensland respectfully acknowledges the Traditional Custodians of the
                lands, winds, and waters on which we live and build across Queensland. We pay our
                deepest respects to Elders past, present, and emerging.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-['Onest:Regular',sans-serif] text-white/40 text-[13px]">
            Copyright © 2026 Construct Queensland Pty Ltd. All rights reserved.
          </p>
          <p className="font-['Onest:Regular',sans-serif] text-white/40 text-[13px]">
            Site by Belver
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===== ROOT =====

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <TrustedBySection />
      <LeadershipSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
