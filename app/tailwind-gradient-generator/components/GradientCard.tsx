import CopyButton from '@/components/CopyButton'
import React from 'react'
interface GradientCardProps {
  title: string
  classTitle: string
  style: string
}

const GradientCard: React.FC<GradientCardProps> = ({ title, classTitle, style }) => {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(style)
  }

  return (
    <div>
      <div className={`h-60 ${style} rounded-xl`}></div>
      <div className="flex justify-between pt-2 dark:text-white">
        <h2>{title}</h2>
        <div className="flex items-center">
          <CopyButton textToCopy={style} info={undefined} className="text-black dark:text-white" />
        </div>
      </div>
    </div>
  )
}

export default GradientCard
