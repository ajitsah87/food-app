function Navbar() {
  return (
    <>
      <div className="flex items-center justify-center py-4 px-4 w-full bg-green-500  text-lg text-white ">
        <div className="  text-base  md:flex md:justify-between w-1/3 md:pt-0">Logo</div>
        <div className="hidden w-full md:flex md:items-center md:w-auto">
          <ul className="flex gap-8">
            <li>HOME</li>
            <li>MENU</li>
            <li>RESERVATION</li>
            <li>PAGES</li>
            <li>BLOG</li>
            <li>CONTACT</li>
            <li>CONTACT</li>
            <li>CONTACT</li>
            <li>CONTACT</li>
            <li>CONTACT</li>
            <li>CONTACT</li>
            <li>CONTACT</li>
            <li>CONTACT</li>
            <li>CONTACT</li>
            {/* svg */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
