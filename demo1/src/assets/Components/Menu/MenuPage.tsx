import Categories from './Category/Categories'
import Items from './Item/Items'

const MenuPage = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
        <div className="w-full">
            <Categories />
        </div>
        <div className="w-ful">
            <Items />
        </div>
        
    </div>
  )
}

export default MenuPage