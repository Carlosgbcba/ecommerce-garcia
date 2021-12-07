import ItemCount from '../../ItemCount/ItemCount';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';

export default function Inicio() {
    return (
        <div>
            <ItemListContainer mensaje="Pagina Inicio" />
            <br />
            <ItemCount stock='10' />
        </div>
    )
}