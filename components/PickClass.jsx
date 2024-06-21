"use client";

import { useState} from "react";
import classes from "@/classes";

export default function PickClass(){
    
    const [slidesIndex, setslidesIndex] = useState(0);

    function increaseHandler() {

        setslidesIndex(slidesIndex + 1);
    }

    function decreaseHandler() {

        setslidesIndex(slidesIndex - 1);
    }

    const shownSlides = [
        classes[slidesIndex % classes.length], 
        classes[(slidesIndex + 1) % classes.length], 
        classes[(slidesIndex + 2) % classes.length], 
    ]

    console.log(slidesIndex)
    return (
        <>
        <section id="pick" className="max-w-7xl mx-auto px-8 py-5 items-center justify-between font-brico mt-12 mb-24">
            <h2 className="text-white text-xl font-bold mb-16 text-center">Pick Your Class And Start Studying</h2>
            <div className="flex gap-8 justify-center mt-12 relative items-center">
                <button className="rounded-xl bg-white w-6 h-6" onClick={decreaseHandler}>&lt;</button>
                {shownSlides.map(slide => (
                    <div key={slide.name} className=" px-1  bg-amber-300 w-72 h-96 rounded-md relative justify-center flex flex-col">
                        <a href="" className="">
                            <img src={slide.image} alt={slide.alt} className=" w-72 h-96 "/>
                            <h2 className="text-white mt-2 w-72 absolute bottom-0 font-bold text-xl">{slide.name}</h2>
                        </a>
                    </div>
                ))}
                <button onClick={increaseHandler} className= "rounded-xl bg-white w-6 h-6">&gt;</button>
            </div>
        </section>
        </>
    )
}
