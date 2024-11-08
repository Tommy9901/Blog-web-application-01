import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";

const tags = [
  {value: "all", name: "Бүгд"},
  {value: "beginners", name: "Анхан шат"},
  {value: "frontend", name: "Front-end"},
  {value: "javascript", name: "JavaScript"},
  {value: "webdev", name: "Web Dev"},
];


const pageSize = 9;

export function AllBlog() {
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const [length, allLength] = useState();

  const [selectedCategory, setSelectedCategory] = useState("")

  async function loadFirstArticles() {
    setLoading(true);

    const responce = await fetch(`https://dev.to/api/articles?username=copilotkit&tag=${selectedCategory}&per_page=${pageSize}`)
    const tagArticles = await responce.json();
    setArticles(tagArticles);
    setPage(1);
    
    setLoading(false);
  }

  async function loadNextArticles(){
    setLoading(true);

    const nextPage = page + 1;

    const responce = await fetch(`https://dev.to/api/articles?username=copilotkit&tag=${selectedCategory}&per_page=${pageSize}&page=${nextPage}`)
    const nextArticles = await responce.json();

    setArticles([...articles, ...nextArticles]);
    setPage(nextPage);
    // if(nextArticles.length < pageSize) {
    //   setEnded(true);
    // }

    setLoading(false);
  }

  useEffect(() => {
    loadFirstArticles();
  }, [selectedCategory]);

  return (
    <div className="container mx-auto dark:text-[#D1D5DB] dark:bg-[#111827] px-8 pb-10 pt-10">
      <div className="text-2xl font-bold text-[#181A2A] dark:text-[#D1D5DB]">All Blog Post</div>
      <div className="flex gap-4 py-8">
        {tags.map((tag) => (
          <div key={tag.value} className={`cursor-pointer font-bold hover:text-orange-400/40 ${selectedCategory === tag.value ? "text-green-600" : ""}`} onClick={() => setSelectedCategory(tag.value)}>
            {tag.name}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5  bg-white dark:text-[#D1D5DB] dark:bg-[#111827]">
        {articles.map((item,) => (
          <ArticleCard key={item.id} article={item}/>
        ))}
      </div>

      {!ended && (
        <div className="py-16 text-center">
          <button disabled={loading} className="btn btn-lg" onClick={loadNextArticles}>
            {loading && <span className="loading loading-spinner"></span>}
            Load More
          </button>
        </div>
      )}
    </div>
  );
}