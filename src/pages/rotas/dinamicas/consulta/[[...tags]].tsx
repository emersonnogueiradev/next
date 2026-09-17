// parametros opcinais

import Pagina from "@/components/Pagina"
import { useRouter } from "next/router"

export default function PaginaConsulta() {
    const router = useRouter()
    const tags = (router.query.tags ?? []) as string[]


    function renderizarTags(tag: string) {
    
     return(

        <div className=" px-4 py-2 text-3xl bg-indigo-500 rounded-lg">
            {tag}

        </div>
     )   

    }
    return (
        <Pagina>
            <h1 className="mb-4">Pagina Consulta</h1>
            <div className="
            flex gap-5
            ">

                {tags.map(renderizarTags)}
            </div>
        </Pagina>
    )

}