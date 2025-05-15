import Images from "./Images";
import Redux from "./Redux";

export default function Conditional(){

    let content;
    let isLogged = false;

    if (isLogged){
        content = <Images/>

    } else{

        content = <Redux/>
    }

    return content
}