import { createContext, useState  } from "react"


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    //shopping cart increment quantity
    const [count, setCount] = useState(0)
    
    //product detail open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)


    //checkout side menu open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)


        //product detail show product
    const [productToShow, setProductToShow] = useState({
        title: '',
        price: '',
        description: '',
        images: [],
    })

    //shopping cart add product to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Shopping cart Order
    const [order, setOrder] = useState([]);
    

    return (
        <ShoppingCartContext.Provider
            value={{
                count,
                setCount,
                isProductDetailOpen,
                openProductDetail,
                closeProductDetail,
                productToShow,
                setProductToShow,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}