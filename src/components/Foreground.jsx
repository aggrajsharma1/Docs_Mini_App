import React, { useRef } from 'react'
import Card from './Card.jsx'

function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis neque aperiam explicabo ab blanditiis.",
            fileSize: "0.9mb",
            close: true,
            footerTag: {
                isOpen: true,
                footerColor: "bg-green-500",
                footerTitle: "Not Available"
            }
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis neque aperiam explicabo ab blanditiis.",
            fileSize: "2.4mb",
            close: false,
            footerTag: {
                isOpen: true,
                footerColor: "bg-blue-400",
                footerTitle: "Download Now"
            }
        },
        {
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quis neque aperiam explicabo ab blanditiis.",
            fileSize: "1.6mb",
            close: true,
            footerTag: {
                isOpen: true,
                footerColor: "bg-red-300",
                footerTitle: "Will be available shortly"
            }
        }
    ]

    return (
        <div ref={ref} className='fixed h-full w-full py-4 px-6 z-20 flex flex-wrap gap-6'>
            {data.map((cardDetails, index) =>
                <Card cardData={cardDetails} reference={ref} />
            )}
        </div>
    )
}

export default Foreground