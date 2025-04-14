"use client" // Enables use of client-side hooks like useSearchParams

import { useSearchParams } from "next/navigation" // Hook to access search params from the URL
import { useMemo } from "react" // useMemo helps avoid recalculating filtered data unnecessarily
import StartupCard from "@/components/StartupCard" // Card component for each post
import SearchForm from "@/components/SearchForm" // Search bar component
import type { StartupCardType } from "@/types" // Custom type (you can define this if not done)

export default function Home() {
  const searchParams = useSearchParams()
  
  // Read `query` parameter from the URL, default to an empty string if undefined
  const query = searchParams.get("query")?.toLowerCase() || ""

  // Sample data — this would typically come from a database or API
  const posts: StartupCardType[] = [
    {
      _createdAt: new Date("2024-12-10"),
      views: 55,
      author: { _id: 1, name: "Nihaal" },
      _id: 1,
      image: "https://dummyimage.com/800x450/56be8b/fff&text=Property+1",
      category: "Villas",
      title: "Luxury Villa in Palm Jumeirah",
      description:
        "Experience premium living in this beachfront villa with private pool, stunning views, and top-tier amenities.",
    },
    {
      _createdAt: new Date("2024-11-21"),
      views: 132,
      author: { _id: 2, name: "Ayesha" },
      _id: 2,
      image: "https://dummyimage.com/800x450/4b5563/fff&text=Property+2",
      category: "Apartments",
      title: "Downtown Studio Apartment",
      description:
        "Modern studio apartment located in the heart of the city. Ideal for singles and young professionals.",
    },
    {
      _createdAt: new Date("2025-01-05"),
      views: 87,
      author: { _id: 3, name: "Rahul" },
      _id: 3,
      image: "https://dummyimage.com/800x450/64748b/fff&text=Property+3",
      category: "Offices",
      title: "Open Plan Office Space",
      description:
        "Spacious and bright open-plan office space with great connectivity. Suitable for startups and small businesses.",
    },
    {
      _createdAt: new Date("2025-02-14"),
      views: 210,
      author: { _id: 4, name: "Fatima" },
      _id: 4,
      image: "https://dummyimage.com/800x450/9ca3af/fff&text=Property+4",
      category: "Plots",
      title: "Residential Plot in Al Barsha",
      description:
        "A large plot available for residential development in the growing neighborhood of Al Barsha.",
    },
    {
      _createdAt: new Date("2025-03-02"),
      views: 32,
      author: { _id: 5, name: "Mohammed" },
      _id: 5,
      image: "https://dummyimage.com/800x450/334155/fff&text=Property+5",
      category: "Warehouses",
      title: "Storage Warehouse in DIP",
      description:
        "Secure storage facility available in Dubai Investment Park. Includes loading dock and 24/7 access.",
    },
  ];

  // Filter posts based on search query (matches title, description, or category)
  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
    )
  }, [query]) // Will re-filter only if the query changes

  return (
    <>
      {/* Hero section with heading and search */}
      <section className="green_container">
        <h1 className="heading">
          List Today <br /> Cash Tomorrow
        </h1>
        <p className="sub-heading !max-w-3xl">
          Get real offers for your property in just a few clicks.
        </p>
        
        {/* Search bar, passing in the query as prop */}
        <SearchForm query={query} />
      </section>

      {/* Property listing section */}
      <section className="section_container">
        {/* Dynamic title based on search or not */}
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Properties"}
        </p>

        {/* Grid of property cards */}
        <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-slate-700">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No properties found.</p>
          )}
        </ul>
      </section>
    </>
  )
}
