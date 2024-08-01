import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015
import "@/components/dayjs-mn"; // ES 2015
import { Nav } from "@/components/Header/Nav";
import { Footer } from "@/components/Footer/Footer";

dayjs.extend(relativeTime);

const pageSize = 12;

export function Blog() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    LoadMore();
  }, []);

  function LoadMore() {
    setLoading(true);

    fetch(
      `https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${pageSize}`
    )
      .then((responce) => {
        return responce.json();
      })
      .then((newArticles) => {
        const updatedArticles = articles.concat(newArticles);
        setArticles(updatedArticles);
        setPage(page + 1);
        if (newArticles.length < pageSize) {
          setEnded(true);
        }
        setLoading(false);
      });
    }

  return (
    <div className="container mx-auto bg-white">
      <Nav />
      <div className="font-bold text-2xl px-8 mb-8">All Blog Post</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-8 bg-white mb-[100px]">
        {articles.map((item,) => (
          <div key={item.id} className="shadow-lg card bg-base-100 border-[#E8E8EA] border-[1px]">
            <div className="card-body border-gray-400 border-1 px-0 md:p-4 ">
              <div className="badge badge-primary">{item.tag_list[0]}</div>
              <Image src={item.social_image} width={500} height={500} className="aspect-video object-cover bg-slate-500 rounded-sm "/>
              <Link href={item.path}>{item.title}</Link>
              <div className="flex items-center justify-around">
                <Image
                  src={item.user.profile_image_90}
                  width={50}
                  height={50}
                />
                <div className="">{item.user.name}</div>
                <div>{dayjs(item.published_at).locale("mn").fromNow()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!ended && (
        <div className="py-16 text-center" onClick={LoadMore}>
          <button disabled={loading} class="btn btn-lg btn-accent ">
            {loading && <span className="loading loading-spinner"></span>}
            Load More
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Blog;

