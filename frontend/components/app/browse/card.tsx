import Image from "next/image";
import card1 from "../../../public/assets/cards/card1.jpg"
export function Card(){
    return(
        <div className="">
            <Image src={card1} alt="card" className="w-[250px] rounded-sm"></Image>
        </div>
    )
}