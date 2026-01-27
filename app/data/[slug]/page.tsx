"use client"

import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { newsArticles } from "@/app/data/news"

export default function ArticlePageClient() {
  const params = useParams() // ✅ get params in client
  const router = useRouter()

  const slug = params?.slug
  const article = newsArticles.find((item) => item.slug === slug)

  if (!article) {
    // fallback if slug not found
    return (
      <main className="pt-32 px-4">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Button onClick={() => router.push("/news")}>Back to News</Button>
      </main>
    )
  }

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4">
          <span className="px-3 py-1 rounded-full bg-[#b5942f]/10 text-[#b5942f] text-xs inline-block mb-4">
            {article.category}
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-[#b5942f]" />
            {article.date}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <Image
            src={article.image}
            alt={article.title}
            width={800}
            height={500}
            className="rounded-2xl mb-10 w-full object-cover"
          />

          <article className="prose prose-neutral max-w-none leading-relaxed">
            {article.content
              .trim()
              .split("\n\n")
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </article>

          <div className="mt-12">
            <Link href="/news">
              <Button className="gap-2 border border-border bg-transparent hover:bg-muted">
                <ArrowLeft className="w-4 h-4" />
                Back to News
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
