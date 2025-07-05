import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const slides = [
  {
    label: "LATEST",
    title: "CNCPT Workshop in Toronto",
    subtitle:
      "A two-day workshop and panel with YouTube creators around how AI can fit into their creative lives.",
    image: "/community.webp",
  },
  {
    label: "LATEST",
    title: "CNCPT Workshop in Toronto",
    subtitle:
      "A two-day workshop and panel with YouTube creators around how AI can fit into their creative lives.",
    image: "/community.webp",
  },
  // Add more slides as needed
];

export default function CustomCarousel() {
  return (
    <div className="w-full flex justify-center py-12 bg-transparent">
      <Carousel className="w-full max-w-6xl">
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem key={idx}>
              <div className="flex items-center bg-green-400 rounded-[80px] p-12 min-h-[500px]">
                <div className="flex-1 flex flex-col justify-center items-start">
                  <span className="mb-2 text-lg">{slide.label}</span>
                  <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-2xl">{slide.subtitle}</p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-full w-[70%] h-auto object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
} 