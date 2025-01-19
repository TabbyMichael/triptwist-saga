import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-6xl">
            Plan Your Next Adventure
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary/80">
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
      <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
        <div
          className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-30"
          style={{
            clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;