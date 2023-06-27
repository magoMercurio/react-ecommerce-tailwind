import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props
  let renderXmarkIcon
  if (handleDelete) {
    renderXmarkIcon = <XMarkIcon
      className='w-6 h-6 text-black cursor-pointer'
      onClick={() => handleDelete(id)}
  />
  }

  return (
    <div className='order-card flex justify-between items-center mb-2 gap-2'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      {
        renderXmarkIcon
      }
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        { renderXmarkIcon}
      </div>
    </div>
  )
}

export default OrderCard