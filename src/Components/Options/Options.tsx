import React, { MouseEvent } from 'react'
import "./Options.css"

export default function Options({ setDailyOption }: React.Dispatch<React.SetStateAction<Number>> | any) {

    let arrayKeys: number[] = Array.from({length: 12}, (_,i) => i+1)

    const handleOptionChange = (e: MouseEvent<HTMLSpanElement>): void => {
        setDailyOption(String(e.currentTarget.lastChild?.nodeValue))
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
