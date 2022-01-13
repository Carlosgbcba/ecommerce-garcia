import IntemListContainer from '../../../ItemListContainer/ItemListContainer'
import PageTitles from '../../../PageTitles/PageTitles'

export default function Inicio() {
    return (
        <div>
            <PageTitles title="Catalogo Remeras" />
            <IntemListContainer categoryPage="remeras" msg="Catalogo remeras" />
        </div>
    )
}