import { Nav } from "@/components/Header/Nav";
import { AllBlog } from "@/components/Hero/allBlog";

export default function Home() {
  return (
    <main className="max-w-[1216px]">
      <Nav />
      <AllBlog />
    </main>
  );
}
