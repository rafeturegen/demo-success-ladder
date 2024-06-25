"use client";

import Footer from "./Footer";

export default function ContributeForm () {

    async function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);

        const data = Object.fromEntries(fd.entries());

        const response = await fetch("/api/form", {
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json",
            }
        })
         
        console.log(data);
    }

    
    return (
        <>
            <section className="flex flex-col justify-center items-center max-w-7xl mx-auto font-brico mt-12">
                <h1 className="text-white text-lg font-bold">Contributon Form</h1>
                <h2 className="text-slate-200 text-lg w-1/2 text-center mt-8 ">You have information about classes that are not in Success Ladder and want to share it to contribute to others' academic journeys. </h2>
                <form onSubmit={handleSubmit} className="flex flex-col mt-2">
                    <div className="flex flex-col mt-2">
                        <label htmlFor="email" className="text-white">Your Email</label>
                        <input type="text" name="email" className="rounded-sm shadow-md shadow-amber-300 w-64"/>
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="class" className="text-white rounded-md">Class Name</label>
                        <input type="text" className="rounded-sm shadow-md shadow-amber-300 w-64" name="class"/>
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="score" className="text-white rounded-md">Which score did you get in this class?</label>
                        <input type="text" className="rounded-sm shadow-md shadow-amber-300 w-64" name="score"/>
                    </div>
                    <button type="submit" className="bg-amber-300 py-2 px-4 rounded-md text-lg font-bold w-64 mt-6 text-center">Submit</button>
                </form>
                <Footer/>
            </section>
        </>
    )
}