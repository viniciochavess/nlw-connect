import { ReactNode } from "react"

interface PropsButton{
    name? : string,
    children?: ReactNode
}


export function Button({children,name = "Enviar"}:PropsButton){
    return(
        <button className=" flex justify-beetwen items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"> {name} {children}</button>
    )
}