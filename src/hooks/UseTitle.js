import { useEffect } from "react"

const UseTitle=(title)=>{
    useEffect(()=>{
        document.title=`${title}-Heath Care`;
    },[title])
}
export default UseTitle;