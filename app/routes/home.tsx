import React from "react";

const team = [
  {
    name: "Ayu Pratama",
    role: "Founder & CEO",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Budi Santoso",
    role: "CTO",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Citra Dewi",
    role: "Head of Partnerships",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Dimas Putra",
    role: "Lead AI Engineer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Eka Sari",
    role: "Community Manager",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/", icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 0 1 .96 6v.06c0 2.13 1.52 3.9 3.54 4.3-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.06 9.06 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.87 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" },
  { name: "LinkedIn", url: "https://linkedin.com/", icon: "M16 8a6 6 0 0 1 6 6v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a6 6 0 0 1 6-6h6zm-6 2a4 4 0 0 0-4 4v7h16v-7a4 4 0 0 0-4-4H10zm-2 9v-7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7H8z" },
  { name: "Instagram", url: "https://instagram.com/", icon: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm4.25 2.5a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 2a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm6.5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" },
];

export function meta() {
  return [
    { title: "One North Foundation" },
    { name: "description", content: "Advancing AI development in Indonesia." },
  ];
}

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white rounded-b-2xl border-b-2 border-blue-100 shadow-lg animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between min-h-[72px]">
          <div className="flex items-center gap-4">
            <img src="/Foundation Logo.png" alt="Foundation Logo" className="h-12 w-12 object-contain" />
            <span className="font-bold text-2xl tracking-tight text-blue-700">One North Foundation</span>
          </div>
          <div className="space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition rounded px-3 py-2">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition rounded px-3 py-2">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="w-full py-20 px-4 flex flex-col items-center text-center relative min-h-[400px] overflow-hidden animate-fade-in-up"
      >
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'url(/foundation.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" aria-hidden="true"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 animate-fade-in-up delay-100">One North Foundation</h1>
          <p className="text-2xl mb-6 font-medium text-gray-700 animate-fade-in-up delay-200">Advancing AI development in Indonesia</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition transform hover:scale-105 focus:scale-105 animate-fade-in-up delay-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full max-w-4xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 animate-fade-in-up delay-200">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">Advancing AI development in Indonesia.</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">To empower and support startups in Indonesia to build innovative AI solutions through mentorship, funding, and a collaborative community.</p>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="w-full max-w-3xl mx-auto py-12 px-4 text-center animate-fade-in-up delay-300">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700">One North Foundation is dedicated to nurturing the next generation of AI-driven startups in Indonesia. We believe in the power of technology to transform lives and are committed to providing resources, guidance, and a vibrant network to help founders turn their ideas into impactful solutions.</p>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 animate-fade-in-up delay-400">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-white rounded-xl shadow p-6 w-full max-w-xs transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up"
            >
              <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200 transition-transform duration-200 hover:scale-105" />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-2xl mx-auto py-16 px-4 text-center animate-fade-in-up delay-500">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">Interested in collaborating or learning more? Reach out to us through our social channels below!</p>
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-transform duration-200 hover:scale-110"
              aria-label={link.name}
            >
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d={link.icon} />
              </svg>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
