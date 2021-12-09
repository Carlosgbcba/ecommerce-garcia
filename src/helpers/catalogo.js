const productos = [
    {id: '1', name:'Remera', description:'remera basica', price:500, stock:10 },
    {id: '2', name:'Chomba', description:'chomba pique', price:100, stock:5 },
    {id: '3', name:'Camisa', description:'camisa mangas cortas', price:1000, stock:20 },
    {id: '4', name:'Pantalon vestir', description:'pantalon de gabardina', price:100, stock:10 },
    {id: '5', name:'Pantalon corto', description:'pantalon corto vestir', price:220, stock:15 }, 
    {id: '6', name:'Remera mangas largas', description:'pantalon corto vestir', price:220, stock:15 }, 
    {id: '7', name:'Medias', description:'pantalon corto vestir', price:220, stock:15 }, 
    {id: '8', name:'Pantalon corto', description:'pantalon corto vestir', price:220, stock:15 }, 
    {id: '9', name:'Pantalon corto', description:'pantalon corto vestir', price:220, stock:15 },  
]
  
export const catalogo = new Promise( (resolve, reject) => {
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})