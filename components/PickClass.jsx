
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PickClass(){
    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
    }
    return (
        <>
        <section id="pick" className="max-w-7xl mx-auto px-8 py-5 items-center justify-between font-brico mt-12">
            <h2 className="text-white text-xl font-bold">Pick Your Class And Start Studying</h2>
            <div className="flex gap-8 justify-center">
                {classes.map((c) => (
                    <div key={c.name}>
                        <div className="">
                            <img src={c.image}/>
                        </div>
                        <div className="">
                            <a href="" className="text-white ">{c.name}</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

const classes = [
    {
        name: 'Calculus 1',
        image: '/math.jpg',
    },
    {
        name: 'General Physics 1',
        image: '/physics.jpg',
    },
    {
        name: 'General Chemistry 1',
        image: '/chemistry.jpg',
    },
    {
        name: 'Calculus 2',
        image: '/math.jpg',
    },
    {
        name: 'General Physics 2',
        image: '/physics.jpg',
    },
    {
        name: 'General Chemistry 2',
        image: '/chemistry.jpg',
    },
];