import { Link } from "react-router-dom";
import { TbHome } from "react-icons/tb";
import { PiNotepad } from "react-icons/pi";
import { TbInfoCircle } from "react-icons/tb";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 py-6'>
      <div>
        <Link to='/'>
          <GiDiceTwentyFacesTwenty className='h-16 w-16  hover:text-red-600 transition-colors duration-300' />
        </Link>
      </div>
      <div className='flex gap-4 flex-row'>
        <Link to='/'>
          <p className='text-2xl  hover:text-red-600 transition-colors duration-300'>
            Home <TbHome className='inline-block ml-1' />
          </p>
        </Link>
        <Link to='/orders'>
          <p className='text-2xl  hover:text-red-600 transition-colors duration-300'>
            Orders
            <PiNotepad className='inline-block ml-1 ' />
          </p>
        </Link>
        <Link to='/products'>
          <p className='text-2xl  hover:text-red-600 transition-colors duration-300'>
            Products
            <TbInfoCircle className='inline-block ml-1' />
          </p>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
