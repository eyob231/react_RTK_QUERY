import { useSelector } from "react-redux";

export function Checkpage(){
    const count=useSelector((state)=>state.counter.value)
    return(
        <>
        <h1>{count}</h1>
        </>
    )
}