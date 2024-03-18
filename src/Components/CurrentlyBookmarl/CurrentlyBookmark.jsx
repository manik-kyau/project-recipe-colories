import PropTypes from 'prop-types';
const CurrentlyBookmark = ({cBookmark,timeCount,caloryCount}) => {

    return (
        <div>
            <div>
                <h1 className="w-3/5 text-xl lg:text-2xl font-semibold border-b-2 mx-auto text-center pb-3 mt-7 lexend">Currently cooking: {cBookmark.length}</h1>
                <div className="mt-5 mb-6">
                    <table className='w-full'>
                        <thead>
                            <tr className='text-base font-medium text-[#878787] pb-10 fira-sans'>
                                <th className='px-3'></th>
                                <th className='lg:min-w-[140px] text-start pl-3 pb-4'>Name</th>
                                <th className='lg:min-w-[100px] text-start pb-4'>Time</th>
                                <th className='lg:min-w-[40px] text-start ml-20 pb-4'>Calories</th>
                            </tr>
                        </thead>
                        <tbody className='my-5 fira-sans'>
                            {
                                cBookmark.map((cbook,idx)=> <tr key={idx}  className='bg-gray-100'>
                                <td className='text-base font-medium text-[#282828b3] py-2 pl-3'>{idx + 1}.</td>
                                <td className='text-base font-medium text-[#282828b3] py-2 pl-3 pr-3'>{cbook.recipe_name}</td>
                                <td className='text-base font-medium text-[#282828b3] py-2'>{cbook.preparing_time}</td>
                                <td className='text-base font-medium text-[#282828b3] py-2'>{cbook.calories}</td>
                                </tr>)
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className='pl-3'></td>
                                <td className='pl-3'></td>
                                <td className='text-[#282828cc] lexend pt-4'><span className='text-base font-medium'>Total Time: </span><h2 className='text-base font-normal'>{timeCount} minutes</h2></td>
                                <td className='text-[#282828cc] lexend pt-4'><span className='text-base font-medium'>Total Calories:</span><h2 className='text-base font-normal'>{caloryCount} calories</h2></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};
CurrentlyBookmark.propTypes = {
    cBookmark: PropTypes.array.isRequired,
    timeCount: PropTypes.number.isRequired,
    caloryCount: PropTypes.number.isRequired,
}
export default CurrentlyBookmark;
