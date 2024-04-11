import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { BsDownload } from 'react-icons/bs'
import Image from 'next/image'

const MAX_DISPLAY = 10

export default function Home({ posts }) {
  return (
    <>
      {/*
      This needs improvement. I'm not sure how to handle the image.
      Why be normal when you can be the best?
      <main className="">
        <div className="flex w-full items-center justify-center max-sm:flex-col-reverse">
          <div className="lg:w-3/5">
            <h1 className="text-4xl font-bold lg:text-6xl">{siteMetadata.description}</h1>
            <div className="flex items-center">
              <h3 className="my-8 text-xl">React | Laravel | TailwindCSS | Node | Type Script</h3>
              <a
                href="/Resume.pdf"
                download
                className="ml-4 rounded-lg bg-neutral-950 px-6 py-2 text-white dark:bg-neutral-100 dark:text-black"
              >
                <BsDownload />
              </a>
            </div>
          </div>
          <Image width={400} height={400} objectFit="cover" src={'/static/header.svg'} alt="" />
        </div>
      </main> */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className=" xl:col-span-3">
                      <div>
                        <div>
                          <h2 className="text-xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
                      </div>
                      <div className="font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
