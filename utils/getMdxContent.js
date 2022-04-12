import { join } from 'path'
import { readFileSync } from 'fs';
import matter from 'gray-matter';

export default function getParsedFileContentBySlug(fileName, postsPath) {

    const postFilePath = join(postsPath, `${fileName}.mdx`)
    const fileContent = readFileSync(postFilePath)

    const {data, content} = matter(fileContent)
    
    return {
        frontMatter: data,
        content
    }
}
