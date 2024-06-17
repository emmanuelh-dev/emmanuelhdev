import React from 'react'
import GradientCard from './GradientCard'

interface Gradient {
  title: string
  classTitle: string
  style: string
}

interface Props {
  gradients: Gradient[]
}

const GradientsExamples: React.FC<Props> = ({ gradients }) => {
  return (
    <div className="  container mx-auto px-4">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {gradients.map((gradient, index) => (
          <GradientCard
            key={index}
            title={gradient.title}
            classTitle={gradient.classTitle}
            style={gradient.style}
          />
        ))}
      </div>
    </div>
  )
}

export default GradientsExamples
