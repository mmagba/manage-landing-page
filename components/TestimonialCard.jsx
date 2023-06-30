import React from 'react'
import Image from 'next/image'

const TestimonialCard = (props) => {

    let current = props.currentIndex;

    while (current < 0) {
        current = current + props.array.length;
    }


    if (props.currentIndex >= props.array.length) {
        current = props.currentIndex % props.array.length;
    }

    return (
        <div
            className="flex flex-none flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
        >

            <Image src={props.array[current].image} width={80} height={80} alt="" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">{props.array[current].name}</h5>
            <p className="text-sm text-darkGrayishBlue">
                “{props.array[current].testimonial}”
            </p>
        </div>
    )
}

export default TestimonialCard