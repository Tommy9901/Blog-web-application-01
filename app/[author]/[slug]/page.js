import parse from 'html-react-parser';

export async function generateMetadata ({ params }){
    const responce = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`);
    const article  = await responce.json();
    
    return {
        openGraph: {
            title: article.title,
            description: article.description,
            images: [{ url: article.social_image }],
        },
    };
}

export default async function Page( {params} ) {
  const responce = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`);
  const article  = await responce.json();

  return (
    <main>
      <div className="container mx-auto bg-white dark:text-[#D1D5DB] dark:bg-[#111827] py-10">
        <div className="">
          <div className="prose mx-auto dark:text-white">{article.title}</div>
          <div className="prose mx-auto dark:text-white">{parse(article.body_html)}</div>
        </div>
      </div>
    </main>
  );
}
