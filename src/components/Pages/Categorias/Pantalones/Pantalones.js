import IntemListContainer from '../../../ItemListContainer/ItemListContainer'
import PageTitles from '../../../PageTitles'

export default function Inicio() {
    return (
        <div>
            <PageTitles title="Pagina Pantalones" />
            <IntemListContainer categoryPage="pantalones" msg="Catalogo pantalones"/>
        </div>
    )
}