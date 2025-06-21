import { Hero } from "@/components/app/browse/hero-section";
import { MainContent } from "@/components/app/browse/main-content";
import { Header } from "@/components/layout/browsePage/header";

export default function Browse(){
    return(
        <>
            <Header></Header>
            <Hero></Hero>
            <MainContent></MainContent>
        </>
    )
}