import Link from "next/link";

import { ModeToggle } from "../components/theme/DarkModeToggle";
import NavItem from "./components/NavItem";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-[var(--header-height)] items-center">
        <Link href="/" className="text-primary text-lg font-semibold">
          <span className="font-bold">간헐적으로 기록합니다.</span>
        </Link>
        <NavItem />
        <div className="ml-2.5 flex items-center gap-1">
          <ModeToggle />
          {/* asChild는 말 그대로 자식요소를 쓰겠다는 말
          실제 브라우저에서 보면 button 엘리먼트는 없어진다. */}
          {/* <Button asChild size="sm" variant="outline">
            <Link href="/blog/write">글쓰기</Link>
          </Button> */}
        </div>
      </div>
    </header>
  );
}
