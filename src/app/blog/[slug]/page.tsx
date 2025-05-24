import Link from "next/link";
import { Separator } from "@/common/components/ui/separator";
import { Badge } from "@/common/components/ui/badge";
import { CalendarDays, User } from "lucide-react";

import { getPostBySlug } from "@/lib/notion";
import { formatDate } from "@/lib/date";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypePrettyCode from "rehype-pretty-code";

import { compile } from "@mdx-js/mdx";
import withSlugs from "rehype-slug";
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";

import GiscusComments from "@/components/GiscusComments";
import { notFound } from "next/navigation";

interface TocEntry {
  value: string;
  depth: number;
  id?: string;
  children?: Array<TocEntry>;
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

// nDept
function TableOfContentsLink({ item }: { item: TocEntry }) {
  return (
    <div className="space-y-2">
      <Link
        key={item.id}
        href={`#${item.id}`}
        className={`hover:text-foreground text-muted-foreground block font-medium transition-colors`}
      >
        {item.value}
      </Link>
      {/* 하위 항목이 있을 때 재귀호출 */}
      {item.children && item.children.length > 0 && (
        <div className="space-y-2 pl-4">
          {item.children.map((subItem) => (
            // 한번 더 돌린다.
            <TableOfContentsLink key={subItem.id} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  const { markdown, post } = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { data } = await compile(markdown, {
    rehypePlugins: [withSlugs, withToc, withTocExport, rehypeSanitize],
  });

  return (
    <article className="container py-4 md:py-8 lg:py-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[130px_1fr_250px] md:gap-8">
        <aside className="hidden md:block"></aside>
        <section className="order-2 md:order-none">
          {/* 블로그 헤더 */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                {post.tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">{post.title}</h1>
            </div>

            {/* 메타 정보 */}
            <div className="text-muted-foreground flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author || "Unknown"}</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* 블로그 본문 */}
          <div className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-[var(--header-height)] max-w-none">
            <MDXRemote
              source={markdown}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSanitize, rehypePrettyCode, withSlugs],
                },
              }}
            />
          </div>

          <Separator className="my-16" />

          <GiscusComments />
        </section>
        <aside className="relative order-1 md:order-none">
          <div className="sticky top-[var(--sticky-top)]">
            <div className="bg-muted/20 space-y-4 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">목차</h3>
              <nav className="space-y-3 text-sm">
                {data?.toc?.map((item) => (
                  <TableOfContentsLink key={item.id} item={item} />
                ))}
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
