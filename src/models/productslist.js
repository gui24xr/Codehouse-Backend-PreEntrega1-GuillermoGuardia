const productos = [
    {
      title: "Producto Prueba 1",
      description: "Este es un producto prueba 1",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen1.jpg",
      code: "abc12311",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 2",
      description: "Este es un producto prueba 2",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen2.jpg",
      code: "def45622",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 3",
      description: "Este es un producto prueba 3",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen3.jpg",
      code: "ghi78933",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 4",
      description: "Este es un producto prueba 4",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen4.jpg",
      code: "jkl01244",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 5",
      description: "Este es un producto prueba 5",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen5.jpg",
      code: "mno34555",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 6",
      description: "Este es un producto prueba 6",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen6.jpg",
      code: "pqr67866",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 7",
      description: "Este es un producto prueba 7",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen7.jpg",
      code: "stu90177",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 8",
      description: "Este es un producto prueba 8",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen8.jpg",
      code: "vwx23488",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 9",
      description: "Este es un producto prueba 9",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen9.jpg",
      code: "yza56799",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 10",
      description: "Este es un producto prueba 10",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen10.jpg",
      code: "bcd89010a",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 11",
      description: "Este es un producto prueba 11",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen11.jpg",
      code: "efg11121b",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 12",
      description: "Este es un producto prueba 12",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen12.jpg",
      code: "hij13232c",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 13",
      description: "Este es un producto prueba 13",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen13.jpg",
      code: "klm15343d",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 14",
      description: "Este es un producto prueba 14",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen14.jpg",
      code: "nop17454e",
      stock: Math.floor(Math.random() * 100) + 1,
    },
    {
      title: "Producto Prueba 15",
      description: "Este es un producto prueba 15",
      price: Math.floor(Math.random() * (12000 - 1000 + 1)) + 1000,
      thumbnail: "https://ejemplo.com/imagen15.jpg",
      code: "qrs19565f",
      stock: Math.floor(Math.random() * 100) + 1,
    },
  ]
  

  nuevo = productos.map((item,index) => ( { productID:index+1, ...item, title: 'Producto ' + Number(index+1) ,description: 'Descripcion ' + Number(index+1)}))

      
  console.log(JSON.stringify(nuevo,null,1))
  

module.exports = productos