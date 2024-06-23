import Header from "@/components/Header";
import Pace from "@/components/Pace";

export default function CLassLadder({params}) {

    const decodedClassSlug = decodeURIComponent(params.classSlug || '');
    return (
        <>
        <Header/>
        <main>
            <Pace slug={decodedClassSlug}/>
        </main>
        </>
    )
}