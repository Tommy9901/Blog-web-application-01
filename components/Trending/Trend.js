import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

export const Trending = () => {
    const [trending, setArticles] = useState([]);
  
      useEffect(() => {
          fetch(`https://dev.to/api/articles?username=paul_freeman`)
            .then((responce) => {
              return responce.json();
            })
            .then((data) => {
              setArticles(data);
            });
      }, []);

    return(
        <div className="container mx-auto px-8 py-[100px]">
            <div>Trending</div>
            <div className="flex gap-4 overflow-scroll">
                {trending.map((item) => (
                    <div className="flex overflow-scroll">
                        <Image src={item.social_image} width={300} height={500} className="rounded-lg" />
                    </div>
                ))}

            </div>
        </div>
    );
}