import React from 'react'

export default function Rating({ children, setRating, value }) {


    return (
        <div className="rating-el" onClick={() => setRating(value)}> 
            {children}
        </div>
    )
}