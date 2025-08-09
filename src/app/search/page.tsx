import { searchPosts } from "@/lib/notion";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/common/components/ui/button";
import { Badge } from "@/common/components/ui/badge";
import { ArrowLeft } from "lucide-react";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

async function SearchResults({ query }: { query: string }) {
  const { posts } = await searchPosts({ query });

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">
          검색 결과가 없습니다.
        </p>
        <Button asChild variant="outline">
          <Link href="/">홈으로 돌아가기</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">{query}</h2>
      <p className="text-muted-foreground mb-8">
        {posts.length} Result(s) found
      </p>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block group hover:bg-accent/30 p-3 rounded-lg transition-colors"
          >
            <article>
              <h3 className="text-lg font-medium text-primary hover:underline mb-2 group-hover:text-primary/80">
                {post.title}
              </h3>
              {post.description && (
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {post.description}
                </p>
              )}
              <div className="flex items-center gap-3 text-xs">
                {post.date && (
                  <time className="text-muted-foreground">
                    {post.date}
                  </time>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-1">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs px-1.5 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-muted-foreground">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SearchResultsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="h-8 bg-muted rounded mb-6 w-32" />
      <div className="h-5 bg-muted rounded mb-6 w-48" />
      <div className="space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="border-b border-border pb-6">
            <div className="h-7 bg-muted rounded mb-3 w-3/4" />
            <div className="h-4 bg-muted rounded mb-2 w-full" />
            <div className="h-4 bg-muted rounded mb-3 w-2/3" />
            <div className="flex gap-2">
              <div className="h-4 bg-muted rounded w-20" />
              <div className="h-6 bg-muted rounded w-12" />
              <div className="h-6 bg-muted rounded w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q || "";

  return (
    <div className="container py-8">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            돌아가기
          </Link>
        </Button>
      </div>

      {query ? (
        <Suspense fallback={<SearchResultsSkeleton />}>
          <SearchResults query={query} />
        </Suspense>
      ) : (
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">검색</h1>
          <p className="text-muted-foreground">검색어를 입력해주세요.</p>
        </div>
      )}
    </div>
  );
}