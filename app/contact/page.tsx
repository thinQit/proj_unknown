import Container from "@/components/Container";
import HeroImage from "@/components/HeroImage";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <HeroImage
        imageUrl="/images/hero.jpg?contact=hero"
        headline="Contact Luxe Harbor Realty"
        subheadline="Buying, selling, or just exploring options? We’ll help you get clear on the next step."
        primaryCta={{ label: "Send a Message", href: "#contact-form" }}
        secondaryCta={{ label: "Call (206) 555-0113", href: "tel:+12065550113" }}
        overlayOpacity="bg-black/35"
      />
      <ScrollReveal>
        <section id="contact-form" className="py-20 md:py-28">
          <Container>
            <ContactForm
              headline="Send us your details"
              subheadline="We’ll reply within one business day with next steps and options."
              contactInfo={[
                { icon: "Mail", label: "Email", value: "hello@luxeharborrealty.com" },
                { icon: "Phone", label: "Phone", value: "(206) 555-0113" },
              ]}
            />
          </Container>
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted">
          <Container>
            <SectionHeader
              headline="Visit our office"
              subheadline="Prefer in-person? Stop by or book a time so we can prepare comps and neighborhood options."
            />
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-muted-foreground">
                214 Goldfinch St, Suite 300, Harborview, WA 98109
              </p>
              <p className="mt-2 text-muted-foreground">
                Validated parking available in the Goldfinch Garage (entrance on Goldfinch St).
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Across from Goldfinch Square</li>
                <li>• 2 blocks from Harborview Marina</li>
              </ul>
            </div>
          </Container>
        </section>
      </ScrollReveal>
    </main>
  );
}
