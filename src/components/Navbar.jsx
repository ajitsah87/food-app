import { GiHamburgerMenu } from 'react-icons/gi';
function Navbar() {
  return (
    <>
      <nav className="p-5 bg-green-600 shadow 920:flex 920:items-center 920:justify-between ">
        <div className='flex justify-between items-center '>
        <span className='text-3xl' >Logo</span>
        <span className='text-black text-3xl cursor-pointer  mx-2 920:hidden block '><GiHamburgerMenu/></span>
        </div>
          <ul className=" 920:flex 920:items-center z-[-1] 920:z-auto 920:static absolute  w-full left-0 920:w-auto  920:py-0 py-4 920:pl-0 pl-7 920:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">
            <li className="920:my-0 mx-4 my-6">HOME</li>
            <li className="920:my-0 mx-4 my-6">MENU</li>
            <li className="920:my-0 mx-4 my-6">RESERVATION</li>
            <li className="920:my-0 mx-4 my-6">PAGES</li>
            <li className="920:my-0 mx-4 my-6">BLOG</li>
            <li className="920:my-0 mx-4 my-6">CONTACT</li>
          </ul>
       
      </nav>
    </>
  );
}

export default Navbar;
