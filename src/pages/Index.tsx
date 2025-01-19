import Hero from "@/components/Hero";
import UpcomingTrips from "@/components/UpcomingTrips";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <UpcomingTrips />
      </main>
      <Footer />
    </div>
  );
};

export default Index;