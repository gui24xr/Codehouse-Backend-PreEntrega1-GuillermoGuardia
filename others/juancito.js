/* script para generar el archivo de productos*/

const myArray = [
    {
     "productID": 1,
     "title": "Producto 1",
     "description": "Descripcion 1",
     "price": 2008,
     "thumbnail": "https://ejemplo.com/imagen1.jpg",
     "code": "abc12311",
     "stock": 54
    },
    {
     "productID": 2,
     "title": "Producto 2",
     "description": "Descripcion 2",
     "price": 4027,
     "thumbnail": "https://ejemplo.com/imagen2.jpg",
     "code": "def45622",
     "stock": 59
    },
    {
     "productID": 3,
     "title": "Producto 3",
     "description": "Descripcion 3",
     "price": 6758,
     "thumbnail": "https://ejemplo.com/imagen3.jpg",
     "code": "ghi78933",
     "stock": 4
    },
    {
     "productID": 4,
     "title": "Producto 4",
     "description": "Descripcion 4",
     "price": 7276,
     "thumbnail": "https://ejemplo.com/imagen4.jpg",
     "code": "jkl01244",
     "stock": 56
    },
    {
     "productID": 5,
     "title": "Producto 5",
     "description": "Descripcion 5",
     "price": 9223,
     "thumbnail": "https://ejemplo.com/imagen5.jpg",
     "code": "mno34555",
     "stock": 30
    },
    {
     "productID": 6,
     "title": "Producto 6",
     "description": "Descripcion 6",
     "price": 9644,
     "thumbnail": "https://ejemplo.com/imagen6.jpg",
     "code": "pqr67866",
     "stock": 46
    },
    {
     "productID": 7,
     "title": "Producto 7",
     "description": "Descripcion 7",
     "price": 10975,
     "thumbnail": "https://ejemplo.com/imagen7.jpg",
     "code": "stu90177",
     "stock": 83
    },
    {
     "productID": 8,
     "title": "Producto 8",
     "description": "Descripcion 8",
     "price": 1453,
     "thumbnail": "https://ejemplo.com/imagen8.jpg",
     "code": "vwx23488",
     "stock": 79
    },
    {
     "productID": 9,
     "title": "Producto 9",
     "description": "Descripcion 9",
     "price": 4386,
     "thumbnail": "https://ejemplo.com/imagen9.jpg",
     "code": "yza56799",
     "stock": 80
    },
    {
     "productID": 10,
     "title": "Producto 10",
     "description": "Descripcion 10",
     "price": 5638,
     "thumbnail": "https://ejemplo.com/imagen10.jpg",
     "code": "bcd89010a",
     "stock": 56
    },
    {
     "productID": 11,
     "title": "Producto 11",
     "description": "Descripcion 11",
     "price": 9174,
     "thumbnail": "https://ejemplo.com/imagen11.jpg",
     "code": "efg11121b",
     "stock": 51
    },
    {
     "productID": 12,
     "title": "Producto 12",
     "description": "Descripcion 12",
     "price": 3522,
     "thumbnail": "https://ejemplo.com/imagen12.jpg",
     "code": "hij13232c",
     "stock": 32
    },
    {
     "productID": 13,
     "title": "Producto 13",
     "description": "Descripcion 13",
     "price": 6999,
     "thumbnail": "https://ejemplo.com/imagen13.jpg",
     "code": "klm15343d",
     "stock": 66
    },
    {
     "productID": 14,
     "title": "Producto 14",
     "description": "Descripcion 14",
     "price": 9747,
     "thumbnail": "https://ejemplo.com/imagen14.jpg",
     "code": "nop17454e",
     "stock": 23
    },
    {
     "productID": 15,
     "title": "Producto 15",
     "description": "Descripcion 15",
     "price": 10693,
     "thumbnail": "https://ejemplo.com/imagen15.jpg",
     "code": "qrs19565f",
     "stock": 50
    },
    {
     "productID": 16,
     "title": "Producto Prueba 1",
     "description": "Este es un producto prueba 1",
     "price": 2032,
     "thumbnail": "https://ejemplo.com/imagen1.jpg",
     "code": "abc123119999",
     "stock": 48
    }
   ]


myArray.forEach( item => delete item.thumbnail)

const miNuevoArray = myArray.map( item => (


    {...item,status: true, 
        thumbnails: [
            `"https://ejemplo.com/product${item.productID}imagen1.jpg"`,
            `"https://ejemplo.com/product${item.productID}imagen2.jpg"`,
            `"https://ejemplo.com/product${item.productID}imagen3.jpg"`,
            `"https://ejemplo.com/product${item.productID}imagen4.jpg"`,
            `"https://ejemplo.com/product${item.productID}imagen5.jpg"`,
                
        ]}
))



const stringifeado = JSON.stringify(miNuevoArray,null,1)
console.log(stringifeado)
