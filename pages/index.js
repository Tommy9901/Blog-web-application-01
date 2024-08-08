import { Footer } from "@/components/Footer/Footer";
import { Nav } from "@/components/Header/Nav";
import { TopHeader } from "@/components/Header/TopHeader";
import { AllBlog } from "@/components/Hero/allBlog";
import { Trending } from "@/components/Trending/Trend";

export default function Home() {
  return (
    <main className="max-w-[1216px] bg-white dark:text-[#D1D5DB] dark:bg-[#030712]">
      
      <TopHeader />
      <Trending />
      <AllBlog />
      
    </main>
  );
}
