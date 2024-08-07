import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // ES 2015
import "@/components/dayjs-mn"; // ES 2015

dayjs.extend(relativeTime);

export function ArticleCard({article}){
    return(
        <div key={article.id} className="shadow-lg card bg-base-100 border-[#E8E8EA] border-[1px] dark:text-[#D1D5DB] dark:bg-[#030712]">
            <div className="card-body border-gray-400 border-1 px-0 md:p-4  ">
                <div className="flex flex-wrap gap-2">{article.tag_list.map((tag) => (
                  <div className="badge primary">{tag}</div>
                ))}
                </div>

                <Image alt="blog" src={article.social_image} width={500} height={500} className="aspect-video object-cover bg-slate-500 rounded-sm "/>
                <Link href={article.path}>{article.title}</Link>
                <div className="flex articles-center justify-around">
                    <Image
                    alt="profile"
                    src={article.user.profile_image_90}
                    width={50}
                    height={50}
                    />
                    <div className="">{article.user.name}</div>
                    <div>{dayjs(article.published_at).locale("mn").fromNow()}</div>
                </div>
            </div>
        </div>
    );
}