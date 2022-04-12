import { join } from 'path'
import { readdirSync } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import getParsedFileContentBySlug from '../../utils/getMdxContent';

export default function Article({ frontMatter, content }) {
    return (
        <div>
            <h1>Hello {frontMatter.title}</h1>
            <MDXRemote {...content}/>
        </div>
    )
}
const ARTICLE_PATH = join(process.cwd(), process.env.ARTICLE_MARKDOWN_PATH)

export async function getStaticPaths() {

    const paths = readdirSync(ARTICLE_PATH)
        .map(path => path.replace(/\.mdx?$/, ''))
        .map(slug => ({ params: {slug}}))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {

    const articleMarkdownContent = getParsedFileContentBySlug(slug, ARTICLE_PATH)
    const renderHtml = await serialize(articleMarkdownContent.content || '')
    return {
        props: {
            frontMatter: articleMarkdownContent.frontMatter,
            content: renderHtml
        }
    }
}