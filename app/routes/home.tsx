import React, { useEffect, useState } from "react";
import HeroCarousel from "../components/CustomCarousel";
import { NewsletterForm } from "./news";
import { useLanguage } from "../components/LanguageContext";
import LightBulbIcon from '@heroicons/react/24/solid/LightBulbIcon';
import RocketLaunchIcon from '@heroicons/react/24/solid/RocketLaunchIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';

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
    { name: "description", content: "Advancing AI development in Southeast Asia." },
  ];
}

type Translation = {
  nav: { about: string; contact: string };
  hero: { title: string; subtitle: string; button: string };
  vision: string;
  mission: string;
  about: string;
  founders: string;
  founder1: { role: string; name: string; bio: string };
  founder2: { role: string; name: string; bio: string };
  aiNative: string;
  whatsapp: string;
};

export default function Home() {
  // Use global language context
  const { lang } = useLanguage();

  // Translations
  const t: Record<'en' | 'zh', Translation> = {
    en: {
      nav: { about: "About Us", contact: "Contact Us" },
      hero: {
        title: "One North Foundation",
        subtitle: "Advancing AI development in Southeast Asia",
        button: "Contact Us",
      },
      vision: "Advancing AI development in Southeast Asia.",
      mission:
        "To empower and support startups in Southeast Asia to build innovative AI solutions through mentorship, funding, and a collaborative community.",
      about:
        "One North Foundation is dedicated to nurturing the next generation of AI-driven startups in Southeast Asia. We believe in the power of technology to transform lives and are committed to providing resources, guidance, and a vibrant network to help founders turn their ideas into impactful solutions.",
      founders: "Our Founders",
      founder1: {
        role: "Founder",
        name: "Jianfeng Lu",
        bio: "Jianfeng Lu is the co-founder and chairman of WIZ.AI, driving the adoption of Generative AI across Southeast Asia. Previously led China R&D at Trend Micro and served as VP at Qihoo 360. As a serial entrepreneur and active angel investor, Jianfeng Lu plays a key role in the AI and enterprise tech ecosystems across China, Southeast Asia, and the U.S.",
      },
      founder2: {
        role: "Chief Advisor",
        name: "Hongjiang Zhang",
        bio: "Dr. Hongjiang Zhang is a globally recognized computer scientist, Fellow of IEEE and ACM, and a member of the U.S. National Academy of Engineering. Held senior leadership roles at Microsoft Research Asia, Kingsoft, and Carlyle Group. Dr. Hongjiang Zhang is widely known for pioneering contributions to multimedia computing and the advancement of applied AI.",
      },
      aiNative: "Become an AI-Native",
      whatsapp: "Get the latest AI news and learn how to apply it in your work",
    },
    zh: {
      nav: { about: "关于我们", contact: "联系我们" },
      hero: {
        title: "One North Foundation",
        subtitle: "推动东南亚人工智能发展",
        button: "联系我们",
      },
      vision: "推动东南亚人工智能发展。",
      mission:
        "通过指导、资金和协作社区，赋能并支持东南亚初创企业构建创新的人工智能解决方案。",
      about:
        "One North Foundation 致力于培养东南亚新一代以人工智能为驱动的初创企业。我们相信科技改变生活的力量，并致力于为创始人提供资源、指导和充满活力的网络，帮助他们将想法转化为有影响力的解决方案。",
      founders: "创始团队",
      founder1: {
        role: "创始人",
        name: "陆剑锋",
        bio: `陆剑锋是WIZ.AI联合创始人兼董事长，长期致力于推动生成式AI在东南亚市场的落地与规模化应用。此前曾领导趋势科技中国研发中心，并担任奇虎360副总裁，具备深厚的技术与管理经验。作为连续创业者与活跃投资人，陆剑锋在中美东南亚多地的AI生态中发挥着关键影响力。`,
      },
      founder2: {
        role: "首席顾问",
        name: "张洪江",
        bio: `张洪江博士是国际知名的计算机科学家、IEEE和ACM会士，并当选美国国家工程院院士。曾任微软亚洲研究院主任研究员、金山软件CTO及凯雷投资集团高管，深耕人工智能与多媒体计算领域数十年。张洪江博士长期活跃于技术与产业交汇前沿，是全球AI发展战略的重要推动者。`,
      },
      aiNative: "成为AI原住民",
      whatsapp: "获取最新AI资讯，学习如何将其应用于您的工作",
    },
  };

  return (
    <main className="bg-white min-h-screen text-gray-900">
      {/* Hero Section (Carousel) */}
      <div className="bg-white">
        <HeroCarousel />
      </div>

      {/* Vision & Mission section (lighter blue gradient with white overlay) */}
      <section className="w-full bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 py-16 relative">
        <div className="absolute inset-0 bg-white/60 pointer-events-none" style={{zIndex:1}}></div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center border border-blue-100">
            <span className="transition duration-300 drop-shadow-lg">
              <LightBulbIcon className="h-14 w-14 text-blue-400 mb-4" />
            </span>
            <h2 className="text-3xl font-bold mb-2 text-blue-900">{lang === 'en' ? 'Our Vision' : '我们的愿景'}</h2>
            <p className="text-lg text-gray-700 text-center">{t[lang as 'en' | 'zh'].vision}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center border border-blue-100">
            <span className="transition duration-300 drop-shadow-lg">
              <RocketLaunchIcon className="h-14 w-14 text-blue-500 mb-4" />
            </span>
            <h2 className="text-3xl font-bold mb-2 text-blue-900">{lang === 'en' ? 'Our Mission' : '我们的使命'}</h2>
            <p className="text-lg text-gray-700 text-center">{t[lang as 'en' | 'zh'].mission}</p>
          </div>
        </div>
      </section>

      {/* About Us section (white background) */}
      <section id="about" className="w-full bg-white py-16 mt-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center border border-blue-100">
          <UsersIcon className="h-16 w-16 text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold mb-2 text-blue-900">{lang === 'en' ? 'About Us' : '关于我们'}</h2>
          <p className="text-lg text-gray-700 text-center">{t[lang as 'en' | 'zh'].about}</p>
        </div>
      </section>

      {/* Founders Section (gray background) */}
      <section className="w-full bg-gray-50 py-16 mt-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 border border-blue-100">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">{t[lang as 'en' | 'zh'].founders}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Founder: Jianfeng Lu */}
            <div className="flex flex-col items-center text-center">
              <img src="/Jianfeng Lu.jpeg" alt="Jianfeng Lu" className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-blue-200" />
              <h3 className="text-xl font-bold mb-1 text-blue-900">{t[lang as 'en' | 'zh'].founder1.role}</h3>
              <h4 className="text-lg font-semibold mb-4 text-blue-900">{t[lang as 'en' | 'zh'].founder1.name}</h4>
              <p className="text-gray-700 text-base text-center">{t[lang as 'en' | 'zh'].founder1.bio}</p>
            </div>
            {/* Chief Advisor: Hongjiang Zhang */}
            <div className="flex flex-col items-center text-center">
              <img src="/Hongjiang.jpeg" alt="Hongjiang Zhang" className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-blue-200" />
              <h3 className="text-xl font-bold mb-1 text-blue-900">{t[lang as 'en' | 'zh'].founder2.role}</h3>
              <h4 className="text-lg font-semibold mb-4 text-blue-900">{t[lang as 'en' | 'zh'].founder2.name}</h4>
              <p className="text-gray-700 text-base text-center">{t[lang as 'en' | 'zh'].founder2.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (white background) */}
      <section id="contact" className="w-full bg-white py-16 mt-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center border border-blue-100">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">{t[lang as 'en' | 'zh'].aiNative}</h2>
          <a
            href="https://chat.whatsapp.com/FYlJZvfse3bIWuDZJZYRWW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white rounded-full font-bold shadow-xl hover:scale-110 hover:shadow-2xl transition-transform duration-300 text-lg border-4 border-white mt-4"
          >
            {t[lang as 'en' | 'zh'].whatsapp}
          </a>
        </div>
      </section>
      {/* Footer (full width, content centered) */}
      <footer className="w-full bg-blue-50 mt-16 mb-0 px-0 py-12 text-gray-900 border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <img src="/Foundation Logo.png" alt="One North Foundation Logo" className="h-20 w-20 object-contain" />
            <div>
              <h3 className="font-bold text-xl">One North Foundation</h3>
              <p className="text-gray-700 text-lg mt-1 whitespace-nowrap">
                Grow together and become an AI-Native
              </p>
            </div>
          </div>
          <NewsletterForm />
        </div>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-8 border-t border-blue-100 pt-6 text-sm text-gray-500">
          <div className="mb-2 md:mb-0">© {new Date().getFullYear()} One North Foundation</div>
          <div className="flex gap-6">
            <a href="/" className="hover:underline">Home</a>
            <a href="/news" className="hover:underline">News</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
