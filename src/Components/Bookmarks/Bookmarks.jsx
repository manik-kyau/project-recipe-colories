const Bookmarks = () => {
    return (
        <div className="w-[500px] rounded-2xl border">
            <h1 className="w-3/5 text-2xl font-semibold border-b-2 mx-auto text-center py-3">Want to cook: 01</h1>
            <div className="w-2/3 flex justify-between text-base font-medium text-[#878787] border mt-5 mx-5">
                <h2>Name</h2>
                <h2>Time</h2>
                <h2>Calorie</h2>
            </div>
            <div className="flex justify-between items-center px-5 py-4  bg-gray-100 mt-4">
                <h2 className="w-[100px] h-full text-sm font-normal text-[#282828b3]">Chicken Caesar Salad</h2>
                <h2 className="w-[100px] h-full text-sm font-normal text-[#282828b3] pl-3">20 <br/> minutes</h2>
                <h2 className="w-[60px] h-full text-sm font-normal text-[#282828b3] pl-[14px]">400 calories</h2>
                <button className="h-full text-sm font-medium text-[#150B2B] bg-[#0BE58A] hover:bg-[#0BE58A] px-4 py-2 rounded-[50px]">Preparing</button>
            </div>

            <div>
                <h1 className="w-3/5 text-2xl font-semibold border-b-2 mx-auto text-center pb-3 mt-7">Currently cooking: 02</h1>
                <div className="flex justify-around text-base font-medium text-[#878787] border mt-5 mx-5">
                    <h2 className="w-1/3">Name</h2>
                    <h2 className="w-1/3 text-center">Time</h2>
                    <h2 className="w-1/3 text-center">Calorie</h2>
                </div>

                <div className="flex items-center px-5 py-4 bg-gray-100 mt-4">
                    <h2 className="w-[180px] text-sm font-normal text-[#282828b3]">Chicken Caesar Salad</h2>
                    <h2 className="w-1/3 text-sm font-normal text-center text-[#282828b3] ">20 minutes</h2>
                    <h2 className="w-1/3 text-sm text-center font-normal text-[#282828b3]">400 calories</h2>
                </div>
            </div>

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

export default Bookmarks;