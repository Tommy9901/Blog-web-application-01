import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

export const Trending = () => {
    const [articles, setArticles] = useState([]);
  
      useEffect(() => {
          fetch(`https://dev.to/api/articles?`)
            .then((responce) => {
              return responce.json();
            })
            .then((data) => {
              setArticles(data);
            });
      }, []);

    return(
        <div className="container mx-auto px-7 py-[100px] dark:text-[#D1D5DB]">
            <div className="font-semibold text-2xl mb-[30px]">Trending</div>
            <div className="carousel w-full rounded gap-5 ">
                {articles.map((item) => (
                    <div className="carousel-item overflow-hidden w-full lg:w-[274px] md:w-[300px] h-[320px]">
                            <Image src={item.social_image} width={274} height={320} className="rounded-lg shadow-lg w-full border-[1px]" />
                        <div></div>
                    </div>
                ))}

            </div>
        </div>
    );
}