// next.config.js
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})

module.exports = withMDX({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})

// import remarkFrontmatter from 'remark-frontmatter';

// export default {
//     webpack: (config, options) => {
//         config.module.rules.push({
//             test: /\.mdx?$/,
//             use: [
//                 options.defaultLoaders.babel,
//                 {
//                     loader: '@mdx-js/loader',
//                     options: {
//                         providerImportSource: '@mdx-js/react',
//                         remarkPlugins: [remarkFrontmatter],
//                     },
//                 },
//             ],
//         });

//         return config;
//     },
//     reactStrictMode: true,
//     pageExtensions: ['js', 'jsx', 'md', 'mdx'],
// };