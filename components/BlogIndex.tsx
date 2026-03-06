'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface BlogPost {
  title: string
  excerpt: string
  category: string
  date: string
  href: string
  imageSrc: string
}

interface BlogIndexProps {
  heading: string
  subheading: string
  categories: string[]
  posts: BlogPost[]
  className?: string
}

const defaultCategories = ['All', 'Yoga', 'Wellness', 'Mindfulness', 'Nutrition']

const defaultPosts: BlogPost[] = [
  {
    title: 'How heated yoga supports recovery and mobility',
    excerpt: 'Learn how gentle heat can improve circulation and support safer movement.',
    category: 'Yoga',
    date: 'Feb 10, 2024',
    href: '/blog/heated-yoga-recovery',
    imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg',
  },
  {
    title: 'A 10-minute breath ritual for calmer evenings',
    excerpt: 'Try this simple breathing practice to unwind and improve sleep quality.',
    category: 'Mindfulness',
    date: 'Jan 28, 2024',
    href: '/blog/breath-ritual',
    imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg',
  },
  {
    title: 'What to expect from your first restorative class',
    excerpt: 'Set intentions, arrive prepared, and feel fully supported during your session.',
    category: 'Wellness',
    date: 'Jan 12, 2024',
    href: '/blog/first-restorative-class',
    imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750/site-images/corporate/default.jpg',
  },
]

export default function BlogIndex({
  heading = 'Studio journal',
  subheading = 'Thoughtful guidance on movement, recovery, and mindful living from our instructors.',
  categories = defaultCategories,
  posts = defaultPosts,
  className = '',
}: Partial<BlogIndexProps>) {
  const [activeCategory, setActiveCategory] = useState(categories[0] || 'All')

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts
    return posts.filter((post) => post.category === activeCategory)
  }, [activeCategory, posts])

  return (
    <section id="blog" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-3">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{heading}</h2>
          <p className="max-w-2xl text-muted-foreground">{subheading}</p>
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === activeCategory ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="rounded-lg px-4 py-2 text-sm"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card
              key={post.title}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={post.imageSrc}
                alt={post.title}
                width={1600}
                height={900}
                className="h-40 w-full object-cover"
              />
              <div className="space-y-3 p-5">
                <Badge variant="secondary">{post.category}</Badge>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <Link href={post.href} className="font-medium text-[#0077B6]">
                    Read more
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
