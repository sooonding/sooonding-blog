"use client";

import { Search } from "lucide-react";
import { Button } from "@/common/components/ui/button";
import { useState, useEffect } from "react";
import SearchModal from "./SearchModal";

export default function SearchButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsModalOpen(true)}
        className="w-full sm:w-auto justify-start text-muted-foreground hover:text-foreground"
      >
        <Search className="w-4 h-4 mr-2" />
        <span className="hidden sm:inline">검색...</span>
        <div className="hidden sm:flex ml-auto pl-3 text-xs">
          <kbd className="pointer-events-none select-none items-center gap-1 rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </Button>

      <SearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}