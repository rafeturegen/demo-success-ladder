import Image from "next/image";

export default function Featured () {
    return (
        <>
        <section className="p-8 md:p-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 max-w-7xl">
            <span className="p-8 md:p-12 flex flex-wrap items-center justify-center gap-4 md:gap-4 text-slate-200 text-sm font-brico">Featured on</span>
            <a href="#header" className="flex text-slate-200 text-sm scroll-smooth hover:text-orange-500 font-brico "><svg className="w-8 md:w-9 fill-base-content saturate-0 contrast-50 opacity-80 hover:opacity-100 hover:saturate-100 hover:contrast-100 duration-100 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="28" viewBox="4 4 188 188" width="28"><path d="m4 4h188v188h-188z" fill="#f60"/><path d="m73.2521756 45.01 22.7478244 47.39130083 22.7478244-47.39130083h19.56569631l-34.32352071 64.48661468v41.49338532h-15.98v-41.49338532l-34.32352071-64.48661468z" fill="#fff"/></svg><p className="mt-[1px]">Hacker News</p></a>
        </section>
        </>
    )
}