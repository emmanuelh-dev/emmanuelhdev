interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'TAILVERSE',
    description: `Get started with a large variety of Tailwind CSS templates, tailwind translator and css to tailwind`,
    imgSrc: '/static/images/team.svg',
    href: 'https://tailverse.tech',
  },
  {
    title: 'BYSMAX',
    description: `Have a project in mind?
      We d love to talk about how we can help you.`,
    imgSrc: '/static/images/creative.svg',
    href: 'https://bysmax.com',
  },
  {
    title: 'VETADMIN',
    description: `VetAdmin Pro is a veterinary patient management software crafted with HTML, CSS, and JavaScript. It employs IndexDB as a local database for storing patient information.`,
    imgSrc: '/static/images/vetadmin.png',
    href: 'https://vetadmin.emmanuelh.dev/',
  },
  {
    title: 'LA CAFETERIA | STARTER',
    description: `Discover our restaurant template crafted with Tailwind CSS and Gatsby. Browsing our menu is now a breeze, making the dining experience hassle-free and enjoyable.`,
    imgSrc: '/static/images/gallery.png',
    href: 'https://la-cafeteria-with-tailwindcss.vercel.app/',
  },
  {
    title: 'Drinks Browser',
    description: `Search and make coctels and drinks with ai and more.`,
    imgSrc: '/static/images/drink.jpg',
    href: 'https://drinksbrowser.vercel.app',
  },
]

export default projectsData
