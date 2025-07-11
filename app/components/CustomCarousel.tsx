import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import type { CarouselApi } from "./ui/carousel";
import { useLanguage } from "./LanguageContext";

const heroSlides = [
  {
    title: { en: "One North Foundation", zh: "One North Foundation" },
    description: { en: "Advancing AI development in Southeast Asia", zh: "推动东南亚人工智能发展" },
    button: true,
    buttonText: { en: "Contact Us", zh: "联系我们" },
    image: "/foundation.png",
    overlay: "bg-white/70 backdrop-blur-sm",
  },
  {
    title: { en: "ITB Arkavidia Hackathon 2025", zh: "ITB Arkavidia Hackathon 2025" },
    description: { en: "Empowering the Next Generation of Innovators in Tech and AI", zh: "赋能新一代科技与人工智能创新者" },
    button: false,
    image: "/Event1.jpg",
    overlay: "bg-black/30",
  },
  {
    title: { en: "The Future Is Built Together", zh: "共创未来" },
    description: { en: "Uniting forward-thinkers across Southeast Asia to scale meaningful AI solutions.", zh: "汇聚东南亚前瞻思想者，共同推动有意义的AI解决方案。" },
    button: false,
    image: "/Event2.jpeg",
    overlay: "bg-black/30",
  },
];

export default function HeroCarousel() {
  const { lang } = useLanguage();
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 10000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const currentSlide = heroSlides[selectedIndex] || heroSlides[0];

  return (
    <div className="w-full min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${currentSlide.image})` }}>
      <div className={`absolute inset-0 ${currentSlide.overlay}`} aria-hidden="true"></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-20">
        <Carousel className="w-full" opts={{ loop: true, align: 'center' }} setApi={setEmblaApi}>
        <CarouselContent>
            {heroSlides.map((slide, idx) => (
              <CarouselItem key={idx} className="flex flex-col items-center text-center min-h-[300px] justify-center">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4 animate-fade-in-up delay-100 text-white drop-shadow-lg">{slide.title[lang]}</h1>
                <p className="text-2xl mb-6 font-medium text-white animate-fade-in-up delay-200 drop-shadow">{slide.description[lang]}</p>
                {slide.button && (
                  <a
                    href="#contact"
                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition transform hover:scale-105 focus:scale-105 animate-fade-in-up delay-300"
                  >
                    {slide.buttonText ? slide.buttonText[lang] : "Contact Us"}
                  </a>
                )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
        {/* Dots navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {heroSlides.map((_, idx) => (
            <span key={idx} className={`w-3 h-3 rounded-full ${selectedIndex === idx ? 'bg-blue-600' : 'bg-blue-300'} inline-block`} />
          ))}
        </div>
      </div>
    </div>
  );
} 