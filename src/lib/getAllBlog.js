import glob from 'fast-glob'
import * as path from 'path'

async function importBlog(blogFilename) {
  let { meta, default: component } = await import(
    `../pages/blog/${blogFilename}`
  )
  return {
    slug: blogFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllBlog() {
  let blogFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/blog'), ignore: ['*.txt']
  })

  let blogs = await Promise.all(blogFilenames.map(importBlog))

  return blogs.sort((a, z) => new Date(z.date) - new Date(a.date))
}
