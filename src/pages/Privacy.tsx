const Privacy = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Travel preferences and history</li>
            <li>Account credentials</li>
            <li>Payment information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our services</li>
            <li>Personalize your experience</li>
            <li>Process your transactions</li>
            <li>Send you updates and marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers</li>
            <li>Travel partners</li>
            <li>Legal authorities when required</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Privacy;