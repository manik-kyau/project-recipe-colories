import PropTypes from 'prop-types';
import CurrentlyBookmark from '../CurrentlyBookmarl/CurrentlyBookmark';
import { useState } from 'react';

const Bookmarks = ({bookmark,handleremoveRecipe,}) => {

    const [cBookmark, setCBookmark] = useState([]);
    const [timeCount, setTimeCount] = useState(0);
    const [caloryCount, setCaloryCount] =useState(0);

    // when click Preparing button add recipe in Currently cooking table
    const handlePreparing = (book) =>{
        setCBookmark([...cBookmark,book]);
    }

    const handleTimeCount = (time,calories) =>{
        // set total time
        const timeArry =time.split(' ');
        const timeInt = parseInt(timeArry[0]);
        const sumOfTime = timeCount + timeInt;
        setTimeCount(sumOfTime);
        // set total calories
        const caloryArry =calories.split(' ');
        const caloryInt = parseInt(caloryArry[0]);
        const sumOfCalories = caloryCount + caloryInt;
        setCaloryCount(sumOfCalories)
    }

    return (
        <div className="lg:w-[550px] rounded-2xl border">
            <h1 className="w-3/5 text-xl lg:text-2xl font-semibold border-b-2 mx-auto text-center py-3 lexend">Want to cook: {bookmark.length}</h1>
            <div className='mt-4'>
                <table className=''>
                    <thead>
                        <tr className='text-base font-medium text-[#878787] pb-10 fira-sans'>
                            <th className='px-3'></th>
                            <th className='lg:min-w-[140gitpx] text-start pl-3 pb-4'>Name</th>
                            <th className='lg:min-w-[104px] text-start pl-3 pb-4'>Time</th>
                            <th className='lg:min-w-[40px] text-start pl-3 pb-4'>Calories</th>
                        </tr>
                    </thead>
                        <tbody className='w-full fira-sans'>
                        {
                            bookmark.map((book,idx)=> <tr key={idx} className='bg-gray-100'>
                                <td className='text-base font-medium text-[#282828b3] pl-3 '>{idx + 1}.</td>
                                <td className='text-base font-medium text-[#282828b3] pl-3 py-3'>{book.recipe_name}</td>
                                <td className='text-base font-medium text-[#282828b3] pl-3 pr-4'>{book.preparing_time}</td>
                                <td className='text-base font-medium text-[#282828b3] px-3  py-3'>{book.calories}</td>
                                <td className=' pr-3'><button  onClick={()=>{
                                handlePreparing(book);
                                handleremoveRecipe(book.recipe_id);
                                handleTimeCount(book.preparing_time,book.calories);
                                }} className="h-full text-sm font-medium text-[#150B2B] bg-[#0BE58A] hover:bg-[#0BE58A] px-3 py-1 rounded-[50px] lexend">Preparing</button></td>
                            </tr>)
                        }
                        </tbody>
                </table>
            </div>

            <CurrentlyBookmark 
            cBookmark = {cBookmark}
            timeCount = {timeCount}
            caloryCount = {caloryCount}
            ></CurrentlyBookmark>

        </div>
    );
};
Bookmarks.propTypes = {
    bookmark: PropTypes.array.isRequired,
    handleremoveRecipe: PropTypes.func.isRequired,
}
export default Bookmarks;