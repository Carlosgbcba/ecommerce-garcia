import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import PageTitles from '../../PageTitles'
import CarouselSlider from '../../CarouselSlider/CarouselSlider'

export default function Inicio() {
    return (
        <div>
            <CarouselSlider />
            <PageTitles title="Catalogo Productos" />
            <ItemListContainer />
        </div>
    )
}