import { Link, Navigate, useParams } from 'react-router-dom'
import { ScrollReveal } from '../components/common/ScrollReveal'
import { StaggerReveal } from '../components/common/StaggerReveal'
import { BlogCard } from '../components/blog/BlogCard'
import {
  blogPosts,
  formatBlogDate,
  getBlogPostBySlug,
  type BlogContentBlock,
} from '../data/blogPosts'
import { gradientGold } from '../styles/colors'

function ArticleContent({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <div className="blog-article-body space-y-5">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={`${block.text}-${index}`}
              className="font-display pt-2 text-xl font-semibold text-brand-teal md:text-2xl"
            >
              {block.text}
            </h2>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={`list-${index}`} className="list-disc space-y-2 pl-5 text-sm font-light leading-relaxed text-brand-charcoal/75 md:text-base">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        return (
          <p key={`${block.text.slice(0, 24)}-${index}`} className="text-sm font-light leading-relaxed text-brand-charcoal/75 md:text-base">
            {block.text}
          </p>
        )
      })}
    </div>
  )
}

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2)

  return (
    <article className="page-content-enter py-10 md:py-14">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <ScrollReveal>
          <Link
            to="/blog"
            className="font-display text-xs font-semibold tracking-wide text-brand-teal uppercase transition-colors hover:text-brand-sea"
          >
            ← Back to blog
          </Link>
          <p className="font-display mt-6 text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">
            {post.category}
          </p>
          <h1 className="font-display mt-2 text-2xl font-semibold text-brand-teal md:text-4xl lg:leading-tight">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-brand-charcoal/55">
            {formatBlogDate(post.publishedAt)} · {post.readTimeMinutes} min read · {post.author}
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-8 overflow-hidden rounded-2xl" delay={80}>
          <img src={post.image} alt={post.title} className="aspect-[21/9] w-full object-cover" />
        </ScrollReveal>

        <ScrollReveal className="mt-8" delay={120}>
          <p className="text-base font-light leading-relaxed text-brand-charcoal/70 md:text-lg">{post.excerpt}</p>
        </ScrollReveal>

        <ScrollReveal className="mt-8" delay={160}>
          <ArticleContent blocks={post.content} />
        </ScrollReveal>

        <ScrollReveal className="mt-10 rounded-2xl border border-brand-gold/25 bg-brand-cream/50 p-6 text-center" delay={200}>
          <p className="font-display text-sm font-semibold text-brand-teal">Explore our catalog</p>
          <p className="mt-2 text-sm font-light text-brand-charcoal/65">
            Find premium botanical products aligned with the topics in this article.
          </p>
          <Link
            to="/shop"
            className="font-display mt-4 inline-flex rounded-full px-6 py-2.5 text-xs font-semibold text-brand-charcoal uppercase transition-transform hover:scale-[1.02]"
            style={{ background: gradientGold }}
          >
            Shop now
          </Link>
        </ScrollReveal>
      </div>

      {related.length > 0 && (
        <div className="mx-auto mt-16 max-w-7xl border-t border-brand-teal/10 px-6 pt-12 lg:px-10">
          <ScrollReveal className="text-center">
            <h2 className="font-display text-xl font-semibold text-brand-teal md:text-2xl">More articles</h2>
          </ScrollReveal>
          <StaggerReveal className="mt-8 grid gap-6 md:grid-cols-2" baseDelay={80} stagger={90} animation="fade-up">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} variant="compact" />
            ))}
          </StaggerReveal>
        </div>
      )}
    </article>
  )
}
