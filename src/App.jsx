// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';
import Recipes from './Components/Recipes/Recipes';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const[bookmark, setBookmark] = useState([]);
  useEffect(()=>{
    fetch('recipes.json')
    .then(response => response.json())
    .then(data => setRecipes(data))
  },[]);

  // handle Recipe Button
  const handleRecipeBtn = recipe =>{
    const selectedRecipe = bookmark.find((item) => item.recipe_id === recipe.recipe_id);
    if(!selectedRecipe){
      setBookmark([...bookmark, recipe]);
    }
    else{
      toast.error("Allready exist !");
    }
  }
  
  // remove recipe items from bookmark
  const handleremoveRecipe = (id)=>{
    const remainingBookmark = bookmark.filter(recipe => recipe.recipe_id !== id);
    setBookmark(remainingBookmark);
  }

  return (
    <div className='px-5 lg:px-0'>
      <Header></Header>
      <div className='max-w-[1280px] mx-auto my-12'>
        <div className='lg:w-2/3 text-center m-auto mb-7 lg:mb-12'>
          <h1 className='text-3xl lg:text-[40px] font-semibold mb-4 lexend'>Our Recipes</h1>
          <p className='text-base font-normal text-[#150b2b99] lexend'>Preface your recipe with a short intro that shows readers your personal relationship to this dish. For example, write why it's important and what occasion it could be cooked/baked on. This is also a good section to state how many the recipe serves, the prep time, and the overall cook time.</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-5'>
            <Recipes recipes = {recipes} handleRecipeBtn = {handleRecipeBtn}></Recipes>
            <Bookmarks bookmark={bookmark} handleremoveRecipe = {handleremoveRecipe}></Bookmarks>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
export default App;
