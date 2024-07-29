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
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {articles.map((item) => (
          <div key={item.id} className="shadow-lg card bg-base-100">
            <div className="card-body">
              <div className="badge badge-primary">{item.tag_list[0]}</div>
              <Image src={item.social_image} width={500} height={500} className="aspect-video object-cover bg-slate-500"/>
              <Link href={item.url} target="_blank">
                {item.title}
              </Link>
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
          <button disabled={loading} className="btn btn-lg btn-accent">
            {loading && <span className="loading loading-spinner"></span>}
            Load More
          </button>
        </div>
      )}
    </div>
  );
}