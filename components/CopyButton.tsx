import React, { useState } from 'react'
import { RiFileCopyLine, RiFileCopyFill } from 'react-icons/ri'
interface Props {
  textToCopy: string
  info?: string
  className: string
}
const CopyButton = ({ textToCopy, info, className }: Props) => {
  const [copied, setCopied] = useState(false)
  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <button onClick={handleCopyClick} className={`${className}`}>
      {copied ? <RiFileCopyFill /> : <RiFileCopyLine />}
      <span>{info}</span>
    </button>
  )
}

export default CopyButton
