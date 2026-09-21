import Link from "next/link"

interface BotaoLinkProps{

    href: string
    children?: any

}

export default function BotaoLink(props: BotaoLinkProps){

    return(
        <Link href={props.href}>
            <div className="bg-blue-500 rounded-lg px-4 py2 text-base">
                {props.children}
            </div>
        </Link>
    )
}