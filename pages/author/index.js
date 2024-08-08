import { useEffect, useState } from "react";
import parse from 'html-react-parser';

import { useRouter } from 'next/router'



export default function Page(){
  
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const {author, slug} = router.query;

  useEffect(() => {
    if(router.isReady){
        getArticle();
    }
  }, [router.isReady]);

  async function getArticle() {
    setLoading(true);

    const responce = await fetch(`https://dev.to/api/articles/${author}/${slug}`);
    const detail = await responce.json();
    setArticle(detail);

    setLoading(false);
  }

  if(!article) return <div>Loading</div>;

  return(
      
    <div className="container mx-auto bg-white dark:text-[#D1D5DB] dark:bg-[#111827] py-10">
      <div className="">
        <div className="prose mx-auto">{article.title}</div>
        <div className="prose mx-auto">{parse(article.body_html)}</div> 
      </div>
    </div>
  );
}