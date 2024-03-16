import PropTypes from 'prop-types';
import Recipe from "../Recipe/Recipe";

const Recipes = ({recipes}) => {
    return (
        <div className="lg:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                recipes.map((recipe)=><Recipe
                key = {recipe.recipe_id}
                recipe = {recipe}
                ></Recipe>)
            }
        </div>
    );
};
Recipes.propTypes ={
    recipes: PropTypes.object.isRequired,
}
export default Recipes;