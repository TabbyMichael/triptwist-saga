import { Button } from "@/components/ui/button";
import TripCard from "./TripCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

// Generate 200 sample trips
const generateSampleTrips = () => {
  const cities = [
    ["Paris", "France", "1499813-paris-eiffel-tower"],
    ["Tokyo", "Japan", "1492571-mount-fuji"],
    ["Santorini", "Greece", "1507686-santorini-sunset"],
    ["New York", "USA", "1496614-times-square"],
    ["Rome", "Italy", "1491897-colosseum"],
    ["Barcelona", "Spain", "1499629-sagrada-familia"],
    ["London", "UK", "1500380-big-ben"],
    ["Dubai", "UAE", "1494427-burj-khalifa"],
    ["Sydney", "Australia", "1493375-opera-house"],
    ["Amsterdam", "Netherlands", "1496563-canals"],
    ["Bali", "Indonesia", "1502161-rice-terraces"],
    ["Cairo", "Egypt", "1503915-pyramids"],
    ["Rio de Janeiro", "Brazil", "1483729-christ-redeemer"],
    ["Venice", "Italy", "1514563-grand-canal"],
    ["Kyoto", "Japan", "1493976-temples"],
    ["Machu Picchu", "Peru", "1461974-ruins"],
    ["Singapore", "Singapore", "1492158-marina-bay"],
    ["Istanbul", "Turkey", "1519923-hagia-sophia"],
    ["Prague", "Czech Republic", "1513922-old-town"],
    ["Cape Town", "South Africa", "1486259-table-mountain"]
  ];

  return Array.from({ length: 200 }, (_, index) => {
    const cityIndex = index % cities.length;
    const [city, country, photoId] = cities[cityIndex];
    const monthIndex = index % 12;
    const startDay = (index % 28) + 1;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    return {
      id: index + 1,
      title: `${city} Adventure`,
      destination: `${city}, ${country}`,
      startDate: `${months[monthIndex]} ${startDay}, 2024`,
      endDate: `${months[monthIndex]} ${startDay + 7}, 2024`,
      image: `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=800&h=600`,
    };
  });
};

const SAMPLE_TRIPS = generateSampleTrips();
const ITEMS_PER_PAGE = 15;

const UpcomingTrips = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(SAMPLE_TRIPS.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTrips = SAMPLE_TRIPS.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      items.push(
        <PaginationItem key="ellipsis-start">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < totalPages) {
      items.push(
        <PaginationItem key="ellipsis-end">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-secondary">Upcoming Trips</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {currentTrips.map((trip) => (
            <TripCard key={trip.id} {...trip} />
          ))}
        </div>
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              {renderPaginationItems()}
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrips;
