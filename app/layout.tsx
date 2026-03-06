import "./globals.css";
import { Poppins, Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headingFont = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <Navbar
          logo="CalmWave Yoga & Wellness"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Classes", href: "/classes" },
            { label: "Schedule", href: "/schedule" },
            { label: "Instructors", href: "/instructors" },
            { label: "Pricing", href: "/pricing" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Try Intro Week"
          ctaHref="/pricing"
        />
        <main>{children}</main>
        <Footer
          headline="Make calm a practice"
          subheadline="Join us for mindful movement, breath, and recovery—one class at a time."
          primaryCta={{ label: "Get Started", href: "/pricing" }}
          secondaryCta={{ label: "Read the Blog", href: "/blog" }}
          content={{
            columns: [
              {
                title: "Studio",
                links: [
                  { label: "Classes", href: "/classes" },
                  { label: "Schedule", href: "/schedule" },
                  { label: "Instructors", href: "/instructors" },
                  { label: "Pricing", href: "/pricing" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "Blog", href: "/blog" },
                  { label: "FAQ", href: "/#faq" },
                  { label: "Contact", href: "/contact" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                ],
              },
            ],
            copyright: "© 2026 CalmWave Yoga & Wellness. All rights reserved.",
          }}
        />
      </body>
    </html>
  );
}
