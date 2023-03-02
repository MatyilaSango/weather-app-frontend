import React, { MouseEvent } from 'react'
import "./Options.css"

interface IhandleSetDailyOption {
    handleSetDailyOption: (parameter: String) => void
}

export default function Options({ handleSetDailyOption }:  IhandleSetDailyOption){

    let arrayKeys: number[] = Array.from({length: 12}, (_,i) => i+1)

    const handleOptionChange = (e: MouseEvent<HTMLSpanElement>): void => {
        handleSetDailyOption(String(e.currentTarget.lastChild?.nodeValue))
    }

    return (
    <div className='Options-wrapper'>
        {arrayKeys.map(key_ => (
            <span key={key_} onClick={handleOptionChange}>
                {key_}
            </span>
        ))}
    </div>
    )
}
