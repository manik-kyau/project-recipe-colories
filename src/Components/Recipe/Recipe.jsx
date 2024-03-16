import PropTypes from 'prop-types';
import views from '../../assets/images/icons/view.png'
import calory from '../../assets/images/icons/calory.png'
const Recipe = ({recipe}) => {
    console.log('Connected recipe',recipe)
    return (
        <div className="card bg-base-100 hover:shadow-xl p-5 border">
          <img className='rounded-2xl' src={recipe.recipe_image} alt="Shoes"/>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">{recipe.recipe_name}</h2>
            <p className="text-base font-normal text-[#878787] mt-4">{recipe.short_description}</p>
            <div className='my-6'>
                <h2 className="text-lg font-medium text-[#282828]">Ingredients: {recipe.ingredients.length} </h2>
                
                <ul className="ml-4 mt-3">
                {
                    recipe.ingredients.map((ingred,idx) => <li key={idx} className="text-base font-normal text-[#878787]">{ingred}</li>)
                        
                }
                </ul>
            </div>
            <div className='flex gap-6'>
                <div className='flex items-center gap-1'>
                    <img src={views} alt="" />
                    <p className="text-base text-[#282828cc] font-normal">{recipe.preparing_time}</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src={calory} alt="" />
                <p className="text-base text-[#282828cc] font-normal">{recipe.calories}</p>
                </div>
            </div>
            <div className="card-actions mt-4">
              <button className="btn text-lg font-medium bg-[#0BE58A] hover:bg-[#0BE58A] text-[#150B2B] rounded-[50px] px-6">Want to Cook</button>
            </div>
          </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
}
export default Recipe;