import Pagina from "@/components/Pagina"

export async function getStaticProps(){
    const resposta = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resposta.json()

    return{
        props: {produtos}
    }

} 


export default function PaginaProduto(props:any){

    const { produtos  } = props

    function rederizarProduto(produto: any){

        return(
            <div className="flex gap-3" key={produto.id}>
                <div>{produto.id}</div>
                <div>{produto.nome}</div>
                <div>{produto.preco}</div>

            </div>
        )
    }

    return(
        <Pagina>
            {produtos.map(rederizarProduto)}
        </Pagina>
    )

}