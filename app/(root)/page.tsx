import SearchForm from "@/components/SearchForm"; // Importing the SearchForm component which includes a search input and buttons.
import StartupCard, { StartupTypeCard } from "@/components/StartupCard"; // Importing the StartupCard component and its associated TypeScript type.
import { client } from "@/sanity/lib/client"; // Importing the Sanity client to fetch data from the CMS.
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries"; // Importing a GROQ query to retrieve startup posts from Sanity.

// Defining the default export for the home page.
// `searchParams` is a Promise resolving to an object with an optional 'query' string,
// provided by Next.js's App Router when using dynamic search parameters.
export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
    // Wait for the searchParams to resolve and extract the 'query' value (e.g. from URL like /?query=tech).
    const query = (await searchParams).query;
    const params = { search: query || null }
    // Fetching all startup posts from the Sanity CMS using the defined GROQ query.
    const { data: posts } = await sanityFetch({query: STARTUPS_QUERY, params})

    return (
        <>
            {/* <section className="pink_container">
                <h1 className="heading">Healthier, greener pet food<br />that drives profit</h1>
                <p className="sub-heading !max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <SearchForm query={query} />
            </section> */}
            <section className="bg-gradient-to-r from-black via-zinc-900 to-neutral-800 text-white py-16 px-6 md:px-12 lg:px-24">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Heading with yellow highlight */}
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                      Discover <span className="text-yellow-400">Innovative</span> Startups
                    </h1>

                    {/* Subheading with yellow emphasis */}
                    <p className="text-lg sm:text-xl text-white/90 mb-8">
                      Explore and connect with <span className="text-yellow-400">founders</span> building the future.
                    </p>

                    {/* Search Form */}
                    <SearchForm query={query} />
                  </div>
                </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : 'All Startups'}
                </p>

                <ul className="flex mt-7 card-grid">
                    {/* If posts exist, map each one to a StartupCard */}
                    {posts?.length > 0 ? (
                        posts.map((post: StartupTypeCard, index: number) => (
                            <StartupCard key={post?._id} post={post} />
                        ))
                    ) : (
                        <p className="no-results">No startups found.</p>
                    )}
                </ul>
            </section>

            <SanityLive />
        </>
    );
}
