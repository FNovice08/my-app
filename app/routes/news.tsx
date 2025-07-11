import React from "react";

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

export default function NewsPage() {
  return (
    <main className="bg-white min-h-screen text-gray-900">
      <section className="w-full max-w-6xl mx-auto py-16 px-4 animate-fade-in-up delay-600 bg-blue-50 rounded-3xl shadow-md mt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest News</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stay updated with the latest developments in AI and tech.
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
    </main>
  );
} 