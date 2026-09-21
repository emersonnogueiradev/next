import BotaoLink from "@/components/BotaoLink";
import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";


export function getStaticPaths() {
    const paths = filmes.map(filme => {
        return{
            params: {id: filme.id}
        }
    })
    return{
        paths,
        fallback: false
    }
}

export function getStaticProps({params}: any) {

    const i = filmes.findIndex(filme => filme.id === params.id)
    
    return{
        props:{
            filme: filmes[i],
            numero: i+1,
            total: filmes.length,
            idAnterior: filmes[i-1]?.id ?? null,
            proximoId: filmes[i+1]?.id ?? null,
            
        }
    }
}


export default function PaginaCatalago(props: any){

    const {filme, numero,total,idAnterior,proximoId} = props


    return(
        <Pagina>

            <Filme id={filme.id} titulo={filme.titulo} subtitulo={filme.subtitulo} imagem={filme.imagem} descricao={filme.descricao} />
            <div className="flex items-center justify-center p-5 gap-5">
                {idAnterior && (
                    <BotaoLink href={`/render/ssg/catalago/${idAnterior}`}>Anterior</BotaoLink>
                )}
                
                <div className="flex gap-2 text-xl items-center">
                    <span>{numero}</span>
                    <span className="text-base text-zinc-500">de</span>
                    <span>{total}</span>
                </div>

                
                {proximoId && (
                    <BotaoLink href={`/render/ssg/catalago/${proximoId}`}>Próximo</BotaoLink>
                )}
            </div>
        </Pagina>


    )
}