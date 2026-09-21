import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()


    function renderizarItem(url:string, texto:string, locale:string){
        const ativo = router.asPath === url



        return(

            <li className={`
            ${ativo? "bg-purple-800" : "bg-zinc-500"} px-4 py-3 rounded-lg text-lg` }>
                <Link href={url} locale={locale}>
                    {texto}
                </Link>
            </li>
        )


    }


    return(

        <ul className="flex gap-3">


            {renderizarItem("/rotas/basicas", "Rota Básica", "pt")}
            {renderizarItem("/rotas/basicas/aninhada", "Rota Aninhada", "pt")}
            {renderizarItem("/rotas/dinamicas/produto/3", "Rota com Parâmetros", "pt")}
            {renderizarItem("/rotas/dinamicas/2024/3/21/agenda", "Agenda", "en")}
            {renderizarItem("/rotas/dinamicas/curso/react/21", "Curso React", "en")}
            {renderizarItem("/rotas/dinamicas/consulta/js/css/html", "Consulta", "en")}
            {renderizarItem("/rotas/i18n/saudacao", "Saudacção PT", "pt")}
            {renderizarItem("/rotas/i18n/saudacao", "Saudacção EN", "en")}
            {renderizarItem("/render/ssg/filme","SSG Simples", "pt")}
            {renderizarItem("/render/ssg/personagem","Personagem SW", "pt")}
            {renderizarItem("/render/ssg/produtos","Produtos", "pt")}
            {renderizarItem("/render/ssg/simples", "SSG Simples", "en")}
            {renderizarItem("/render/ssg/catalago/5e2cb698-4345-4316-803c-5383ee71209f", "Catalago", "pt")}


        </ul>
    )


}