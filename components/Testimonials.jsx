'use client';

import { ChevronLeft, ChevronRight } from "react-feather"
import TestimonialCard from "./TestimonialCard";
import { useState } from "react";

const Testimonials = () => {

    const [curr, setCurr] = useState(0);
    const [mobileCurr, setMobileCurr] = useState(0);

    const slidesArray = [
        {
            name: 'Anisha Li',
            image: '/avatar-anisha.png',
            testimonial: "Manage has supercharged our teams workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
        },
        {
            name: 'Ali Bravo',
            testimonial: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused",
            image: '/avatar-ali.png'
        },
        {
            name: 'Richard Watts',
            image: '/avatar-richard.png',
            testimonial: "Manage has supercharged our teams workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
        },
        {
            name: 'Shanai',
            testimonial: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused",
            image: '/avatar-shanai.png'
        }
    ];

    const showRight = () => {
        setCurr(prev => prev + 1);
    };

    const showLeft = () => {
        setCurr(prev => prev - 1);
    };

    const changeMobileSlide = (indexx) => {
        setMobileCurr(indexx);
    };

    return (
        <section>
            <div className="flex flex-col mx-auto overflow-x-hidden my-10">
                <div className="flex flex-row justify-around">
                    <button className="hidden md:inline" onClick={showLeft}><ChevronLeft size={40} /></button>
                    <h2 className="text-center text-darkBlue font-bold text-4xl mb-28">What they've said</h2>
                    <button className="hidden md:inline" onClick={showRight}><ChevronRight size={40} /></button>
                </div>

                {/*desktop slider*/}
                <div className="hidden md:flex flex-row gap-8 max-w-full  justify-center">

                    <TestimonialCard array={slidesArray} currentIndex={curr}></TestimonialCard>
                    <TestimonialCard array={slidesArray} currentIndex={curr + 1}></TestimonialCard>
                    <TestimonialCard array={slidesArray} currentIndex={curr + 2}></TestimonialCard>
                    <TestimonialCard array={slidesArray} currentIndex={curr + 3}></TestimonialCard>

                </div>

                {/*mobile slider*/}
                <div className="block md:hidden px-4">

                    <TestimonialCard array={slidesArray} currentIndex={mobileCurr}></TestimonialCard>

                    <div className="flex items-center justify-center gap-2 mt-6">
                        {slidesArray.map((_, i) => (
                            <div key={i} className={`
                                transition-all w-3 h-3 rounded-full border-brightRed border cursor-pointer
                                ${mobileCurr === i ? "bg-brightRed" : ""}
                                
                              `} onClick={() => changeMobileSlide(i)}></div>
                        ))}
                    </div>

                </div>


                <button className='bg-brightRed text-white rounded-full pb-3 px-6 pt-2 hover:bg-brightRedLight mx-auto my-12 drop-shadow-xl'>
                    Get Started
                </button>

            </div>
        </section>
    )
}

export default Testimonials