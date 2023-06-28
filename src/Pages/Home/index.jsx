import { useContext} from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"


function Home() {

  const context = useContext(ShoppingCartContext)

  return (
    <>
      <Layout>
        <h1 className='text-xl font-medium mb-3'>Products</h1>
        <input 
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          type="text"
          placeholder="Search a product"
          onChange={e => context.setSearchByTitle(e.target.value)}
        />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          context.items?.map(item => (
              <Card key={item.id} data={item}  />
          ))
        }
        </div>
        <ProductDetail />

      </Layout>
    </>
  )
}

export default Home