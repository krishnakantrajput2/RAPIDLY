import 'react'
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'
import { valideURLConvert } from '../utils/valideURLConvert'
import { Link } from 'react-router-dom'


// eslint-disable-next-line react/prop-types
const CardProduct = ({data}) => {
  const url = `/product/${valideURLConvert(data.name)}-${data._id}`
  return (
    <Link to={url} className='border p-4 grid gap-3 max-w-52 lg:min-w-52 rounded '>
      <div className='min-h-20 max-h-32 rounded'>
        <img
         src={data.image[0]}
         className='w-full h-full object-scale-down scale-125'
        />
      </div>
      <div className=' rounded text-sm w-fit p-[1px] px-2 text-green-600 bg-green-50
       '>10 min
      </div>
      <div className='font-medium text-ellipsis line-clamp-2'>
        {data.name}
      </div>
      <div className='w-fit'>
        {data.unit}
      </div>

     <div className='flex items-center justify-between  gap-3'>
        <div className='font-semibold'>
          {DisplayPriceInRupees(data.price)}
      </div>
       <div className=''>
        <button className='bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded'>
          Add
        </button>
      </div>
     </div>
  </Link>
  )
}
export default CardProduct