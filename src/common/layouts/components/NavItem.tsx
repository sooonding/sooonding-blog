"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavItem() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "홈" },
    { href: "/blog", label: "블로그" },
    { href: "/about", label: "소개" },
  ];

  return (
    <nav className="ml-auto flex items-center gap-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "hover:text-primary relative font-medium transition-colors",
            pathname === item.href
              ? [
                  "text-foreground",
                  "after:absolute",
                  "after:bottom-[10px]",
                  "after:left-0",
                  "after:h-[1.5px]",
                  "after:w-full",
                  "after:bg-black",
                  "dark:after:bg-white",
                  "after:content-['']",
                ]
              : "text-foreground/60",
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
