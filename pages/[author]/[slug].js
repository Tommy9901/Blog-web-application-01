import { useEffect, useState } from "react";
import parse from 'html-react-parser';

import { useRouter } from 'next/router'
import { Nav } from "@/components/Header/Nav";
import { Footer } from "@/components/Footer/Footer";

export default function Page(){
    <Nav />
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(false);

    const router = useRouter()
    console.log(router.query)

    const {author, slug} = router.query;

  useEffect(() => {
    if(router.isReady){
        getArticle();
    }
  }, [router.isReady]);

  function getArticle() {
    setLoading(true);

    fetch(
      `https://dev.to/api/articles/${author}/${slug}`
    )
      .then((responce) => {
        return responce.json();
      })
      .then((detail) => {
       setArticle(detail);
        setLoading(false);
      });
    }

    if(!article) return <div>Loading</div>;

    return(
      
        <div className="container mx-auto bg-white dark:text-[#D1D5DB] dark:bg-[#030712]">
          <Nav />
            <div className="mt-[100px] mb-20">
              <div className="prose mx-auto">{article.title}</div>
              <div className="prose mx-auto">{parse(article.body_html)}</div>
            </div>
            <Footer />
        </div>
    );
}