"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function GiscusComments() {
  const { theme } = useTheme();
  return (
    <Giscus
      repo="sooonding/sooonding-blog-gisc"
      repoId="R_kgDOOvGb8A"
      category="Announcements"
      categoryId="DIC_kwDOOvGb8M4Cqfmb"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emit-metadata="0"
      input-position="top"
      theme={theme === "dark" ? "dark" : "light"}
      lang="ko"
    />
  );
}
