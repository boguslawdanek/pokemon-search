"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/pokemon/${searchValue.toLocaleLowerCase().trim()}`);
      setSearchValue("");
    }
  };

  return (
    <form
      className="flex items-center space-x-2 max-w-md mx-auto p-4"
      onSubmit={handleSubmit}
    >
      <Input
        className="flex-grow px-3 py-2"
        type="text"
        placeholder="Pokemon name"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button className="px-4 py-2" variant="outline">
        search
      </Button>
    </form>
  );
}
