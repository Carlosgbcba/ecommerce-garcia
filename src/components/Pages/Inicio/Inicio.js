import PageTitles from '../../PageTitles'
import ItemCount from '../../ItemCount/ItemCount';
import ItemListContainer from '../../ItemListContainer/ItemListContainer'

export default function Inicio() {
    return (
        <div>
            <PageTitles title="Pagina Inicio" />
            <ItemListContainer msg="Catalogo productos" />
            <br />
            <ItemCount stock='10' />
        </div>
    )
}