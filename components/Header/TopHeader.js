import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";


export const TopHeader = () => {
  const [articles, setArticles] = useState([]);
  
      useEffect(() => {
        getArticles();
      }, []);

      const getArticles = async () => {
        const response = await fetch(`https://dev.to/api/articles?username=copilotkit`)
        const data = await response.json()
        setArticles(data);
      }

    

  return (
    <div className="container mx-auto px-8 py-[60px]  dark:text-[#D1D5DB] dark:bg-[#111827]">
        <div className="carousel w-full">
            {articles.map((item, index) => (
                <div key={item.id} id={`slide${index}`} className="carousel-item relative w-full ml-5">
                    <Image alt="top" src={item.social_image} width={1216} height={600} className="w-full rounded-xl dark:border-2" />
                    <div className="absolute md:z-10 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link href={`#slide${index - 1}`} className="btn btn-circle">❮</Link>
                        <Link href={`#slide${index + 1}`} className="btn btn-circle">❯</Link>
                    </div>
                    <div className="hidden md:block absolute bg-slate-100/60 rounded-lg text-black bottom-3 left-3 md:p-6 ">
                        <div className="badge badge-primary text-sm font-medium p-4 rounded-lg">{item.tag_list[0]}</div>
                        <div className="pt-4 pb-6 text-4xl font-semibold">{item.title}</div>
                        <div className="font-normal text-base">{dayjs(item.published_at).format("YYYY/ MM/ d")}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
       