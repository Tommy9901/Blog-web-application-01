import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";


export const TopHeader = () => {
  const [articles, setArticles] = useState([]);
  
      useEffect(() => {
          fetch(`https://dev.to/api/articles?username=paul_freeman`)
            .then((responce) => {
              return responce.json();
            })
            .then((data) => {
              setArticles(data);
            });
      }, []);

    

  return (
    <div className="container mx-auto px-8 mb-[100px] mt-[100px]">
        <div className="carousel w-full mb-10">
            {articles.map((item, index) => (
                <div key={item.id} id={`slide${index}`} className="carousel-item relative w-full">
                    <Image src={item.social_image} width={1216} height={600} className="w-full rounded-xl" />
                    <div className="absolute md:z-10 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link href={`#slide${index - 1}`} className="btn btn-circle">❮</Link>
                        <Link href={`#slide${index + 1}`} className="btn btn-circle">❯</Link>
                    </div>
                    <div className="hidden md:block absolute bg-slate-100 rounded-lg text-black bottom-3 left-3 md:p-6 ">
                        <div className="badge badge-primary text-sm font-medium p-4 rounded-lg">{item.tag_list[0]}</div>
                        <div className="pt-4 pb-6 text-4xl font-semibold">{item.title}</div>
                        <div className="font-normal text-base text-[#97989F]">{dayjs(item.published_at).format("YYYY/ MM/ d")}</div>
                    </div>
                </div>
                    
            ))};
        </div>
    </div>
  );
}
       