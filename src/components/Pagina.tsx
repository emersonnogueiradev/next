import Menu from "./Menu"

interface PaginaProps {
    children?: any
}



export default function Pagina(props: PaginaProps) {

    return (
        <div className="
            flex flex-col justify-center min-h-screen
            bg-linear-to-r from-zinc-900 to-black text-5xl text-white font-black
        "
        >
            <nav className="bg-black border-zinc-700 p-3">
                <Menu />
            </nav>
            <main className="flex flex-col flex-1 items-center justify-center">
                {props.children}


            </main>
        </div>
    
    )

}