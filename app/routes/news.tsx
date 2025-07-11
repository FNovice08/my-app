import React from "react";
import { useLanguage } from "../components/LanguageContext";

const articles = [
  {
    id: 1,
    title: "Meta poaches four OpenAI researchers",
    excerpt: "PLUS: Google brings powerful AI to devices with Gemma 3n launch",
    date: "2024-06-01",
    author: "One North Foundation",
    image: "/foundation.png",
  },
  {
    id: 2,
    title: "DeepMind turns AI on DNA",
    excerpt: "PLUS: Anthropic brings new app-building capabilities to Claude",
    date: "2024-05-28",
    author: "One North Foundation",
    image: "/foundation.png",
  },
  {
    id: 3,
    title: "AI training gets legal clarity",
    excerpt: "PLUS: OpenAI creating Workspace, Office productivity competitor",
    date: "2024-05-25",
    author: "One North Foundation",
    image: "/foundation.png",
  },
];

export function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Google Form POST endpoint
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfJrJeOSEpqwMBPtE0Sshph2YtB7Oty91OHg8D9NXM-iHQxhA/formResponse";
    const formData = new FormData();
    formData.append("entry.291546022", email);
    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <div className="text-green-600 font-semibold">Thank you for subscribing!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center w-full max-w-md">
      <input
        type="email"
        required
        className="flex-1 px-4 py-2 rounded-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition disabled:opacity-60"
        disabled={loading}
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
      {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
    </form>
  );
}

export default function NewsPage() {
  const { lang } = useLanguage();
  const t = {
    en: {
      latestNews: "Latest News",
      subtitle: "Stay updated with the latest developments in AI and tech.",
      footer: {
        grow: "Grow together and become an AI-Native"
      }
    },
    zh: {
      latestNews: "最新新闻",
      subtitle: "随时了解人工智能和科技领域的最新动态。",
      footer: {
        grow: "共同成长，成为AI原住民"
      }
    }
  };
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <section className="w-full max-w-6xl mx-auto py-16 px-4 animate-fade-in-up delay-600 bg-blue-50 rounded-3xl shadow-md mt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t[lang].latestNews}</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t[lang].subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={e => { e.currentTarget.src = '/foundation.png'; }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <time className="text-sm text-gray-500">
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-xs text-gray-400">{article.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* News Footer (full width, content centered) */}
      <footer className="w-full bg-blue-50 mt-16 mb-0 px-0 py-12 text-gray-900 border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <img src="/Foundation Logo.png" alt="One North Foundation Logo" className="h-20 w-20 object-contain" />
            <div>
              <h3 className="font-bold text-xl">One North Foundation</h3>
              <p className="text-gray-700 text-lg mt-1 whitespace-nowrap">
                {t[lang].footer.grow}
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