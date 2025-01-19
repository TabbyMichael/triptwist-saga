import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I create a new trip?</AccordionTrigger>
          <AccordionContent>
            Click the "Create New Trip" button on the homepage. Follow the step-by-step guide to set your destination, dates, and add activities to your itinerary.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Can I share my trip plans with others?</AccordionTrigger>
          <AccordionContent>
            Yes! You can invite friends and family to view or collaborate on your trip plans. Look for the share button on your trip details page.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
          <AccordionContent>
            Absolutely. We use industry-standard encryption and security measures to protect your payment information and personal data.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
          <AccordionContent>
            You can reach our support team through the Contact Us page, or email us directly at support@triptwist.com. We typically respond within 24 hours.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Can I use TripTwist offline?</AccordionTrigger>
          <AccordionContent>
            Yes, you can download your trip details for offline access. However, some features like real-time updates and booking services require an internet connection.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;