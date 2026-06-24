import { ScrollReveal } from '../components/common/ScrollReveal'
import { StaggerReveal } from '../components/common/StaggerReveal'
import { BlogCard } from '../components/blog/BlogCard'
import { blogPosts } from '../data/blogPosts'

export function BlogPage() {
  return (
    <div className="page-content-enter py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase">Blog</p>
          <h1 className="font-display mt-2 text-2xl font-semibold text-brand-teal md:text-4xl">
            Medicinal cannabis & botanical wellness
          </h1>
          <p className="mt-3 max-w-2xl text-sm font-light text-brand-charcoal/60 md:text-base">
            Evidence-informed articles on cannabis-based medicines, product formats, and building a conscious
            wellness routine with Polisupport.
          </p>
        </ScrollReveal>

        <StaggerReveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" baseDelay={80} stagger={70} animation="fade-up">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </StaggerReveal>
      </div>
    </div>
  )
}
