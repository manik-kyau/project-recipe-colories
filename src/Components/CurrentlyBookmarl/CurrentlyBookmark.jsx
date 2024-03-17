import PropTypes from 'prop-types';
const CurrentlyBookmark = ({cBookmark}) => {

    return (
        <div>
            <div>
                <h1 className="w-3/5 text-2xl font-semibold border-b-2 mx-auto text-center pb-3 mt-7 lexend">Currently cooking: {cBookmark.length}</h1>
                <div className="flex text-base font-medium text-[#878787]  mt-6 mx-5 fira-sans">
                    <h2 className="w-1/3 pl-6">Name</h2>
                    <h2 className="w-1/3 text-center">Time</h2>
                    <h2 className="w-1/3 text-center">Calories</h2>
                </div>

                <div className=" bg-gray-100 mt-4 mb-6">
                    {
                        cBookmark.map((cbook,idx)=><div key={idx} className="flex items-center px-5 py-3 fira-sans">
                            <p className="text-sm font-normal text-[#282828b3] mr-1 ">{idx + 1}.</p>
                        <h2 className="w-[180px] text-sm font-normal text-[#282828b3] pl-1">{cbook.recipe_name}</h2>
                        <h2 className="w-1/3 text-sm font-normal text-[#282828b3] pl-4">{cbook.preparing_time}</h2>
                        <h2 className="w-1/3 text-sm text-center font-normal text-[#282828b3] pr-1">{cbook.calories}</h2>
                    </div>)
                }
                </div>
            </div>
        </div>
    );
};
CurrentlyBookmark.propTypes = {
    cBookmark: PropTypes.array.isRequired,
}
export default CurrentlyBookmark;
