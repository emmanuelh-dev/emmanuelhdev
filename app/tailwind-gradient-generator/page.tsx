'use client'
import Link from 'next/link'
import GradientGenerator from './components/Generator'
import GradientsExamples from './components/GradientsExamples'
const GRADIENTS = [
  {
    title: 'Sunset',
    classTitle: 'red-500 - orange-500',
    style: 'bg-gradient-to-r from-red-500 to-orange-500',
  },
  {
    title: 'Simple White ',
    classTitle: 'blue-500',
    style: 'bg-gradient-to-r from-slate-800 null to-slate-50',
  },
  {
    title: 'Poppy',
    classTitle: 'rose-400 - red-500',
    style: 'bg-gradient-to-r from-rose-400 to-red-500',
  },

  {
    title: 'Rosebud',
    classTitle: 'pink-500 - rose-500',
    style: 'bg-gradient-to-r from-pink-500 to-rose-500',
  },

  {
    title: 'Sunshine',
    classTitle: 'amber-200 - yellow-400',
    style: 'bg-gradient-to-r from-amber-200 to-yellow-400',
  },

  {
    title: 'Gold',
    classTitle: 'amber-200 - yellow-500',
    style: 'bg-gradient-to-r from-amber-200 to-yellow-500',
  },

  {
    title: 'Twilight',
    classTitle: 'amber-500 - pink-500',
    style: 'bg-gradient-to-r from-amber-500 to-pink-500',
  },

  {
    title: 'Powder',
    classTitle: 'violet-200 - pink-200',
    style: 'bg-gradient-to-r from-violet-200 to-pink-200',
  },

  {
    title: 'Holly',
    classTitle: 'blue-200 - cyan-200',
    style: 'bg-gradient-to-r from-blue-200 to-cyan-200',
  },

  {
    title: 'Northern Lights',
    classTitle: 'teal-200 - teal-500',
    style: 'bg-gradient-to-r from-teal-200 to-teal-500',
  },

  {
    title: 'Raw Green',
    classTitle: 'lime-400 - lime-500',
    style: 'bg-gradient-to-r from-lime-400 to-lime-500',
  },

  {
    title: 'Lime',
    classTitle: 'teal-400 - yellow-200',
    style: 'bg-gradient-to-r from-teal-400 to-yellow-200',
  },

  {
    title: 'Nemesia',
    classTitle: 'emerald-400 - cyan-400',
    style: 'bg-gradient-to-r from-emerald-400 to-cyan-400',
  },

  {
    title: 'Snowflake',
    classTitle: 'indigo-400 - cyan-400',
    style: 'bg-gradient-to-r from-indigo-400 to-cyan-400',
  },

  {
    title: 'Blue Bird',
    classTitle: 'cyan-500 - blue-500',
    style: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  },

  {
    title: 'Blueprint',
    classTitle: 'indigo-500 - blue-500',
    style: 'bg-gradient-to-r from-indigo-500 to-blue-500',
  },

  {
    title: 'Salvia',
    classTitle: 'blue-600 - violet-600',
    style: 'bg-gradient-to-r from-blue-600 to-violet-600',
  },

  {
    title: 'Snowflake',
    classTitle: 'fuchsia-500 - cyan-500',
    style: 'bg-gradient-to-r from-fuchsia-500 to-cyan-500',
  },

  {
    title: 'Heartsease',
    classTitle: 'fuchsia-600 - pink-600',
    style: 'bg-gradient-to-r from-fuchsia-600 to-pink-600',
  },

  {
    title: 'Amaranthus',
    classTitle: 'fuchsia-600 - purple-600',
    style: 'bg-gradient-to-r from-fuchsia-600 to-purple-600',
  },

  {
    title: 'Candy',
    classTitle: 'fuchsia-500 - pink-500',
    style: 'bg-gradient-to-r from-fuchsia-500 to-pink-500',
  },

  {
    title: 'Verbena',
    classTitle: 'violet-500 - purple 500',
    style: 'bg-gradient-to-r from-violet-500 to-purple-500',
  },

  {
    title: 'Clematis',
    classTitle: 'violet-600 - indigo-600',
    style: 'bg-gradient-to-r from-violet-600 to-indigo-600',
  },

  {
    title: 'Hibiscus',
    classTitle: 'purple-500 - purple-900',
    style: 'bg-gradient-to-r from-purple-500 to-purple-900',
  },

  {
    title: 'Clear Night',
    classTitle: 'blue-800 - indigo-900',
    style: 'bg-gradient-to-r from-blue-800 to-indigo-900',
  },

  {
    title: 'Clay',
    classTitle: 'neutral-300 - stone-400',
    style: 'bg-gradient-to-r from-neutral-300 to-stone-400',
  },

  {
    title: 'Soil',
    classTitle: 'stone-500 - stone-700',
    style: 'bg-gradient-to-r from-stone-500 to-stone-700',
  },

  {
    title: 'Silver',
    classTitle: 'slate-300 - slate-500',
    style: 'bg-gradient-to-r from-slate-300 to-slate-500',
  },

  {
    title: 'Fir Tree',
    classTitle: 'emerald-500 - emerald-900',
    style: 'bg-gradient-to-r from-emerald-500 to-emerald-900',
  },

  {
    title: 'Metal',
    classTitle: 'slate-500 - slate-800',
    style: 'bg-gradient-to-r from-slate-500 to-slate-800',
  },

  {
    title: 'Darkness',
    classTitle: 'slate-900 - slate-700',
    style: 'bg-gradient-to-r from-slate-900 to-slate-700',
  },
]

const gradientGenerator = () => {
  return (
    <mian>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Create Stunning Gradients with Tailwind Gradient Generator
                </h1>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Effortlessly generate beautiful, customizable gradients for your web projects
                  using our powerful Tailwind CSS-based tool.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#tool"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:from-indigo-600 hover:to-pink-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Try It Now
                </Link>
              </div>
            </div>
            <div className="null mx-auto aspect-video h-full w-[600px] overflow-hidden rounded-xl bg-gradient-to-r from-red-700 to-rose-500 object-cover max-md:h-[400px] sm:w-full" />
          </div>
        </div>
      </section>
      <GradientGenerator />
      <div className=" pt-40  text-center ">
        <h2 className="text-4xl font-semibold dark:text-white lg:text-6xl">
          Gradients Ready To Be Used
        </h2>
        <p className="dark:text-white">
          Choose from our ready-made Tailwind CSS gradients to create beautiful things.
        </p>
      </div>
      <GradientsExamples gradients={GRADIENTS} />
    </mian>
  )
}

export default gradientGenerator
