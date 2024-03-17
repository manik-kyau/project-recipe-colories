import PropTypes from 'prop-types';
import views from '../../assets/images/icons/view.png'
import calory from '../../assets/images/icons/calory.png'
const Recipe = ({recipe, handleRecipeBtn}) => {

    return (
        <div className="card bg-base-100 hover:shadow-xl p-5 border">
          <img className='rounded-2xl h-[200px]' src={recipe.recipe_image} alt="Shoes"/>
          <div className="mt-6">
            <h2 className="text-xl font-semibold lexend">{recipe.recipe_name}</h2>
            <p className="text-base font-normal text-[#878787] mt-4 fira-sans">{recipe.short_description.slice(0,80)}</p>
            <div className='my-6'>
                <h2 className="text-lg font-medium text-[#282828] lexend">Ingredients: {recipe.ingredients.length} </h2>
                
                <div className="ml-4 mt-3"> 
                {
                    recipe.ingredients.map((ingred,idx) => <ul key={idx} className='list-disc pl-4'>
                        <li className="text-base font-normal text-[#878787] fira-sans">{ingred}</li>
                    </ul>)  
                }
                </div>

            </div>
            <div className='flex gap-6'>
                <div className='flex items-center gap-1'>
                    <img src={views} alt="" />
                    <p className="text-base text-[#282828cc] font-normal fira-sans">{recipe.preparing_time}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={calory} alt="" />
                <p className="text-base text-[#282828cc] font-normal fira-sans">{recipe.calories}</p>
                </div>
            </div>
            <div className="card-actions mt-4">
              <button onClick={() => handleRecipeBtn(recipe)} className="btn text-lg font-medium bg-[#0BE58A] hover:bg-[#0BE58A] text-[#150B2B] rounded-[50px] px-6 lexend">Want to Cook</button>
            </div>
          </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleRecipeBtn: PropTypes.func.isRequired,
}
export default Recipe;