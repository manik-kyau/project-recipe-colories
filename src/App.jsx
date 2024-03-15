// import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'

function App() {
  return (
    <div className='px-5 lg:px-0'>
      <Header></Header>
      <div className='max-w-[1180px] mx-auto my-12'>
        <div className='lg:w-2/3 text-center m-auto mb-7 lg:mb-12'>
          <h1 className='lg:text-[40px] font-semibold'>Our Recipes</h1>
          <p className='text-base font-normal text-[#150b2b99]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
            <Products></Products>
            <Bookmarks></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App;
