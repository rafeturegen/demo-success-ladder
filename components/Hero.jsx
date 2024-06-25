import Image from "next/image";

export default function Hero() {
    return (
        <>
            <section className="flex justify-between max-w-8xl mx-auto mt-12 font-brico text text-white px-8 py-5 items-center ml-32 mr-4 scroll-smooth">
                <div className="flex flex-col gap-8">
                    <h1 class="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col gap-3 items-center lg:items-start">
                        <span class="relative">Stop Searching</span>
                        <span class="whitespace-nowrap relative ">
                            <span class="mr-3 sm:mr-4 md:mr-5">Start</span>
                            <span class=" relative whitespace-nowrap">
                                <span class="absolute bg-amber-300 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                                <span class="relative text-neutral">right away</span>
                            </span>
                        </span>
                    </h1>
                    <p className="text-lg max-w-md text-slate-100 mt-6">A right path for your Academic Success. Start your Academic Comeback today with Success Ladder.</p>
                    <a href="#pick" className="bg-amber-300 py-2 px-4 rounded-md text-lg font-bold w-48 mt-2 text-center ">Let&apos;s Get Started!</a>
                </div>
                <div>
                    <Image src="/hero.jpg" width={800} height={800} alt="with/without success ladder"></Image>
                </div>
            </section>
        </>
    )
}