import { createContext, useState  } from "react"


export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    //shopping cart increment quantity
    const [count, setCount] = useState(0)
    
    //product detail open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
        //product detail show product
    const [productToShow, setProductToShow] = useState({
        title: '',
        price: '',
        description: '',
        images: [],
    })


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
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}