import { HomePageSubHeader } from "./home_page_subheader";
import { Navbar } from "./navbar";


export function HomePage(){
    return(
        <div>
            <Navbar></Navbar>
            <HomePageSubHeader></HomePageSubHeader>
        </div>
    )
}