import Pagina from "@components/Pagina";
import { useRouter } from "next/router";







export default function PaginaProduto() {

    const router = useRouter();
    return (
        <Pagina>
           <p>Produto: {router.query.id}</p>
        </Pagina>
    )
}