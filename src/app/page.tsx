import type { Metadata } from "next";

// COMPONENTS
import Main from "@/components/homepage/main";


export const metadata: Metadata = {
  title: "home",
  description: "home page of this app",
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Main />
    </main>
  );
}
