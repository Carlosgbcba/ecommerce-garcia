import PageTitles from '../../PageTitles'
import ItemListContainer from '../../ItemListContainer/ItemListContainer'

export default function Inicio() {
    return (
        <div>
            <PageTitles title="Pagina Inicio" />
            <ItemListContainer msg="Catalogo productos" />
        </div>
    )
}