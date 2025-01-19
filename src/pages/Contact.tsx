import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            Have questions about TripTwist? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p>support@triptwist.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p>123 Travel Street<br />Adventure City, TC 12345</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-2">Name</label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-2">Email</label>
            <Input id="email" type="email" placeholder="your@email.com" required />
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-2">Message</label>
            <Textarea id="message" placeholder="How can we help?" required className="min-h-[150px]" />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;