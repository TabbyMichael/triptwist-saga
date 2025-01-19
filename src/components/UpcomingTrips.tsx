import { Button } from "@/components/ui/button";
import TripCard from "./TripCard";

const SAMPLE_TRIPS = [
  {
    id: 1,
    title: "Summer in Paris",
    destination: "Paris, France",
    startDate: "Jul 15, 2024",
    endDate: "Jul 22, 2024",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Tokyo Adventure",
    destination: "Tokyo, Japan",
    startDate: "Aug 1, 2024",
    endDate: "Aug 15, 2024",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Greek Islands",
    destination: "Santorini, Greece",
    startDate: "Sep 5, 2024",
    endDate: "Sep 12, 2024",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80",
  },
];

const UpcomingTrips = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary">Upcoming Trips</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_TRIPS.map((trip) => (
            <TripCard key={trip.id} {...trip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrips;