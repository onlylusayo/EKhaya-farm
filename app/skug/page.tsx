import { notFound } from "next/navigation"
import { Calendar } from "lucide-react"
import { newsArticles } from "../news/page"

type Props = {
  params: { slug: string }
}

export default function ArticlePage({ params }: Props) {
  const article = newsArticles.find(a => a.slug === params.slug)

  if (!article) return notFound()

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4">
        <span className="px-3 py-1 rounded-full bg-[#b5942f]/10 text-[#b5942f] text-xs">
          {article.category}
        </span>

        <h1 className="font-serif text-4xl font-bold mt-4 mb-3">
          {article.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Calendar className="w-4 h-4 text-[#b5942f]" />
          {article.date}
        </div>

        <img
          src={article.image}
          alt={article.title}
          className="rounded-2xl mb-10 w-full object-cover"
        />

        <article className="prose prose-neutral max-w-none">
          {article.content
            .trim()
            .split("\n")
            .map((p, i) => (
              <p key={i}>{p}</p>
            ))}
        </article>
      </div>
    </main>
  )
}
