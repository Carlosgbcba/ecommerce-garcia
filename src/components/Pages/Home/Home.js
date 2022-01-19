import ItemListContainer from '../../ItemListContainer/ItemListContainer'
import PageTitles from '../../PageTitles/PageTitles'
import CarouselSlider from '../../CarouselSlider/CarouselSlider'

export default function Home() {
    return (
        <div>
            <CarouselSlider />
            <PageTitles title="Catalogo Productos" />
            <ItemListContainer />
        </div>
    )
}