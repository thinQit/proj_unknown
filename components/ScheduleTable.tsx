'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ScheduleClass {
  time: string
  name: string
  instructor: string
  level: string
  duration: string
}

interface ScheduleTableProps {
  heading: string
  subheading: string
  schedule: Record<string, ScheduleClass[]>
  bookingNote: string
  className?: string
}

const defaultSchedule: Record<string, ScheduleClass[]> = {
  Monday: [
    { time: '6:30 AM', name: 'Heated Vinyasa Flow', instructor: 'Janelle', level: 'All levels', duration: '60 min' },
    { time: '12:00 PM', name: 'Mindful Strength', instructor: 'Priya', level: 'Intermediate', duration: '50 min' },
    { time: '6:00 PM', name: 'Restore & Renew', instructor: 'Mateo', level: 'Beginner', duration: '75 min' },
  ],
  Tuesday: [
    { time: '7:00 AM', name: 'Sunrise Flow', instructor: 'Janelle', level: 'All levels', duration: '45 min' },
    { time: '12:15 PM', name: 'Breath & Meditation Lab', instructor: 'Mateo', level: 'All levels', duration: '40 min' },
    { time: '6:30 PM', name: 'Heated Vinyasa Flow', instructor: 'Priya', level: 'Intermediate', duration: '60 min' },
  ],
  Wednesday: [
    { time: '6:30 AM', name: 'Mindful Strength', instructor: 'Priya', level: 'Intermediate', duration: '50 min' },
    { time: '5:30 PM', name: 'Restore & Renew', instructor: 'Mateo', level: 'Beginner', duration: '75 min' },
    { time: '7:00 PM', name: 'Candlelight Yin', instructor: 'Janelle', level: 'All levels', duration: '60 min' },
  ],
  Thursday: [
    { time: '7:00 AM', name: 'Heated Vinyasa Flow', instructor: 'Janelle', level: 'All levels', duration: '60 min' },
    { time: '12:00 PM', name: 'Mobility Reset', instructor: 'Priya', level: 'Beginner', duration: '45 min' },
    { time: '6:30 PM', name: 'Restore & Renew', instructor: 'Mateo', level: 'Beginner', duration: '75 min' },
  ],
  Friday: [
    { time: '6:30 AM', name: 'Sunrise Flow', instructor: 'Janelle', level: 'All levels', duration: '45 min' },
    { time: '5:30 PM', name: 'Mindful Strength', instructor: 'Priya', level: 'Intermediate', duration: '50 min' },
  ],
  Saturday: [
    { time: '8:00 AM', name: 'Heated Vinyasa Flow', instructor: 'Janelle', level: 'All levels', duration: '60 min' },
    { time: '10:00 AM', name: 'Restore & Renew', instructor: 'Mateo', level: 'Beginner', duration: '75 min' },
  ],
  Sunday: [
    { time: '9:00 AM', name: 'Gentle Flow', instructor: 'Priya', level: 'Beginner', duration: '60 min' },
    { time: '11:00 AM', name: 'Breath & Meditation Lab', instructor: 'Mateo', level: 'All levels', duration: '40 min' },
  ],
}

export default function ScheduleTable({
  heading = 'Weekly class schedule',
  subheading = 'Choose a day to see class times, instructors, and booking details.',
  schedule = defaultSchedule,
  bookingNote = 'Reserve your mat up to 7 days in advance. Walk-ins welcome based on availability.',
  className = '',
}: Partial<ScheduleTableProps>) {
  const days = Object.keys(schedule)
  const [activeDay, setActiveDay] = useState(days[0] || 'Monday')

  return (
    <section id="schedule" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-3">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{heading}</h2>
          <p className="max-w-2xl text-muted-foreground">{subheading}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {days.map((day) => (
            <Button
              key={day}
              variant={day === activeDay ? 'default' : 'outline'}
              onClick={() => setActiveDay(day)}
              className="rounded-lg px-4 py-2 text-sm"
            >
              {day}
            </Button>
          ))}
        </div>
        <Card className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="grid gap-4">
            {schedule[activeDay]?.map((item) => (
              <div
                key={item.time + item.name}
                className="flex flex-col justify-between gap-3 rounded-lg border border-border/60 p-4 md:flex-row md:items-center"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.time}</p>
                  <p className="text-base text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Instructor: {item.instructor}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="secondary">{item.level}</Badge>
                  <Badge variant="secondary">{item.duration}</Badge>
                </div>
              </div>
            ))}
            {schedule[activeDay]?.length === 0 && (
              <p className="text-sm text-muted-foreground">No classes listed for this day.</p>
            )}
          </div>
        </Card>
        <div className="mt-6 rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
          {bookingNote}
        </div>
      </div>
    </section>
  )
}
