import React from 'react'

export default function Rating({ children, setRating, val, rating }) {
    const selected = rating === val ? "rating-selected" : ""

    return (
        <div 
            className={`rating-el ${selected}`} 
            onClick={() => {
                setRating(val)
            }}> 
            {children}
        </div>
    )
}