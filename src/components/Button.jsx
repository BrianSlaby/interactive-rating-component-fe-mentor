import React from 'react'

export default function Button({ children, className, handleClick }) {
    return (
        <>
            <button 
                className={className}
                onClick={handleClick}
            > 
                {children}
            </button>
        </>
    )
}