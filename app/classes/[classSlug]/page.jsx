import Header from "@/components/Header";

export default function CLassLadder({params}) {

    const decodedClassSlug = decodeURIComponent(params.classSlug || '');
    return (
        <>
        <Header/>
        <main>
            <h1 className="text-white">Hello {decodedClassSlug}</h1>
        </main>
        </>
    )
}