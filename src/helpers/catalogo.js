const productos = [
    {id: '1', name:'Remera Oversize', description:'Remera lisa de jersey peinado de algodon 24/1', price:2000, stock:15, image:'img/remeraOversize.jpeg' },
    {id: '2', name:'Pantalon Cuadriculado', description:'Pantalon cuadriculado principe de gales', price:5000, stock:15, image:'img/pantalonCuadros.jpeg' }, 
    {id: '3', name:'Chomba Oversize', description:'Chomba lisa oversize de pique', price:4500, stock:10, image:'img/chombaOversize.jpeg' },
    {id: '4', name:'Pantalon de Vestir', description:'Pantalon de gabardina', price:5000, stock:10, image:'img/pantalonVestir.jpeg' },
    {id: '5', name:'Jogger', description:'Jogger frizado', price:2500, stock:20, image:'img/jogger.jpeg' },
    {id: '6', name:'Pantalon al Tobillo', description:'Pantalon amplio de gabardina a la altura del tobillo', price:5000, stock:15, image:'img/pantalon2.jpeg'},  
]
  
export const catalogo = new Promise( (resolve, reject) => {
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})