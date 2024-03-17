import PropTypes from 'prop-types';
import Recipe from "../Recipe/Recipe";

const Recipes = ({recipes, handleRecipeBtn}) => {
    return (
        <div className="lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                recipes.map((recipe,idx)=><Recipe
                key = {idx}
                handleRecipeBtn = {handleRecipeBtn}
                recipe = {recipe}
                ></Recipe>)
            }
        </div>
    );
};
Recipes.propTypes ={
    recipes: PropTypes.array.isRequired,
    handleRecipeBtn: PropTypes.func.isRequired,
}
export default Recipes;