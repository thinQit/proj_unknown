import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar } from "@/components/ui/avatar"
import NavbarSticky from "@/components/NavbarSticky"
import FooterMultiColumn from "@/components/FooterMultiColumn"
import PricingTable from "@/components/PricingTable"
import TeamGrid from "@/components/TeamGrid"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import CTASparkles from "@/components/CTASparkles"
import HeroWaves from "@/components/HeroWaves"
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect"

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <NavbarSticky
        logo="PulseForge Gym"
        navItems={[
          { label: "Home", href: "/" },
          { label: "Classes", href: "/classes" },
          { label: "Trainers", href: "/trainers" },
          { label: "Pricing", href: "/pricing" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/contact" },
        ]}
        ctaLabel="Free Trial"
        ctaHref="/free-trial"
      />

      <section className="relative">
        <HeroWaves
          title="Train Harder. Move Faster. Get Stronger."
          subtitle="PulseForge is a high-energy gym in Downtown Austin built for strength, conditioning, and real transformation—classes, coaching, and a community that shows up."
          ctaLabel="Claim a Free 7‑Day Trial"
          ctaHref="/free-trial"
          secondaryCtaLabel="View Class Schedule"
          secondaryCtaHref="/classes"
        />
        <div className="mx-auto grid max-w-7xl gap-6 px-6 pb-12 md:grid-cols-3">
          {[
            { label: "Classes / week", value: "45+" },
            { label: "Coaches", value: "8" },
            { label: "Avg. member rating", value: "4.9/5" },
          ].map((stat) => (
            <Card key={stat.label} className="border-border bg-zinc-900/80 p-6">
              <p className="text-sm uppercase tracking-widest text-zinc-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <TextGenerateEffect words="Classes that hit different" />
          <p className="mt-4 text-zinc-300">
            Pick your lane—strength, conditioning, boxing, or mobility. Every class is coach-led with
            clear progressions.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Forge Strength",
              duration: "50 min",
              intensity: "High",
              focus: "Barbell + dumbbell strength blocks, progressive overload",
            },
            {
              name: "HIIT Conditioning",
              duration: "45 min",
              intensity: "Very High",
              focus: "Intervals, sleds, rowers, assault bikes",
            },
            {
              name: "Box + Burn",
              duration: "45 min",
              intensity: "High",
              focus: "Heavy bags, footwork, core finishers",
            },
            {
              name: "Mobility + Reset",
              duration: "40 min",
              intensity: "Low",
              focus: "Hips/shoulders/spine mobility, breathwork",
            },
          ].map((card) => (
            <Card key={card.name} className="border-border bg-zinc-900/80 p-6">
              <p className="text-xs uppercase tracking-widest text-red-500">{card.intensity}</p>
              <h3 className="mt-2 text-xl font-semibold">{card.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{card.duration}</p>
              <p className="mt-4 text-sm text-zinc-300">{card.focus}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-red-500 text-white hover:bg-red-600">
            <a href="/classes">See Full Schedule</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/trainers">Meet the Trainers</a>
          </Button>
        </div>
      </section>

      <section className="bg-zinc-950 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Weekly schedule snapshot</h2>
              <p className="mt-2 text-zinc-300">
                Consistent times so training becomes automatic. Full schedule includes coach names and
                difficulty notes.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild className="bg-red-500 text-white hover:bg-red-600">
                <a href="/classes#schedule">Open Schedule Page</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/contact">Book a Tour</a>
              </Button>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                day: "Monday",
                slots: ["6:00am HIIT Conditioning", "12:10pm Mobility + Reset", "5:30pm Forge Strength", "6:30pm Box + Burn"],
              },
              {
                day: "Wednesday",
                slots: ["6:00am Forge Strength", "12:10pm HIIT Conditioning", "5:30pm Box + Burn", "6:30pm Mobility + Reset"],
              },
              {
                day: "Saturday",
                slots: ["8:00am HIIT Conditioning", "9:15am Forge Strength", "10:30am Community Sweat"],
              },
            ].map((day) => (
              <Card key={day.day} className="border-border bg-zinc-900/80 p-6">
                <h3 className="text-lg font-semibold">{day.day}</h3>
                <Separator className="my-4 bg-zinc-800" />
                <ul className="space-y-2 text-sm text-zinc-300">
                  {day.slots.map((slot) => (
                    <li key={slot}>{slot}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <TeamGrid
          headline="Coaches who coach"
          subheadline="No guesswork. Our trainers cue form, track progress, and keep you accountable—without the ego."
          members={[
            {
              name: "Maya Chen",
              title: "Head Coach • Conditioning",
              imageUrl: "/images/team.jpg",
              bio: "Relentless energy, smart intervals, and pacing that drives results.",
            },
            {
              name: "Sam Patel",
              title: "Strength Coach",
              imageUrl: "/images/about.jpg",
              bio: "Clean reps, big PRs, and a clear path to strength.",
            },
            {
              name: "Tasha Brooks",
              title: "Boxing Coach",
              imageUrl: "/images/gallery-1.jpg",
              bio: "Fight-camp energy with beginner-friendly coaching.",
            },
            {
              name: "Jordan Reyes",
              title: "Mobility & Recovery",
              bio: "Move better, recover faster, and build longevity.",
            },
          ]}
        />
        <div className="mt-8 flex gap-3">
          <Button asChild className="bg-red-500 text-white hover:bg-red-600">
            <a href="/trainers">See All Trainers</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/free-trial">Start a Free Trial</a>
          </Button>
        </div>
      </section>

      <section className="bg-zinc-950 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <PricingTable
            headline="Memberships built for momentum"
            subheadline="Choose a plan that matches your schedule. Upgrade anytime—no awkward sales pressure."
            tiers={[
              {
                name: "Starter",
                price: "$89",
                period: "per month",
                description: "Best for busy schedules",
                features: [
                  "8 classes / month",
                  "Open gym access (weekends)",
                  "1 fitness assessment (30 min)",
                  "Member app for schedule + tips",
                ],
                ctaLabel: "Choose Starter",
                ctaHref: "/pricing#starter",
              },
              {
                name: "Unlimited",
                price: "$149",
                period: "per month",
                description: "Most popular",
                features: [
                  "Unlimited classes",
                  "Open gym access (all hours)",
                  "Monthly progress check-in",
                  "Bring-a-friend pass (1/month)",
                ],
                ctaLabel: "Go Unlimited",
                ctaHref: "/pricing#unlimited",
                highlighted: true,
              },
              {
                name: "Unlimited + Coaching",
                price: "$229",
                period: "per month",
                description: "Fastest results",
                features: [
                  "Unlimited classes",
                  "2x personal training sessions / month",
                  "Custom strength accessory plan",
                  "Nutrition habit tracker (weekly)",
                ],
                ctaLabel: "Add Coaching",
                ctaHref: "/pricing#coaching",
              },
            ]}
          />
          <div className="mt-8 flex gap-3">
            <Button asChild className="bg-red-500 text-white hover:bg-red-600">
              <a href="/pricing">Compare Plans</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/contact">Questions? Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Real people. Real work. Real change.</h2>
            <p className="mt-2 text-zinc-300">
              Consistency beats motivation. Here are a few member wins from the last 90 days.
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild className="bg-red-500 text-white hover:bg-red-600">
              <a href="/free-trial">Start Your Trial</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/blog">Read Training Tips</a>
            </Button>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Alex R.",
              result: "Down 18 lb • +35 lb on deadlift",
              quote: "I stopped guessing and started following a plan. The coaches kept me consistent.",
            },
            {
              name: "Priya S.",
              result: "First strict pull-up • Better shoulder mobility",
              quote: "Mobility + strength changed everything. I feel athletic again.",
            },
            {
              name: "Marcus T.",
              result: "5K time improved by 3:10",
              quote: "Conditioning classes are intense but scalable. I’m faster and leaner.",
            },
            {
              name: "Elena G.",
              result: "Waist -3 in • Confidence +100",
              quote: "The community is the difference. You walk in and people want you to win.",
            },
          ].map((item) => (
            <Card key={item.name} className="border-border bg-zinc-900/80 p-6">
              <p className="text-xs uppercase tracking-widest text-red-500">{item.name}</p>
              <h3 className="mt-3 text-lg font-semibold">{item.result}</h3>
              <p className="mt-3 text-sm text-zinc-300">"{item.quote}"</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <TestimonialsAnimated
            title="Austin’s most motivating gym—by the people in it"
            subtitle="If you want a gym that actually coaches you, you’ll fit right in."
            testimonials={[
              {
                quote: "PulseForge is the first place that made me consistent. Coaches fix my form every class.",
                name: "Danielle W.",
                designation: "Member • 2 years",
                src: "/images/team.jpg",
              },
              {
                quote: "The schedule is perfect for before work. Clean facility, great music, and tough workouts.",
                name: "Chris M.",
                designation: "Member • 10 months",
                src: "/images/about.jpg",
              },
              {
                quote: "Box + Burn is my therapy. I’m stronger, leaner, and my stress is way down.",
                name: "Nina K.",
                designation: "Member • 6 months",
                src: "/images/gallery-1.jpg",
              },
            ]}
            autoplay
          />
          <div className="mt-6 flex gap-3">
            <Button asChild className="bg-red-500 text-white hover:bg-red-600">
              <a href="/contact">Visit Us Today</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/pricing">See Memberships</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <CTASparkles
          title="Your first week is on us"
          subtitle="Try any class, meet the coaches, and leave with a plan. No pressure—just progress."
          ctaLabel="Get the Free 7‑Day Trial"
          ctaHref="/free-trial"
          secondaryCtaLabel="Call (512) 555‑0199"
          secondaryCtaHref="tel:+15125550199"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-border bg-zinc-900/80 p-6">
            <h3 className="text-lg font-semibold">What’s included</h3>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>Gym tour + goal chat (10 minutes)</li>
              <li>1 movement screen + class recommendations</li>
              <li>Unlimited classes for 7 days</li>
              <li>Plan options with transparent pricing</li>
            </ul>
          </Card>
          <Card className="border-border bg-zinc-900/80 p-6">
            <h3 className="text-lg font-semibold">Find us. Train with us.</h3>
            <p className="mt-3 text-sm text-zinc-300">201 E 6th St, Austin, TX 78701</p>
            <p className="mt-2 text-sm text-zinc-300">(512) 555‑0199 • hello@pulseforgegym.com</p>
            <p className="mt-2 text-sm text-zinc-300">
              Mon–Fri 5:30am–9:00pm • Sat 7:00am–2:00pm • Sun 8:00am–12:00pm
            </p>
            <div className="mt-4 flex gap-3">
              <Button asChild className="bg-red-500 text-white hover:bg-red-600">
                <a href="/contact">Send a Message</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://maps.google.com/?q=201+E+6th+St,+Austin,+TX+78701">Directions</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <FooterMultiColumn
        brand="PulseForge Gym"
        description="Strength • Conditioning • Boxing • Mobility"
        columns={[
          {
            title: "Company",
            links: [
              { label: "About", href: "/about" },
              { label: "Trainers", href: "/trainers" },
              { label: "Pricing", href: "/pricing" },
            ],
          },
          {
            title: "Programs",
            links: [
              { label: "Classes & Schedule", href: "/classes" },
              { label: "Free Trial", href: "/free-trial" },
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
        ]}
        copyright="© 2026 PulseForge Gym. All rights reserved."
      />
    </div>
  )
}
