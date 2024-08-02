import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015
import "@/components/dayjs-mn"; // ES 2015

dayjs.extend(relativeTime);

const pageSize = 6;

export function AllBlog() {
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
    <div className="container mx-auto dark:text-[#D1D5DB] dark:bg-[#111827] pb-16">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-8 bg-white dark:text-[#D1D5DB] dark:bg-[#111827]">
        {articles.map((item,) => (
          <div key={item.id} className="shadow-lg card bg-base-100 border-[#E8E8EA] border-[1px] dark:text-[#D1D5DB] dark:bg-[#030712]">
            <div className="card-body border-gray-400 border-1 px-0 md:p-4 ">
              <div className="badge badge-primary py-3 px-4 rounded-lg">{item.tag_list[0]}</div>
              <Image alt="img" src={item.social_image} width={600} height={500} className="aspect-video object-cover bg-slate-500 rounded-sm "/>
              <Link href={item.path}>{item.title}</Link>
              <div className="flex items-center justify-around">
                <Image
                  alt="profile"
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
          <button disabled={loading} className="btn btn-lg  ">
            {loading && <span className="loading loading-spinner"></span>}
            Load More
          </button>
        </div>
      )}
    </div>
  );
}