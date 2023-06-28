import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props
  

  return (
    <div className='flex justify-between items-center border border-black rounded-lg w-80 p-4 mb-3'>
      <div className='flex justify-between items-center w-full'>
        <p className='flex flex-col'>
        <span className='font-light'>01.02.23</span>
        <span className='font-light'>{ totalProducts } articles</span>
        </p>
        <p className='flex flex-row items-center justify-end gap-2'>
          <span className='font-medium text-2xl'>$ { totalPrice }</span>
          <ChevronRightIcon className='h-6 w-6'/>
        </p>
      </div>
    </div>
  )
}

export default OrdersCard