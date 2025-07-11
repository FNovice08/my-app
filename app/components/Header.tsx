import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { useLocation } from "react-router";

const navLinks = [
  { name: { en: "Home", zh: "首页" }, href: "/", section: "home" },
  { name: { en: "News", zh: "新闻" }, href: "/news", section: "news" },
  { name: { en: "About Us", zh: "关于我们" }, href: "#about", section: "about" },
  { name: { en: "Contact", zh: "联系我们" }, href: "#contact", section: "contact" },
];

function getSectionId(section: string) {
  if (section === "home") return "main-home";
  if (section === "news") return "main-news";
  return section;
}

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set activeSection based on pathname for non-home pages
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (location.pathname === "/") {
      // Let scrollspy handle it
    } else if (location.pathname.startsWith("/news")) {
      setActiveSection("news");
    } else {
      setActiveSection("");
    }
  }, [location.pathname]);

  // Scrollspy effect (only on homepage)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (location.pathname !== "/") return;
    const sectionIds = navLinks.map(l => getSectionId(l.section));
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new window.IntersectionObserver(
      entries => {
        if (location.pathname !== "/") return; // Prevent scrollspy from running on other pages
        const visible = entries.filter(e => e.isIntersecting && e.intersectionRatio > 0.3);
        if (visible.length > 0) {
          // Pick the one closest to the top
          const topMost = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
          setActiveSection(topMost.target.id.replace("main-", ""));
        }
      },
      { threshold: [0.3], rootMargin: "-60px 0px -60% 0px" }
    );
    sections.forEach(section => observerRef.current!.observe(section));
    return () => observerRef.current && observerRef.current.disconnect();
  }, [location.pathname, lang]);

  // Scroll to section on load if hash is present
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (location.pathname !== "/") return;
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(id);
        }, 100);
      }
    }
  }, [location.pathname, lang]);

  // Smooth scroll on click and handle cross-page navigation
  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.href === "/news") {
      // Let the default <a href="/news"> navigation happen
      setMenuOpen(false);
      return;
    }
    if (link.href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        window.location.href = "/" + link.href;
        setMenuOpen(false);
        return;
      }
      const id = link.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
      }
      setMenuOpen(false);
      return;
    }
    if (link.href === "/" && location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      setMenuOpen(false);
      return;
    }
    setMenuOpen(false);
  };

  // Helper to check if a link is active
  const isActive = (link: typeof navLinks[0]) => {
    if (location.pathname.startsWith("/news") && link.section === "news") return true;
    if (location.pathname === "/" && link.section === activeSection) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-blue-100 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and name */}
        <a href="/" className="flex items-center gap-3">
          <img src="/Foundation Logo.png" alt="One North Foundation Logo" className="h-10 w-10 object-contain" />
          <span className="font-bold text-xl tracking-tight" style={{ color: "#FF8C00" }}>One North Foundation</span>
        </a>
        {/* Desktop nav + language toggle */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, idx) => (
            <a
              key={link.name.en}
              href={link.href === "/" ? "/" : link.href}
              onClick={e => handleNavClick(e, link)}
              className={`px-3 py-2 font-medium rounded transition relative ${
                isActive(link)
                  ? "font-bold text-blue-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-blue-600 after:rounded"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              style={idx === navLinks.length - 1 ? { marginRight: '2.5rem' } : {}} // Add space after Contact
            >
              {link.name[lang]}
            </a>
          ))}
          {/* Single Language toggle */}
          <div className="flex items-center gap-2 ml-6">
            <button
              className={`font-semibold px-3 py-1 rounded ${lang === "en" ? "bg-blue-100 text-blue-700" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span className="mx-1">|</span>
            <button
              className={`font-semibold px-3 py-1 rounded ${lang === "zh" ? "bg-blue-100 text-blue-700" : ""}`}
              onClick={() => setLang("zh")}
            >
              中文
            </button>
          </div>
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-blue-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow animate-fade-in-down">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map(link => (
              <a
                key={link.name.en}
                href={link.href === "/" ? "/" : link.href}
                onClick={e => handleNavClick(e, link)}
                className={`px-3 py-2 font-medium rounded transition ${
                  isActive(link)
                    ? "font-bold text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                >
                {link.name[lang]}
              </a>
            ))}
            {/* Single Language toggle for mobile */}
            <div className="flex items-center gap-2 mt-4">
              <button
                className={`font-semibold px-3 py-1 rounded ${lang === "en" ? "bg-blue-100 text-blue-700" : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <span className="mx-1">|</span>
              <button
                className={`font-semibold px-3 py-1 rounded ${lang === "zh" ? "bg-blue-100 text-blue-700" : ""}`}
                onClick={() => setLang("zh")}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 