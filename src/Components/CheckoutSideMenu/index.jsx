import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'


const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)


  //Borrar Productos del Carrito
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
    
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
      <div className='px-6 overflow-y-auto h-[calc(100vh-300px)] '>
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
    </aside>
  )
}


export default CheckoutSideMenu