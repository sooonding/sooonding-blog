"use server";

import { searchPosts } from "@/lib/notion";

export async function searchPostsAction(query: string) {
  try {
    const result = await searchPosts({ query });
    return result;
  } catch (error) {
    console.error("Search error:", error);
    return {
      posts: [],
      nextCursor: null,
      hasMore: false,
    };
  }
}