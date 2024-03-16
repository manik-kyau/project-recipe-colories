// import './App.css'
import { useState } from 'react';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import { useEffect } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    fetch('recipes.json')
    .then(response => response.json())
    .then(data => setRecipes(data))
  },[]);

  return (
    <div className='px-5 lg:px-0'>
      <Header></Header>
      <div className='max-w-[1240px] mx-auto my-12'>
        <div className='lg:w-2/3 text-center m-auto mb-7 lg:mb-12'>
          <h1 className='text-3xl lg:text-[40px] font-semibold mb-4'>Our Recipes</h1>
          <p className='text-base font-normal text-[#150b2b99]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-5'>
            <Recipes recipes = {recipes}></Recipes>
            <Bookmarks></Bookmarks>
        </div>
      </div>
    </div>
  )
}

export default App;
