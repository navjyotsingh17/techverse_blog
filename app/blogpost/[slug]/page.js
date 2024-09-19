import fs from "fs"
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from "@/components/OnThisPage";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from "rehype-slug";

export default async function Page({ params }) {

    const filePath = `content/${params.slug}.md`

    if (!fs.existsSync(filePath)) {
        notFound()
        return
    }

    const fileData = fs.readFileSync(filePath, "utf-8")

    const { data, content } = matter(fileData)

    const proccessor = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeSlug)
        // .use(rehypeAutolinkHeadings)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })
        


    const htmlContent = (await proccessor.process(content)).toString()

    // console.log(data, content)

    // const blog = 
    //     {
    //     image: 'https://images.pexels.com/photos/17809424/pexels-photo-17809424/free-photo-of-stars-in-space.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //     title: 'Exploring the Wonders of the Universe',
    //     description: 'Join us as we delve into the mysteries of the cosmos and uncover the secrets of the stars.',
    //     author: 'Dr. Jane Smith',
    //     date: '2023-10-01',
    //     slug: 'exploring-the-wonders-of-the-universe'
    // }

    return (
        <div className="mx-auto min-h-screen max-w-5xl p-4 text-black">
            <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
            <p className="text-sm leading-relaxed mb-4">&quot;{data.description}&quot;</p>
            <div className="flex items-center mb-4 gap-4 italic">
                <span className="text-lg text-gray-500">By {data.author}</span>
                <span className="text-lg text-gray-500">{data.date}</span>
            </div>
            <div className="text-lg">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                <OnThisPage htmlContent={htmlContent} />
            </div>
        </div>
    );
}