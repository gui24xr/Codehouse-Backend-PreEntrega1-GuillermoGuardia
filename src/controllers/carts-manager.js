class cartsManager{

    constructor(path){
        this.lastId = 0
        this.path = path
        this.carts = []

    }

    createCart = () => {
        //crea un carro y le asigna un ID y lo deja listo para agregar productos
        this.carts.push({cartId: this.lastId,products:[]})
        //Aumento el lastId
        this.lastId +=1

    }

    //Devuelve los productos del carro si existe, y si no undefined
    getProducsFromCart = (cartId) => this.carts.find(cart => cart.cartId == cartId).products

    addProductInCart = (cartId,productId, quantity) => {
        //Si existe un carro con este ID procedo
        if (this.carts.some(cart => cart.cartId == cartId)){
            const cartPosition = this.carts.findIndex(cart => cart.cartId == cartId)
            //Ahora tengo que trabajar sobre esa posicion
            //Busco en el array de productos del carro si ya existe el producto.
            if (this.carts[cartPosition].products.some(product => product.productId == productId)){
                //Si existe modifico la cantidad
                //Busco la posicion del producto en el array de prodctos
                const productPosition = this.carts[cartPosition].products.findIndex(product => product.productId == productId)
                this.carts[cartPosition].products[productPosition].quantity += quantity
            }
            else{
                //SI no existe agrego el nuevo productID y su cantidad
                this.carts[cartPosition].products.push({productId: productId, quantity: quantity})
            }

        }
        else return undefined
    }

    //Devuelve true o false segun exista un cart con ese ID
    existCart(cartId){
        if (this.carts.some(cart => cart.cartId == cartId)) return true
        else return false
    }

}

export {cartsManager}