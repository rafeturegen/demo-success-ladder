import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
        <footer className="max-w-7xl mx-auto px-8 py-5 flex font-brico mt-32 gap-16">
            <div className="flex flex-col gap-2 mr-16">
                <div className="flex">
                    <Image src="/icon.jpg" width={40} height={40}></Image>
                    <h2 className="text-white text-lg"><a href="#header" className="scroll-smooth">Success Ladder</a></h2>
                </div>
                <p className="text-slate-200 text-sm w-64">Start your Academic Comeback Today
                Copyright © 2024 - All rights reserved</p>
            </div>
            <div className="flex gap-40 ml-24">
                <div className="flex flex-col gap-1 items-center ">
                    <h2 className="text-white text-lg mt-0">Classes</h2>
                    <a className="text-slate-200 text-md ">Calculus 1</a>
                    <a className="text-slate-200 text-md ">Physics 1</a>
                    <a className="text-slate-200 text-md ">Chemistry 1</a>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-white text-lg mt-0">Study</h2>
                    <a className="text-slate-200 text-md ">Calculus 1</a>
                    <a className="text-slate-200 text-md ">Physics 1</a>
                    <a className="text-slate-200 text-md ">Chemistry 1</a>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="text-white text-lg mt-0">Contribute</h2>
                    <a className="text-slate-200 text-md ">Calculus 1</a>
                    <a className="text-slate-200 text-md ">Physics 1</a>
                    <a className="text-slate-200 text-md ">Chemistry 1</a>
                </div>
            </div>
        </footer>
        </>
    )
}