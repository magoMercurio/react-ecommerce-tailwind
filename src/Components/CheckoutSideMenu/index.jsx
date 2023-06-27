import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils/'



const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)


  //Borrar Productos del Carrito
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }


  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} .checkout-side-menu flex-col fixed top-20 right-0 border border-black rounded-lg bg-white`} >
      <div className='flex justify-between items-center p-6'  >
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon 
          className=  'w-6 h-6 text-black cursor-pointer '
          onClick={() => context.closeCheckoutSideMenu()}
          />
        </div>
      </div>
      <div className='px-6 overflow-y-auto h-[calc(100vh-300px)]  '>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={ handleDelete }
            />
          ))
        }
      </div>
      <div className='px-6'>
        <p className='flex justify-between items-center mt-2'>
          <span className='font-light' >Total</span>
          <span className='font-medium text-2xl'>${ totalPrice(context.cartProducts) }</span>
        </p>
        <button className='w-full bg-black py-3 text-white rounded-lg mt-2 mb-3 hover:bg-gray-700 ' onClick={() => handleCheckout()} >Checkout</button>
      </div>
    </aside>
  )
}


export default CheckoutSideMenu