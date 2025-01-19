const About = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">About TripTwist</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          TripTwist is your ultimate travel companion, designed to make travel planning seamless and enjoyable. 
          Our platform helps travelers create detailed itineraries, discover new destinations, and manage their travel plans efficiently.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          To inspire and empower travelers to explore the world confidently and create unforgettable memories.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=300" 
              alt="Travel Planning" 
              className="rounded-lg mb-4 w-full h-[300px] object-cover" 
            />
            <h3 className="text-xl font-semibold mb-2">Smart Planning</h3>
            <p>Intuitive tools for creating the perfect itinerary</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=400&h=300" 
              alt="Destinations" 
              className="rounded-lg mb-4 w-full h-[300px] object-cover" 
            />
            <h3 className="text-xl font-semibold mb-2">Global Destinations</h3>
            <p>Discover amazing places around the world</p>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&h=300" 
              alt="Experiences" 
              className="rounded-lg mb-4 w-full h-[300px] object-cover" 
            />
            <h3 className="text-xl font-semibold mb-2">Unique Experiences</h3>
            <p>Create memories that last a lifetime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;