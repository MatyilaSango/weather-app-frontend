import React, { MouseEvent } from 'react'
import "./SearchOption.css"

interface IsearchOption {
  location: String,
  handleSetSearch: (parameter: String) => void
}

export default function SearchOption({location, handleSetSearch}: IsearchOption) {

  const handleOptionClick = (e: MouseEvent<HTMLParagraphElement>): void => {
    handleSetSearch(String(e.currentTarget.lastChild?.nodeValue))
  }

  return (
    <div className='search-option-wrapper'>
        <p onClick={handleOptionClick}>{location}</p>
    </div>
  )
}
