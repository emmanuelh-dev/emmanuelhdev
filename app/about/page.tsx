import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { experience, ExperienceCard } from 'app/experience/page'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <div className="text-md mx-auto">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
        <p>
          Hi there! I'm a software developer, which means I create cool apps and websites. I've
          worked with lots of different tools like Laravel, Vue, React, and Astro. I also set up
          these VPS apps like AWS, digitalocean. In my free time, I love writing fun and easy
          tutorials on my blog. These tutorials help people learn how to make their own apps and
          websites.
        </p>
      </div>
      <section className="ml-4 lg:flex">
        <ol className="relative flex-1 border-l">
          {experience.map((company) => (
            <ExperienceCard
              key={company.title}
              title={company.title}
              description={company.description}
              job={company.job}
              link={company.link}
              date={company.date}
              skills={company.skills}
            />
          ))}
        </ol>
      </section>
    </div>
  )
}
