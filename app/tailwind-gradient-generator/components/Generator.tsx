import React, { useEffect, useState } from 'react'
import ColorPalette from './ColorPalette'
import { Select } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import CopyButton from '@/components/CopyButton'

const GradientGenerator = () => {
  const [fromColor, setFromColor] = useState('from-pink-500')
  const [via, updateViaColor] = useState('Inactive')
  const [viaValue, updateViaValue] = useState(false)
  const [toColor, updateToColor] = useState('to-rose-500')
  const [gradientTitle, setGradientTitle] = useState('To Right')
  const [gradientValue, setGradientValue] = useState('bg-gradient-to-r')
  const [viaColor, setViaColor] = useState('via-rose-500')
  const [Class, setClass] = useState('')
  const [ClassClip, setClassClip] = useState('')

  useEffect(() => {
    setClass(`${gradientValue} ${fromColor} ${viaValue ? viaColor : null} ${toColor}`)
    setClassClip(
      `bg-clip-text text-transparent ${gradientValue} ${fromColor} ${
        viaValue ? viaColor : null
      } ${toColor}`
    )
  }, [fromColor, toColor, via, gradientValue, viaValue, viaColor])

  return (
    <section id="tool" className="px-4 pt-14">
      <div className="flex gap-10">
        <div className="flex w-full justify-center gap-10 max-sm:flex-wrap">
          <div className=" mt-10 lg:w-2/5">
            <div className={` h-72 w-full rounded-lg ${Class}`}></div>
            <div className="flex h-72 items-center justify-center text-5xl font-extrabold ">
              <span className={`${ClassClip}`}>Hello world!!</span>
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <ColorPalette
              from={fromColor}
              to={toColor}
              via={via}
              viaActive={viaValue}
              setFromColor={setFromColor}
              updateViaColor={setViaColor}
              updateToColor={updateToColor}
            />
            <div className="flex gap-4">
              <Select
                options={[
                  { title: 'Inactive', value: false },
                  { title: 'Active', value: true },
                ]}
                value={viaValue}
                title={via}
                setTitle={updateViaColor}
                setValue={updateViaValue}
              />
              <Select
                options={[
                  { title: 'To Top', value: 'bg-gradient-to-t' },
                  { title: 'To Top Right', value: 'bg-gradient-to-tr' },
                  { title: 'To Right', value: 'bg-gradient-to-r' },
                  { title: 'To Bottom Right', value: 'bg-gradient-to-br' },
                  { title: 'To Bottom', value: 'bg-gradient-to-b' },
                  { title: 'To Bottom Left', value: 'bg-gradient-to-bl' },
                  { title: 'To Left', value: 'bg-gradient-to-l' },
                  { title: 'To Top Left', value: 'bg-gradient-to-tl' },
                ]}
                value={viaValue}
                title={gradientTitle}
                setTitle={setGradientTitle}
                setValue={setGradientValue}
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Input value={Class} disabled />
              <CopyButton
                textToCopy={Class}
                className={
                  'transition-color text- flex max-w-[10rem] items-center justify-center space-x-3 rounded-md bg-neutral-950 px-4 py-2.5 font-semibold text-white duration-300 focus:outline-none dark:bg-white dark:text-black sm:mt-0 lg:mt-4 lg:w-full xl:mt-0 xl:w-auto'
                }
              />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Input value={ClassClip} disabled />
              <CopyButton
                textToCopy={ClassClip}
                className={
                  'transition-color text- flex max-w-[10rem] items-center justify-center space-x-3 rounded-md bg-neutral-950 px-4 py-2.5 font-semibold text-white duration-300 focus:outline-none dark:bg-white dark:text-black sm:mt-0 lg:mt-4 lg:w-full xl:mt-0 xl:w-auto'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GradientGenerator
