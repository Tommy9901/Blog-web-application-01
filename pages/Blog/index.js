import { Nav } from "@/components/Header/Nav";
import { Footer } from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import { ArticleCard } from "@/components/Hero/ArticleCard";

const pageSize = 12;

export function Blog() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    LoadMore();
  }, []);

  async function LoadMore() {
    setLoading(true);
    const responce = await fetch(`https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${pageSize}`)
    const newArticles = await responce.json();
     
    const updatedArticles = articles.concat(newArticles);
    setArticles(updatedArticles);
    setPage(page + 1);
    if (newArticles.length < pageSize) {
      setEnded(true);
    }
    setLoading(false);
     
  }

  return (
    <div className="dark:bg-[#030712]">
        <div className="container mx-auto bg-white dark:text-[#D1D5DB] dark:bg-[#111827] pb-10">
          <div className="font-bold text-2xl px-8 mb-8 dark:bg-[#111827] pt-10">All Blog Post</div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-8 bg-white mb-[50px] dark:text-[#D1D5DB] dark:bg-[#111827]">
            {articles.map((item,) => (
            <ArticleCard key={item.id} article={item}/>
              ))}
          </div>

          {!ended && (
              <div className="py-16 text-center" onClick={LoadMore}>
              <button disabled={loading} class="btn btn-lg">
                  {loading && <span className="loading loading-spinner"></span>}
                  Load More
              </button>
              </div>
          )}
        </div>
    </div>
  );
}

export default Blog;

