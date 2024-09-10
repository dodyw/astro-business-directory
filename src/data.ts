type Listing = {
  title: string;
  description: string;
  category: string;
  slug: string;
};

const listings: Listing[] = [
  {
    title: "Example Listing",
    description: "This is an example listing.",
    category: "category1",
    slug: "example-listing"
  }
  // Add more listings as needed
];

export function getData(category: string, slug: string): Listing | undefined {
  return listings.find(listing => listing.category === category && listing.slug === slug);
}

export async function fetchListings(): Promise<Listing[]> {
  return listings; // assuming the listings data here. Adjust as needed.
}
