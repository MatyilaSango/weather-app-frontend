import React, { MouseEvent } from 'react'
import "./SearchOption.css"

interface IsearchOption {
  location: String,
  handleSetSearch: (parameter: String) => void,
  setIsNewLocationTime: (parameter: boolean) => void
}

export default function SearchOption({location, handleSetSearch, setIsNewLocationTime}: IsearchOption) {

  const handleOptionClick = (e: MouseEvent<HTMLParagraphElement>): void => {
    handleSetSearch(String(e.currentTarget.lastChild?.nodeValue))
    setIsNewLocationTime(true)
  }

  return (
    <div className='search-option-wrapper'>
        <p onClick={handleOptionClick}>{location}</p>
    </div>
  )
}
