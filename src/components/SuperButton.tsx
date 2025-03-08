// type SuperButtonProps = {
// onClick:()=>void
// color:string
// title:string
// children?:React.ReactNode
// }

import {ButtonHTMLAttributes} from "react"

type ColorsProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
}

type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
     backGround?:string
} & Omit <ColorsProps,'color4' | 'color3'>

export const SuperButton = (props: SuperButtonProps) => {
    const {onClick, color, children, title,className, ...restProps} = props

    return (
        <button className={className}>{children}</button>
    )
}