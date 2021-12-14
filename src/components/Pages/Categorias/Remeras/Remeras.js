import IntemListContainer from '../../../ItemListContainer/ItemListContainer'
import PageTitles from '../../../PageTitles'

export default function Inicio() {
    return (
        <div>
            <PageTitles title="Pagina Remeras" />
            <IntemListContainer categoryPage="remeras" msg="Catalogo remeras" />
        </div>
    )
}