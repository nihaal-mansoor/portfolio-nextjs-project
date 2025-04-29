import React from 'react'
import { client } from '@/sanity/lib/client'
import { notFound } from "next/navigation"
import { STARTUPS_BY_ID_QUERY } from '@/sanity/lib/queries'
import { formatDate } from '@/lib/utils'

const page = async ({ params }: { params: Promise<{ id: string }>}) => {

  const id = (await params).id;
  const post = await client.fetch(STARTUPS_BY_ID_QUERY, {id});
  if (!post) return notFound();
  return (
    <>
        <section className="pink_container !min-h-[230px]">
            <p className='tag'>{formatDate(post?._createdAt)}</p>
        </section>

        <h1 className='text-3xl'>{post.title}</h1>
    </>
    )
}

export default page