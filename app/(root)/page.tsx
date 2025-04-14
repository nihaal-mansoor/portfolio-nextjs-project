import SearchForm from "@/components/SearchForm"
import StartupCard from "@/components/StartupCard"

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query;

    const posts = [{
      _createdAt: new Date(),
      views: 55,
      author: { _id:1, name: 'Nihaal' },
      _id: 1,
      description: "This is a description",
      image: "https://dummyimage.com/16:9x1080",
      category: "Robots",
      title: "We Robots",
    }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Welcome <br/> Home</h1>
        <p className="sub-heading !max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ): (
            <p className="no-results">No startups found.</p>
          )}
        </ul>
      </section>
    </>
  );
}
