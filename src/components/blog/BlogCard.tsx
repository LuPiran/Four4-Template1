import { Link } from 'react-router-dom'
import type { BlogPost } from '../../data/blogPosts'
import { formatBlogDate } from '../../data/blogPosts'

type BlogCardProps = {
  post: BlogPost
  variant?: 'default' | 'compact'
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  return (
    <article className="blog-card group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-teal/10 bg-white shadow-sm transition-all duration-400 hover:-translate-y-1 hover:border-brand-sea/25 hover:shadow-lg">
      <Link to={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="size-full object-cover transition-transform duration-600 group-hover:scale-105"
          loading="lazy"
        />
        <span className="font-display absolute top-3 left-3 rounded-full bg-brand-teal/90 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white uppercase">
          {post.category}
        </span>
      </Link>
      <div className={`flex flex-1 flex-col ${variant === 'compact' ? 'p-4' : 'p-5'}`}>
        <p className="text-[11px] font-medium text-brand-charcoal/45">
          {formatBlogDate(post.publishedAt)} · {post.readTimeMinutes} min read
        </p>
        <h3 className="font-display mt-2 text-lg font-semibold leading-snug text-brand-teal transition-colors group-hover:text-brand-sea">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-brand-charcoal/65">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="font-display mt-4 text-xs font-semibold tracking-wide text-brand-teal uppercase transition-colors hover:text-brand-sea"
        >
          Read article →
        </Link>
      </div>
    </article>
  )
}
