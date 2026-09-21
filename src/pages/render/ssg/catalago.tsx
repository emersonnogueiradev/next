import BotaoLink from "@/components/BotaoLink";
import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";



export function getStaticProps(){

    const i = 10
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

            <Filme id={filme.id} titulo={filme.titulo} subtitulo={filme} imagem={filme.imagem} descricao={filme.descricao} />
            <div>
                {idAnterior && (
                    <BotaoLink href={`/render/ssg/catalago`}>Anterior</BotaoLink>
                )}
            </div>
        </Pagina>


    )
}