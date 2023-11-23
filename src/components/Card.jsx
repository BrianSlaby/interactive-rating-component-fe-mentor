import React from 'react'


export default function Card({ children, className }) {
    return (
        <div className={`card-el ${className}`}>
            {children}
        </div>
    )
}

