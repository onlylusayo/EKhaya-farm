"use client"

import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const newsArticles = [
  {
    slug: "ekhaya-expands-to-karonga",
    title: "Ekhaya Farms Expands to Karonga District",
    excerpt:
      "We are proud to open our newest Ekhaya Farm Food Store in Karonga, bringing trusted, high-quality meat products to northern Malawi.",
    date: "December 15, 2025",
    category: "Announcement",
    image: "/placeholder.svg?height=300&width=500",
    content: `
Ekhaya Farms is pleased to announce the expansion of our operations to Karonga District.

This new Ekhaya Farm Food Store will provide residents with access to premium beef, goat meat, and poultry produced through responsible livestock farming practices. By expanding north, we are strengthening Malawi’s meat supply chain and ensuring families have access to safe, nutritious protein.

The Karonga store also creates employment opportunities and supports local livestock farmers through structured partnerships. This expansion reflects our long-term commitment to livestock development and food security across Malawi.
    `,
  },
  {
    slug: "record-livestock-growth-season",
    title: "Record Livestock Growth This Season",
    excerpt:
      "Improved animal health programs and responsible feeding practices have resulted in record livestock growth across our farms.",
    date: "December 10, 2025",
    category: "Farm Update",
    image: "/placeholder.svg?height=300&width=500",
    content: `
This season has been one of the most successful in Ekhaya Farms’ history.

Through proper animal nutrition, veterinary care, and ethical breeding programs, our cattle, goats, and poultry recorded exceptional growth rates. Healthy livestock directly translates into better meat quality for our customers.

These results demonstrate the value of responsible livestock management and continued farmer training, which remain central to our farming model.
    `,
  },
  {
    slug: "farmer-training-program",
    title: "Community Training Program Graduates 100 Farmers",
    excerpt:
      "Over 100 livestock farmers have completed advanced training in animal health, feeding, and welfare practices.",
    date: "November 28, 2025",
    category: "Community",
    image: "/placeholder.svg?height=300&width=500",
    content: `
Ekhaya Farms recently celebrated the graduation of 100 livestock farmers from our training program.

The program focuses on animal welfare, disease prevention, proper feeding, and sustainable livestock practices. Graduates are now better equipped to raise healthy animals and supply high-quality meat to local markets.

This initiative strengthens rural livelihoods while ensuring consistent meat standards across our supply chain.
    `,
  },
]

export default function NewsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 max-w-3xl">
          <span className="text-sm uppercase tracking-wider font-medium block mb-4">
            News & Updates
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#b5942f] mb-6">
            Stories from Our Farms
          </h1>
          <p className="text-muted-foreground text-lg">
            Updates, announcements, and insights from Ekhaya Farms — focused on livestock,
            meat production, and community impact.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <img
            src={newsArticles[0].image}
            alt={newsArticles[0].title}
            className="rounded-2xl w-full object-cover"
          />

          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#b5942f]/10 text-[#b5942f] text-xs">
                {newsArticles[0].category}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-[#b5942f]" />
                {newsArticles[0].date}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold mb-4">
              {newsArticles[0].title}
            </h2>

            <p className="text-muted-foreground mb-6">
              {newsArticles[0].excerpt}
            </p>

            <Link href={`/data/${newsArticles[0].slug}`}>
              <Button className="bg-[#b5942f] text-black gap-2">
                Read Full Story <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-[#b5942f] mb-8">
            Latest News
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.slice(1).map(article => (
              <Link
                key={article.slug}
                href={`/data/${article.slug}`}
                className="bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-[5/3] object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
