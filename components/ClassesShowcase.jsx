"use client";

import { useState } from "react";
import classes from "@/classes";
import Link from "next/link";

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
                <div className="flex flex-col max-w-7xl mx-auto p-8 mt-16">
                    <label htmlFor="class" className="text-white font-brico font-bold mb-2 text-lg">Find your class</label>
                    <input type="text" className="w-64 h-8 rounded-md shadow-md shadow-amber-300" onChange={changeHandler}/>
                </div>
                <div className="flex flex-wrap mx-auto items-center p-8 max-w-7xl gap-16 ">
                    {searchedClasses.map(c => (
                        <div className="bg-amber-300 p-1 rounded-md w-52 h-52 md:w-64 md:h-64 relative ">
                            <Link href={`/classes/${c.name}`}>
                                <img src={c.image} alt={c.alt} className="w-full h-full"/>
                                <h2 className="text-white font-brico absolute bottom-0 font-bold text-lg">{c.name}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}