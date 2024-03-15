// import banner from '../../assets/images/banner.png';
import naveicon from '../../assets/images/icons/navicon.png'
import search from '../../assets/images/icons/search.png'
import './Header.css'
const Header = () => {
    return (
        <div className="max-w-[1180px] mx-auto mt-6">
            <nav>
            <div className="navbar bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                  </ul>
                </div>
                <a className=" btn-ghost text-xl">Recipe Calories</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li><a>Home</a></li>
                  <li><a>Recipes</a></li>
                  <li><a>About</a></li>
                  <li><a>Search</a></li>
                </ul>
              </div>
              <div className="navbar-end space-x-5">
                <div className='flex border bg-gray-100 px-4 py-2 rounded-[50px]'>
                    <img src={search} alt="" />
                    <input className="bg-gray-100 outline-none px-2" type="text " placeholder='Search' />
                </div>
                <button className='bg-green-500 p-1 rounded-full'><img  src={naveicon} alt="" /></button>
              </div>
            </div>
            </nav>
            {/* Banner Section */}
            <div className="banner flex justify-center items-center lg:mt-12 rounded-3xl h-[550px] p-8">
                <div className='lg:w-4/6 space-y-6 mb-6'>
                    <h1 className='text-3xl lg:text-5xl text-center font-bold text-white lg:leading-[60px]'>Discover an exceptional cooking class tailored for you!</h1>
                    <p className='text-lg font-normal text-center text-white pb-2'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className='w-[339px] space-x-6 mx-auto'>
                        <button className='text-xl font-semibold py-2 px-4 rounded-[50px] bg-[#0BE58A] border-2 border-[#0BE58A]'>Explore Now</button>
                        <button className='text-xl text-white font-semibold py-2 px-4 rounded-[50px] border-2 border-white'>Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;