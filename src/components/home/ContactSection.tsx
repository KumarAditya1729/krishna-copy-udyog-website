import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">Contact Us</Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Request Bulk Quote</h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below with your requirements, and our sales team will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-background rounded-2xl shadow-card p-6 md:p-10 border border-border">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input id="company" placeholder="ABC Corp" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                <Input id="whatsapp" placeholder="+1 234 567 8900" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="country">Country *</Label>
                <Input id="country" placeholder="Your Country" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Needed (Approx) *</Label>
                <Input id="quantity" placeholder="e.g., 10,000 Pcs" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="product">Product Requirement *</Label>
              <select 
                id="product" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="" disabled selected>Select Product Type</option>
                <option value="school">School Notebooks</option>
                <option value="exercise">Exercise Books</option>
                <option value="spiral">Spiral Notebooks</option>
                <option value="register">Registers</option>
                <option value="custom">Custom Printed</option>
                <option value="oem">OEM Branded</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Message / Specifications</Label>
              <Textarea 
                id="message" 
                placeholder="Please describe your specific requirements like GSM, size, binding, etc." 
                rows={4}
              />
            </div>

            <Button type="button" size="lg" className="w-full gap-2 text-base h-12">
              <Send className="h-4 w-4" />
              Submit Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
