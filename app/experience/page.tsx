import Link from 'next/link'
import React from 'react'
import { DiNodejs, DiPython, DiPhp, DiLaravel, DiHtml5, DiCss3, DiJsBadge } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'

interface ExperienceProps {
  title: string
  description?: string[] | null | undefined
  job: string
  link: string
  date: string
  skills: string[]
}

export const experience: ExperienceProps[] = [
  {
    title: 'Gonzher Logistic and transport',
    description: [
      'Maintained and managed warehouse systems.',
      'Developed sales and transport modules.',
      'Integrated Google Maps API for enhanced delivery tracking.',
      'Utilized FastAPI for backend development.',
      'Employed Vue and Vuetify for frontend development.',
    ],
    link: 'https://www.gonzher.com/',
    job: 'Full Stack Developer',
    date: 'Oct 2023 - Present',
    skills: ['NodeJS', 'JavaScript', 'Git', 'Php', 'Laravel', 'UX'],
  },
  {
    title: 'ConnectIT',
    description: [
      'Maintained and managed warehouse systems.',
      'Developed sales and transport modules.',
      'Integrated Google Maps API for enhanced delivery tracking.',
      'Utilized FastAPI for backend development.',
      'Employed Vue and Vuetify for frontend development.',
    ],
    job: 'Developer',
    link: 'https://www.connectit.com.mx/',
    date: 'May 2023 - Sep 2023',
    skills: ['Nodejs', 'JavaScript', 'Vue', 'Vuetify', 'Git', 'UX', 'FastAPI', 'Python'],
  },
  {
    title: 'BysMax',
    description: [
      'Developed and maintained the companys website and blog.',
      'Authored content and implemented SEO strategies to increase traffic from Google, Bing, and YouTube.',
      'Built the core blog using Next.js.',
      'Added serverless functions to enhance internal functionality.',
      'Integrated features such as Google AdSense and Markdown support.',
    ],
    job: 'FrontEnd Developer',
    link: 'https://www.bysmax.com/',
    date: 'Jan 2021 - June 2023',
    skills: ['React', 'JavaScript', 'NextJS', 'Nodejs', 'TailwindCSS'],
  },
]

export const ExperienceCard: React.FC<ExperienceProps> = ({
  title,
  description,
  job,
  link,
  date,
  skills,
}) => (
  <div className="flex">
    <li className="mb-10 ml-4 flex-1">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border bg-white"></div>
      <time className="mb-1 font-normal leading-none opacity-50">{date}</time>
      <a
        href={link}
        className="block text-lg font-bold"
        target="_blank"
        rel="noopener noreferrer"
      >{`${job} - ${title}`}</a>
      <ul className="text-neutral-400">
        {description?.map((item) => (
          <li className="ml-4 list-disc" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  </div>
)

const Experience = () => {
  return (
    <div className="text-md mx-auto max-w-xl">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience
        </h1>
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

export default Experience
