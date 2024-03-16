import PropTypes from 'prop-types';
import CurrentlyBookmark from '../CurrentlyBookmarl/CurrentlyBookmark';
import { useState } from 'react';

const Bookmarks = ({bookmark,handleremoveRecipe}) => {
    // console.log(bookmark);

    const [cBookmark, setCBookmark] = useState([]);

    const handleWantToCock = (currBookmark) =>{
        console.log('habi jabi cocking ',currBookmark);
        setCBookmark([...cBookmark,currBookmark]);
    }
    return (
        <div className="lg:w-[500px] rounded-2xl border">
            <h1 className="w-3/5 text-2xl font-semibold border-b-2 mx-auto text-center py-3">Want to cook: {bookmark.length}</h1>
            <div className="w-2/3 flex justify-between text-base font-medium text-[#878787] mt-5 ml-8">
                <h2 className='pl-[2px]'>Name</h2>
                <h2>Time</h2>
                <h2>Calories</h2>
            </div>
            <div className='mt-4 py-3 '>
            {
                bookmark.map((book,idx)=><div key={idx} className="flex 
                 items-center px-3 py-2 bg-gray-100">
                <p className="text-sm font-normal text-[#282828b3] mr-1">{idx + 1}. </p>
                <h2 className="w-[130px] h-full text-sm font-normal text-[#282828b3] pl-1">{book.recipe_name}</h2>
                <h3  className="h-full w-[100px] text-sm font-normal text-[#282828b3] pl-1">{book.preparing_time}</h3>
                <h2 className=" h-full pl-1 text-sm font-normal text-[#282828b3] ml-6 mr-4">{book.calories}</h2>
                <button onClick={()=>{
                    handleWantToCock(book)
                    handleremoveRecipe(book.recipe_id)
                    }}
                 className="h-full text-sm font-medium text-[#150B2B] bg-[#0BE58A] hover:bg-[#0BE58A] px-2 py-1 rounded-[50px]">Preparing</button>
                </div>)
            }
            </div>

            <CurrentlyBookmark cBookmark = {cBookmark}></CurrentlyBookmark>

            <div className="flex justify-end px-5 mt-4">
                <div className="flex gap-5">
                    <div className="text-base font-medium text-[#282828cc]">
                        <h2>Total Time = </h2>
                        <h2>45 minutes</h2>
                    </div>
                    <div className="text-base font-medium text-[#282828cc]">
                        <h2>Total Calories = </h2>
                        <h2>1050 calories</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    handleWantToCock: PropTypes.func.isRequired,
    handleremoveRecipe: PropTypes.func.isRequired,
    handleWantToCock: PropTypes.func.isRequired
}
export default Bookmarks;