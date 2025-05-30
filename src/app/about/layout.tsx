import { ReactNode } from "react";
import Link from "next/link";
import { User, Briefcase, Github } from "lucide-react";

interface AboutLayoutProps {
  children: ReactNode;
}

const menuItems = [
  { icon: User, label: "프로필", href: "/about" },
  { icon: Briefcase, label: "프로젝트", href: "/about/projects" },
  {
    icon: Github,
    label: "Github",
    href: "https://github.com/sooonding",
    external: true,
  },
];

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="container py-8">
      <div className="flex flex-col items-center gap-8 md:flex md:flex-row md:items-start">
        {/* 사이드바 */}
        <aside className="w-64 shrink-0">
          <nav className="bg-card sticky top-8 space-y-1 rounded-lg border p-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors"
                {...(item.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
