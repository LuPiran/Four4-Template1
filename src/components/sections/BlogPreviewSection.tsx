import { Link } from 'react-router-dom'
import { BlogCard } from '../blog/BlogCard'
import { ScrollReveal } from '../common/ScrollReveal'
import { getFeaturedBlogPosts } from '../../data/blogPosts'
import { gradientGold } from '../../styles/colors'

type BlogPreviewSectionProps = {
  surface?: 'cream' | 'warm'
}

export function BlogPreviewSection({ surface = 'cream' }: BlogPreviewSectionProps) {
  const posts = getFeaturedBlogPosts(3)
  const sectionBg = surface === 'warm' ? 'bg-brand-warm-deep/50' : 'bg-brand-cream/50'

  return (
    <section className={`${sectionBg} py-16 md:py-20`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">Journal</p>
          <h2 className="font-display mt-2 text-2xl font-semibold text-brand-teal md:text-4xl">
            Cannabis wellness insights
          </h2>
          <p className="mt-3 text-sm font-light text-brand-charcoal/60 md:text-base">
            Articles on medicinal cannabis, CBD research, and how to choose the right botanical products.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-10 grid gap-6 md:grid-cols-3" delay={100}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </ScrollReveal>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="font-display inline-flex rounded-full px-6 py-3 text-sm font-semibold text-brand-charcoal transition-transform hover:scale-[1.02]"
            style={{ background: gradientGold }}
          >
            View more articles
          </Link>
        </div>
      </div>
    </section>
  )
}
