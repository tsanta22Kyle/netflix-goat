import { moviesList } from "@/utils/data";
import { SwipeCards } from "./card-list";

export function MainContent(){
    return(
        <div className="mt-20 ml-[50px]">
            <div className="flex flex-col ">

            <SwipeCards movies={moviesList} title="Blockbuster Movies"></SwipeCards>
            <SwipeCards movies={moviesList} title="Only on Netflix"></SwipeCards>
            <SwipeCards movies={moviesList} title="upcoming"></SwipeCards>
            <SwipeCards movies={moviesList} title="Top pics for you"></SwipeCards>
            </div>
        </div>
    )
}