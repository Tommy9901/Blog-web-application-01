import { Footer } from "@/components/Footer/Footer";
import { Nav } from "@/components/Header/Nav";
import { TopHeader } from "@/components/Header/TopHeader";

import { AllBlog } from "@/components/Hero/allBlog";

export default function Home() {
  return (
    <main className="max-w-[1216px] bg-white">
      <Nav />
     <TopHeader />
      <AllBlog />
      <Footer />
    </main>
  );
}
