import Link from 'next/link'
import React from 'react'
import { DiNodejs, DiPython, DiPhp, DiLaravel, DiHtml5, DiCss3, DiJsBadge } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'

interface ExperienceProps {
  title: string
  description?: string | null | undefined
  job: string
  link: string
  date: string
  skills: string[]
}

const experience: ExperienceProps[] = [
  {
    title: 'Gonzher Logistic and transport',
    description:
      'Handling deployment responsibilities for two applications, one in Laravel and the other in Java, including the implementation of new features and troubleshooting issues. As the in-house programmer, I am actively involved in enhancing functionalities and addressing any challenges that may arise.',
    link: 'https://www.gonzher.com/',
    job: 'Full Stack Developer',
    date: 'Oct 2023 - Present',
    skills: ['NodeJS', 'JavaScript', 'Git', 'Php', 'Laravel', 'UX'],
  },
  {
    title: 'ConnectIT',
    description:
      'Contributed to the development team at ConnectIT from May 2023 to September 2023. Utilized Node.js, JavaScript, Vue.js, Vuetify, and Git to create robust applications. Specialized in UX design and employed FastAPI with Python for efficient backend solutions. Collaborated with the team to implement features, enhance user experiences, and ensure smooth development workflows.',
    job: 'Developer',
    link: 'https://www.connectit.com.mx/',
    date: 'May 2023 - Sep 2023',
    skills: ['Nodejs', 'JavaScript', 'Vue', 'Vuetify', 'Git', 'UX', 'FastAPI', 'Python'],
  },
  {
    title: 'BysMax',
    description:
      'Served as a FrontEnd Developer at BysMax from January 2021 to June 2023. Leveraged React, JavaScript, Next.js, Node.js, and TailwindCSS to build responsive and dynamic user interfaces. Actively involved in the development of cutting-edge web applications, focusing on frontend technologies. Contributed to a collaborative environment, implementing best practices in frontend development and ensuring optimal user interactions.',
    job: 'FrontEnd Developer',
    link: 'https://www.bysmax.com/',
    date: 'Jan 2021 - June 2023',
    skills: ['React', 'JavaScript', 'NextJS', 'Nodejs', 'TailwindCSS'],
  },
]

const Experience = () => {
  return (
    <div className="mx-auto max-w-2xl py-28 lg:py-72">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Experience and skills
        </h1>
      </div>
      <section className="ml-4 lg:flex">
        <ol className="relative flex-1 border-l">
          {experience.map((company) => (
            <div className="flex" key={company.title}>
              <li className="mb-10 ml-4 flex-1">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border bg-white"></div>
                <time className="mb-1 font-normal leading-none opacity-50">{company.date}</time>
                <a
                  href={company.link}
                  className="block text-lg font-bold"
                  target="_blank"
                >{`${company.job} - ${company.title}`}</a>
                <p className="text-neutral-400">{company.description}</p>
                <ul className="mb-4 font-normal opacity-75">
                  {company.skills.map((skill) => (
                    <div className="flex justify-between" key={skill}>
                      <li className=" ml-4 list-disc text-sm">{skill}</li>
                    </div>
                  ))}
                </ul>
              </li>
            </div>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default Experience
