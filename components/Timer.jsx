"use client";

import { useEffect, useRef, useState } from "react";

export default function Timer() {

    const [isPaused, setIsPaused] = useState(true);
    const [timeRemaining, setTimeRemaining] = useState(1500);

    const timer = useRef();

    function startTimer() {
        setIsPaused(false);
    }

    function stopTimer() {
        setIsPaused(true);
    }

    useEffect(() => {
        if (!isPaused) {
            timer.current = setInterval(() => {
                setTimeRemaining(prevTimeRemaining => {
                    if (prevTimeRemaining <= 1) {
                        clearInterval(timer.current);
                        setIsPaused(true);
                        return 0;
                    }
                    return prevTimeRemaining - 1;
                });
            }, 1000);
        } else {
            clearInterval(timer.current);
        }

        return () => clearInterval(timer.current);
    }, [isPaused]);

    const formattedMinutes = Math.floor(timeRemaining / 60);
    const formattedSeconds = String(timeRemaining % 60).padStart(2, '0');

    return (
        <section className="flex flex-col max-w-7xl font-brico mx-auto justify-center items-center">
            <h2 className="text-white font-extrabold text-3xl px-28 py-36 border-4 border-white rounded-full mt-16">
                {formattedMinutes} : {formattedSeconds}
            </h2>
            <div className="flex gap-8 mt-16">
                <button className="text-white text-lg px-4 py-2 bg-amber-300 rounded-md" onClick={startTimer}>Start</button>
                <button className="text-white text-lg px-4 py-2 bg-amber-300 rounded-md" onClick={stopTimer}>Stop</button>
            </div>
        </section>
    )
}
