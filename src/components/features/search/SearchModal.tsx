"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, FileText, Calendar } from "lucide-react";
import { Button } from "@/common/components/ui/button";
import { Badge } from "@/common/components/ui/badge";
import { Card, CardContent } from "@/common/components/ui/card";
import Link from "next/link";
import { Post } from "@/types/blog";
import { searchPostsAction } from "@/app/_actions/search";
import { SearchInput } from "./SearchInput";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query.trim()) {
        setIsLoading(true);
        setHasSearched(true);
        try {
          const response = await searchPostsAction(query.trim());
          setResults(response.posts);
        } catch (error) {
          console.error("Search error:", error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
        setHasSearched(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleClose = () => {
    setQuery("");
    setResults([]);
    setHasSearched(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-[8vh] backdrop-blur-sm">
      <div className="bg-background border-border mx-4 flex max-h-[80vh] w-full max-w-2xl flex-col rounded-xl border shadow-2xl">
        <div className="border-border/50 flex items-center gap-4 border-b p-6">
          <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
            <Search className="text-primary h-6 w-6" />
          </div>
          <SearchInput
            ref={inputRef}
            placeholder="블로그 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-10 w-10 rounded-full p-0"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <div className="text-muted-foreground flex items-center gap-3">
                <div className="border-primary/30 border-t-primary h-5 w-5 animate-spin rounded-full border-2"></div>
                검색 중...
              </div>
            </div>
          )}

          {!isLoading && hasSearched && results.length === 0 && (
            <div className="py-12 text-center">
              <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <Search className="text-muted-foreground h-8 w-8" />
              </div>
              <p className="text-muted-foreground">검색 결과가 없습니다.</p>
            </div>
          )}

          {!isLoading && results.length > 0 && (
            <div>
              <div className="text-muted-foreground mb-4 text-sm">
                {results.length}개 결과 발견
              </div>
              <div className="space-y-3">
                {results.slice(0, 5).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    onClick={handleClose}
                    className="block"
                  >
                    <Card className="hover:bg-accent/30 border-border/50 hover:border-primary/20 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0">
                            <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg">
                              <FileText className="text-primary h-4 w-4" />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-foreground hover:text-primary mb-1 line-clamp-1 font-medium">
                              {post.title}
                            </h3>
                            {post.description && (
                              <p className="text-muted-foreground mb-2 line-clamp-2 text-sm">
                                {post.description}
                              </p>
                            )}
                            <div className="flex items-center gap-3 text-xs">
                              {post.date && (
                                <div className="text-muted-foreground flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{post.date}</span>
                                </div>
                              )}
                              {post.tags && post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {post.tags.slice(0, 2).map((tag) => (
                                    <Badge
                                      key={tag}
                                      variant="secondary"
                                      className="px-2 py-0.5 text-xs"
                                    >
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
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              {results.length > 5 && (
                <div className="mt-4 border-t pt-4">
                  <Link
                    href={`/search?q=${encodeURIComponent(query)}`}
                    onClick={handleClose}
                    className="text-primary hover:bg-accent/50 flex items-center justify-center rounded-md p-2 text-sm transition-colors hover:underline"
                  >
                    모든 결과 보기 ({results.length}개)
                  </Link>
                </div>
              )}
            </div>
          )}

          {!hasSearched && (
            <div className="py-12 text-center">
              <div className="from-primary/10 to-primary/5 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
                <Search className="text-primary/60 h-8 w-8" />
              </div>
              <p className="text-muted-foreground mb-2">
                무엇을 찾고 계신가요?
              </p>
              <p className="text-muted-foreground/60 text-sm">
                제목, 내용, 태그 등에서 검색할 수 있습니다
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
