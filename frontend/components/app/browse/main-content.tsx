import { moviesList } from "@/utils/data";
import { SwipeCards } from "./card-list";

export function MainContent(){
    return(
        <div className="sm:mt-[10vh] p-5 sm:ml-[50px] overflow-x-hidden">
            <div className="flex flex-col ">

            <SwipeCards movies={moviesList} title="Blockbuster Movies"></SwipeCards>
            <SwipeCards movies={moviesList} title="Only on Netflix"></SwipeCards>
            <SwipeCards movies={moviesList} title="upcoming"></SwipeCards>
            <SwipeCards movies={moviesList} title="Top pics for you"></SwipeCards>
            </div>
        </div>
    )
}