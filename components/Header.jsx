import Image from "next/image";

export default function Header() {
    return (
        <header className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between font-brico">
          <div className="flex gap-2">
            <Image src="/icon.jpg" width={50} height={50}></Image>
            <h2 className="text-white mt-[7px] text-xl">Success Ladder</h2>
          </div>
          <div className="flex gap-8">
            <button className="text-white hover:underline text-lg">
              Classes
            </button>
            <button className="text-white hover:underline text-lg">
                Study
            </button>
            <button className="text-white hover:underline text-lg">
                Contribute
            </button>
          </div>
        </header>
    )
}