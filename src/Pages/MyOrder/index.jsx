import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { ShoppingCartContext } from '../../Context'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'



function MyOrder() {
  const context = useContext(ShoppingCartContext)
  // crea pagina de mi orden, poner en AppRoutes path: '/my-orders/:id'
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1


  return (
    <>
      <Layout >
        <div className="flex w-80 items-center justify-center relative mb-6">
          <Link to='/my-orders' className="absolute left-0">
          <ChevronLeftIcon className=  'w-6 h-6 text-black cursor-pointer '/>
          </Link>
          <h1>MyOrder</h1>
        </div>
        <div className='flex flex-col w-80 gap-2'>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        }
        <div className='flex w-80 mt-4'>
        <p className='flex w-full items-center justify-between'>
          <span className='font-normal text-xl'>Total: </span>
          <span className='font-medium text-2xl pr-2'>${context.order?.[index]?.totalPrice}</span>
        </p>
      </div>
      </div>
      </Layout>
      
    </>
  )
}

export default MyOrder