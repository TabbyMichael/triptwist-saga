import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1920&h=1080",
    alt: "Scenic mountain landscape with deer",
  },
  {
    url: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&h=1080",
    alt: "Beautiful river between mountains",
  },
  {
    url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&h=1080",
    alt: "Majestic pine forest",
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&h=1080",
    alt: "Foggy mountain peaks",
  },
  {
    url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1920&h=1080",
    alt: "Ocean waves at sunset",
  },
];

const Hero = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="relative overflow-hidden bg-muted">
      <Carousel className="w-full" plugins={[plugin.current]} opts={{ loop: true }}>
        <CarouselContent>
          {HERO_IMAGES.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px] w-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-2xl text-center text-white">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                      Plan Your Next Adventure
                    </h1>
                    <p className="mt-6 text-lg leading-8">
                      Create detailed itineraries, manage your travel plans, and explore new destinations - all in one place.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <Button className="group" size="lg">
                        <PlusCircle className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90" />
                        Create New Trip
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default Hero;