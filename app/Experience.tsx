import React from 'react'
import { DiNodejs, DiPython, DiPhp, DiLaravel, DiHtml5, DiCss3, DiJsBadge } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'

interface ExperienceProps {
  title: string
  job: string
  date: string
  skills: string[]
}

const experience: ExperienceProps[] = [
  {
    title: 'Gonzher Logistic and transport',
    job: 'Full Stack Developer',
    date: 'Oct 2023 - Present',
    skills: ['NodeJS', 'JavaScript', 'Git', 'Php', 'Laravel', 'UX'],
  },
  {
    title: 'ConnectIT',
    job: 'Developer',
    date: 'May 2023 - Sep 2023',
    skills: ['Nodejs', 'JavaScript', 'Vue', 'Vuetify', 'Git', 'UX', 'FastAPI', 'Python'],
  },
  {
    title: 'BysMax',
    job: 'FrontEnd Developer',
    date: 'Jan 2021 - June 2023',
    skills: ['React', 'JavaScript', 'NextJS', 'Nodejs', 'TailwindCSS'],
  },
]

const Experience = () => {
  return (
    <div className="py-72">
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
                <h3 className="text-lg font-bold">{`${company.job} - ${company.title}`}</h3>
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
