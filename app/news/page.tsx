import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { newsArticles } from "@/app/data/news"

const featuredArticle = newsArticles[0]
const otherArticles = newsArticles.slice(1)

export default function NewsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-sm uppercase tracking-wider font-medium block mb-4">
            News & Updates
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#b5942f] mb-6">
            Stories from Our Farms
          </h1>
          <p className="text-muted-foreground text-lg">
            Updates, announcements, and insights from Ekhaya Farms — focused on
            livestock, meat production, and community impact.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <Image
            src={featuredArticle.image}
            alt={featuredArticle.title}
            width={600}
            height={400}
            className="rounded-2xl w-full object-cover"
          />
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#b5942f]/10 text-[#b5942f] text-xs">
                {featuredArticle.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 text-[#b5942f]" />
                {featuredArticle.date}
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold mb-4">
              {featuredArticle.title}
            </h2>

            <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>

            <Link href={`/data/${featuredArticle.slug}`}>
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
            {otherArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/data/${article.slug}`}
                className="bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={500}
                  height={300}
                  className="w-full aspect-[5/3] object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
