// app/property/[id]/page.tsx
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'
import React from 'react'

// Dummy data (you can later replace with API call or DB fetch)
const posts = [
  {
    _id: '1',
    _createdAt: new Date(),
    views: 55,
    author: { _id: '101', name: 'Nihaal' },
    title: 'Luxury Villa in Palm Jumeirah',
    category: 'Villas',
    image: 'https://dummyimage.com/800x450/56be8b/fff&text=Property+1',
    description: 'A stunning beach-front villa...',
  },
  {
    _id: '2',
    _createdAt: new Date(),
    views: 132,
    author: { _id: '102', name: "Ayesha" },
    title: "Downtown Studio Apartment",
    category: "Apartments",
    image: 'https://dummyimage.com/800x450/56be8b/fff&text=Property+2',
    description: "Modern studio apartment located in the heart of the city. Ideal for singles and young professionals.",
  },
]

type PropertyParams = {
  params: { id: string }
}

export default function PropertyPage({ params }: PropertyParams) {
  const post = posts.find((item) => item._id === params.id)

  if (!post) return notFound()

  const { _createdAt, views, author: { _id: authorId, name }, title, category, _id, image, description } = post

  return (
    <>
        <section className='green_container !min-h-[230px]'>
            <p className="tag">{formatDate(_createdAt.toISOString())}</p>
            <h1 className="text-3xl">{title}</h1>
            <p className="text-lg text-slate-500 mt-2">Listed by {name}</p>
            <img src={image} alt={title} className="mt-4 w-full rounded-lg" />
            <p className="mt-4">{description}</p>
        </section>
    </>
  )
}
