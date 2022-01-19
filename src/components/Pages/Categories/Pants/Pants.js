import IntemListContainer from '../../../ItemListContainer/ItemListContainer'
import PageTitles from '../../../PageTitles/PageTitles'


export default function Pants() {
    return (
        <div>
            <PageTitles title="Catalogo Pantalones" />
            <IntemListContainer categoryPage="pantalones" msg="Catalogo pantalones"/>
        </div>
    )
}