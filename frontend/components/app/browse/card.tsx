import Image from "next/image";

interface cardProps{
    imgSrc : string
}

export function Card({imgSrc}:cardProps){
    return(
        <div className="">
            <Image src={imgSrc} alt="card" width={300} height={200} className="min-w-[270px] rounded-[5px]"></Image>
        </div>
    )
}