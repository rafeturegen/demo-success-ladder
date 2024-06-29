"use client";

import classPathes from "@/classPathes";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";

export default function Pace({slug}) {

    const [userProgress, setUserProgress] = useState([]);
    const [classPath, setClassPath] = useState(null);

    function handleUserAnswers(userAnswer, step) {

        if (userProgress.length === step - 1)
        setUserProgress(prevProgress => (
            [
            ...prevProgress,
            userAnswer,
            ]
        ))
    }

    const totalWatchTime = classPath ? classPath.path.reduce((acc, p) => acc + p.watchTime, 0) : 0;

    if( userProgress.length === 4 && !classPath ) {

        const userCode = userProgress.join("");
        const userPath = classPathes.find(c => c.code === userCode && c.name === slug);
        setClassPath(userPath);
    }

    const fadeInVariants = {
        initial: {
          opacity: 0,
          y: 100,
        },
        animate: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.07 * index,
          },
        }),
    };

    return (
        <>
            <section className="max-w-7xl mx-auto p-8 flex flex-col justify-center items-center gap-8">
                {userProgress.length >= 0 & userProgress.length !== 4 &&
                <>
                    <motion.div
                    initial={{ opacity:0, y:-100 }}
                    animate={{ opacity:1, y:0 }}
                    >
                        <h2 className="text-white text-center font-brico font-extrabold text-lg">{slug}</h2>
                        <p className="text-slate-200 font-brico font-semibold text-center">To guide you better click the buttons which you are most comfortable with.</p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity:0, y:-100 }}
                    animate={{ opacity:1, y:0 }}
                    >
                        <h2 className="font-brico text-white text-center">How fast are you learning ?</h2>
                        <div className="font-brico text-white mt-2 flex gap-4">
                            <button className="rounded-md px-4 py-2 w-16 border-2 border-white" onClick={() => handleUserAnswers("1", 1)}>1x</button>
                            <button className="rounded-md px-4 py-2 w-16 border-2 border-white" onClick={() => handleUserAnswers("15", 1)}>1.5x</button>
                            <button className="rounded-md px-4 py-2 w-16 border-2 border-white" onClick={() => handleUserAnswers("2", 1)}>2x</button>
                        </div>
                    </motion.div>
                </>
                }
                {userProgress.length >= 1 & userProgress.length !== 4 && 
                <motion.div
                initial={{ opacity:0, y:-100 }}
                animate={{ opacity:1, y:0 }}
                >
                    <h2 className="font-brico text-white text-center">What score do you want to get ?</h2>
                    <div className="font-brico text-white mt-2 flex gap-4">
                        <button className="rounded-md px-4 py-2 w-32 border-2 border-white" onClick={() => handleUserAnswers("G", 2)}>A+, A, B+, B</button>
                        <button className="rounded-md px-4 py-2 w-32 border-2 border-white" onClick={() => handleUserAnswers("P", 2)}>C+, C, D+</button>
                    </div>
                </motion.div>}
                {userProgress.length >= 2 & userProgress.length !== 4 && 
                <motion.div      
                initial={{ opacity:0, y:-100 }}
                animate={{ opacity:1, y:0 }}
                >
                    <h2 className="font-brico text-white text-center">Do you have enough time before exam ?</h2>
                    <div className="font-brico text-white mt-2 flex justify-center gap-4">
                        <button className="rounded-md px-4 py-2 w-32 border-2 border-white" onClick={() => handleUserAnswers("Y", 3)}>Yes</button>
                        <button className="rounded-md px-4 py-2 w-32 border-2 border-white" onClick={() => handleUserAnswers("N", 3)}>No</button>
                    </div>
                </motion.div>}
                {userProgress.length >= 3 & userProgress.length !== 4 && 
                <motion.div
                initial={{ opacity:0, y:-100 }}
                animate={{ opacity:1, y:0 }}
                >
                    <h2 className="font-brico text-white text-center">Which do you prefer while learning ?</h2>
                    <div className="font-brico text-white mt-2 flex justify-center gap-4">
                        <button className="rounded-md px-4 py-2 w-32 border-2 border-white" onClick={() => handleUserAnswers("Y", 4)}>Youtube</button>
                        <button className="rounded-md px-4 py-2 w-32 border-2 border-white" onClick={() => handleUserAnswers("B", 4)}>Text Book</button>
                    </div>
                </motion.div>}
                {classPath && 
                <React.Fragment
                initial={{ opacity:0, y:-100 }}
                animate={{ opacity:1, y:0 }}                
                >
                    <h1 className="font-extrabold text-lg text-white font-brico w-72 text-center">Your Path is Ready!</h1>
                    <h2 className="font-bold text-lg text-slate-200 font-brico w-54 text-center">You can ace {slug} after {Math.floor(totalWatchTime / 60) + " hours " + totalWatchTime % 60 + " minutes"}</h2>
                </React.Fragment>
                }
                <div className="flex justify-center max-w-7xl flex-wrap gap-16 items-center">
                    {classPath && classPath.path.map((p, index) => (
                            <motion.div 
                            key={p.unit} 
                            className="text-white font-brico text-center w-72 h-36 border-2 border-slate-200 rounded-md pt-3"
                            variants={fadeInVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once:true,
                            }}
                            custom={index}
                            >
                                <h2 className="font-bold h-12">{p.unit}</h2>
                                <p className="text-slate-200 h-12 mx-2">Videos to Watch: {p.videos}</p>
                                <p className="text-slate-200 h-6">{Math.floor(p.watchTime / 60) !== 0 && Math.floor(p.watchTime / 60) + " hours "}{p.watchTime % 60 !== 0 &&  p.watchTime % 60 + " minutes"}</p>
                            </motion.div> 
                    ))}

                </div>
            </section>
        </>
    )
}