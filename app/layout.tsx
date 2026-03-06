import "./globals.css";
import type { Metadata } from "next";
import { DM_Serif_Display, Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Luxe Harbor Realty | Luxury Real Estate in Harborview",
  description:
    "Browse curated property listings, meet trusted local agents, estimate payments with our mortgage calculator, and read practical buyer/seller guidance on the Luxe Harbor blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${nunito.variable}`}>
      <body className="bg-background text-foreground">
        <Navbar
          logo="Luxe Harbor Realty"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Listings", href: "/listings" },
            { label: "Agents", href: "/agents" },
            { label: "Services", href: "/services" },
            { label: "Mortgage Calculator", href: "/mortgage-calculator" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Schedule a Tour"
          ctaHref="/contact?intent=tour"
        />
        {children}
        <Footer
          brand="Luxe Harbor Realty"
          description="Luxury service. Local expertise. Clear guidance."
          columns={[
            {
              title: "Explore",
              links: [
                { label: "Listings", href: "/listings" },
                { label: "Agents", href: "/agents" },
                { label: "Services", href: "/services" },
                { label: "Mortgage Calculator", href: "/mortgage-calculator" },
              ],
            },
            {
              title: "Resources",
              links: [
                { label: "Blog", href: "/blog" },
                { label: "Buyer Guide", href: "/blog/buyer-guide-harborview" },
                { label: "Seller Checklist", href: "/blog/seller-prep-checklist" },
              ],
            },
            {
              title: "Contact",
              links: [
                { label: "(206) 555-0113", href: "tel:+12065550113" },
                {
                  label: "hello@luxeharborrealty.com",
                  href: "mailto:hello@luxeharborrealty.com",
                },
                {
                  label:
                    "214 Goldfinch St, Suite 300, Harborview, WA 98109",
                  href: "/contact",
                },
              ],
            },
          ]}
          copyright="© 2026 Luxe Harbor Realty. All rights reserved."
        />
      </body>
    </html>
  );
}
