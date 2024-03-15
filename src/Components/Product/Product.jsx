import views from '../../assets/images/icons/view.png'
import calory from '../../assets/images/icons/calory.png'
const Product = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Card-1 */}
            <div className="card bg-base-100 hover:shadow-xl p-5 border">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="mt-6">
                <h2 className="text-xl font-semibold">Spaghetti Bolognese</h2>
                <p className="text-base font-normal text-[#878787] mt-4">If a dog chews shoes whose shoes does he choose?</p>

                <div className='my-6'>
                    <h2 className="text-lg font-medium text-[#282828]">Ingredients: 6</h2>
                    <ul className="ml-4 mt-4">
                        <li className="text-base font-normal text-[#878787]">500g ground beef</li>
                        <li className="text-base font-normal text-[#878787]">1 onion, chopped</li>
                        <li className="text-base font-normal text-[#878787]">2 cloves garlic, minced</li>
                    </ul>
                </div>

                <div className='flex gap-6'>
                    <div className='flex items-center gap-1'>
                        <img src={views} alt="" />
                        <p className="text-base text-[#282828cc] font-normal">30 minutes</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={calory} alt="" />
                    <p className="text-base text-[#282828cc] font-normal">600 calories</p>
                    </div>
                </div>

                <div className="card-actions mt-4">
                  <button className="btn text-lg font-medium bg-[#0BE58A] hover:bg-[#0BE58A] text-[#150B2B] rounded-[50px] px-6">Want to Cook</button>
                </div>
              </div>
            </div>
            {/* Card-2 */}
            <div className="card bg-base-100 shadow-xl p-5 border">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="mt-6">
                <h2 className="text-xl font-semibold">Spaghetti Bolognese</h2>
                <p className="text-base font-normal text-[#878787] mt-4">If a dog chews shoes whose shoes does he choose?</p>

                <div className='my-6'>
                    <h2 className="text-lg font-medium text-[#282828]">Ingredients: 6</h2>
                    <ul className="ml-4 mt-4">
                        <li className="text-base font-normal text-[#878787]">500g ground beef</li>
                        <li className="text-base font-normal text-[#878787]">1 onion, chopped</li>
                        <li className="text-base font-normal text-[#878787]">2 cloves garlic, minced</li>
                    </ul>
                </div>

                <div className='flex gap-6'>
                    <div className='flex items-center gap-1'>
                        <img src={views} alt="" />
                        <p className="text-base text-[#282828cc] font-normal">30 minutes</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={calory} alt="" />
                    <p className="text-base text-[#282828cc] font-normal">600 calories</p>
                    </div>
                </div>

                <div className="card-actions mt-4">
                  <button className="btn text-lg font-medium bg-[#0BE58A] hover:bg-[#0BE58A] text-[#150B2B] rounded-[50px] px-6">Want to Cook</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Product;