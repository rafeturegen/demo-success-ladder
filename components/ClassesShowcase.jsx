"use client";

import { useState } from "react";
import classes from "@/classes";
import Link from "next/link";
import { motion } from "framer-motion";

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
  
export default function ClassesShowcase() {

    const [searchedClasses, setSearchedClasses] = useState(classes);

    function changeHandler(event) {

        const lowerCaseSearch = event.target.value.toLowerCase();

        if(lowerCaseSearch){
            
            const filteredClasses = classes.filter(c =>
                c.name.toLowerCase().split(' ').some(word => word.startsWith(lowerCaseSearch))
            );
            setSearchedClasses(filteredClasses);
        }else{

            setSearchedClasses(classes);
        }
    }

    console.log(searchedClasses);

    return (
        <>
            <section>
                <motion.div        
                initial={{ opacity:0, y:-100 }}
                animate={{ opacity:1, y:0 }}
                className="flex flex-col max-w-7xl mx-auto p-8 mt-16"
                >
                    <label htmlFor="class" className="text-white font-brico font-bold mb-2 text-lg">Find your class</label>
                    <input type="text" className="w-64 h-8 rounded-md shadow-md shadow-amber-300" onChange={changeHandler}/>
                </motion.div>
                <div className="flex flex-wrap mx-auto items-center p-8 max-w-7xl gap-16 ">
                    {searchedClasses.map((c, index) => (
                        <motion.div 
                        key={c.name} 
                        className="bg-amber-300 p-1 rounded-md w-52 h-52 md:w-64 md:h-64 relative "
                        variants={fadeInVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once:true,
                        }}
                        custom={index}
                        >
                            <Link href={`/classes/${c.name}`}>
                                <img src={c.image} alt={c.alt} className="w-full h-full"/>
                                <h2 className="text-white font-brico absolute bottom-0 font-bold text-lg">{c.name}</h2>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    )
}