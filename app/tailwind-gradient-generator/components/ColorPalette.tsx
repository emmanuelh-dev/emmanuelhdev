import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useState, useEffect } from 'react'
import { BiCheck } from 'react-icons/bi'

interface ColorSelectorProps {
  from: string
  to: string
  via: string
  viaActive: boolean
  setFromColor: (color: string) => void
  updateViaColor: (color: string) => void
  updateToColor: (color: string) => void
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  from,
  to,
  via,
  viaActive,
  setFromColor,
  updateViaColor,
  updateToColor,
}) => {
  const [select, setSelect] = useState('from')
  const [isChange, setIsChange] = useState(false)
  const colors = [
    'slate',
    'neutral',
    'zinc',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ]
  const values = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']

  useEffect(() => {
    setIsChange(true)

    setTimeout(() => setIsChange(false), 500)
  }, [select])

  const selectedColor = (color: string) => {
    if (select === 'from' && from === color) {
      return true
    }

    if (select === 'via' && via === color && viaActive) {
      return true
    }

    if (select === 'to' && to === color) {
      return true
    }

    return false
  }

  const handleUpdateColor = (color: string) => {
    if (select === 'from') {
      setFromColor(color)
    }

    if (select === 'via') {
      updateViaColor(color)
    }

    if (select === 'to') {
      updateToColor(color)
    }
  }

  return (
    <div>
      <div className="flex items-center space-x-8">
        <button
          disabled={isChange}
          onClick={() => setSelect('from')}
          className={
            select === 'from'
              ? 'font-thin text-neutral-800 dark:text-neutral-400'
              : 'font-semibold text-neutral-400 hover:text-neutral-600 focus:outline-none'
          }
        >
          From Color
        </button>

        {viaActive && (
          <button
            disabled={isChange}
            onClick={() => setSelect('via')}
            className={
              select === 'via'
                ? 'font-thin text-neutral-800 dark:text-neutral-400'
                : 'font-semibold text-neutral-400 transition-colors duration-300 hover:text-neutral-600 focus:outline-none'
            }
          >
            Via Color
          </button>
        )}

        <button
          disabled={isChange}
          onClick={() => setSelect('to')}
          className={
            select === 'to'
              ? 'font-thin text-neutral-800 dark:text-neutral-400'
              : 'font-semibold text-neutral-400 transition-colors duration-300 hover:text-neutral-600 focus:outline-none'
          }
        >
          To Color
        </button>
      </div>

      <Card
        id="colors"
        className="relative mt-4 h-64 w-full flex-1 space-y-6 overflow-y-auto rounded-lg border px-6 py-4"
      >
        {colors.map((color, index) => (
          <div key={index}>
            <p className="mb-2 capitalize text-neutral-600" key={index}>
              {color}
            </p>

            <div className="grid grid-cols-4 gap-6 sm:grid-cols-7 md:grid-cols-10 md:gap-4 lg:grid-cols-6 xl:grid-cols-10 2xl:gap-6">
              {values.map((number, index) => (
                <div key={index}>
                  <div>
                    <button
                      className={`h-10 w-full rounded-lg focus:outline-none sm:h-12 md:h-10 2xl:h-12 bg-${color}-${number}`}
                      onClick={() => handleUpdateColor(select + '-' + color + '-' + number)}
                    >
                      {selectedColor(select + '-' + color + '-' + number) && (
                        <BiCheck className="absolute right-2 top-2 h-5 w-5 text-white" />
                      )}
                    </button>

                    <p
                      className={`mt-1 text-center text-sm ${
                        selectedColor(select + '-' + color + '-' + number)
                          ? 'font-bold text-[#0FD3CF]'
                          : 'font-medium text-neutral-500'
                      }`}
                      key={index}
                    >
                      {number}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </div>
  )
}

export default ColorSelector
