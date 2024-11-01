import { Link } from "react-router-dom";
import { TbHome } from "react-icons/tb";
import { PiNotepad } from "react-icons/pi";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { AiOutlineProduct } from "react-icons/ai";
import { ImInfo } from "react-icons/im";
import { BsCart3 } from "react-icons/bs";
import { BiSolidCollection } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";
import { GiBuyCard } from "react-icons/gi";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-8 py-6'>
      <div>
        <Link to='/'>
          <GiDiceTwentyFacesTwenty className='h-16 w-16  hover:text-red-600 transition-colors duration-300' />
        </Link>
      </div>
      <div className='flex gap-4 flex-row'>
        <Link to='/home'>
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
            <AiOutlineProduct className='inline-block ml-1' />
          </p>
        </Link>
        <Link to='/about'>
          <p className='text-2xl  hover:text-red-600 transition-colors duration-300'>
            About
            <ImInfo className='inline-block ml-1' />
          </p>
        </Link>
        <Link to='/cart'>
          <p className='text-2xl  hover:text-red-600 transition-colors duration-300'>
            Cart
            <BsCart3 className='inline-block ml-1' />
          </p>
        </Link>
        <Link to='/collection'>
          <p className='text-2xl  hover:text-red-600 transition-colors duration-300'>
            Collection
            <BiSolidCollection className='inline-block ml-1' />
          </p>
        </Link>
        <Link to='/contact'>
          <p className='text-2xl  hover:text-red-600 transition-colors duration-300'>
            Contact
            <MdOutlineContactSupport className='inline-block ml-1' />
          </p>
        </Link>
        <Link to='/placeorder'>
          <p className='text-2xl  hover:text-red-600 transition-colors duration-300'>
            Place Order
            <GiBuyCard className='inline-block ml-1' />
          </p>
        </Link>
        <Link to='/login'>
          <p className='text-2xl  hover:text-red-600 transition-colors duration-300'>
            Login
            <BiLogIn className='inline-block ml-1' />
          </p>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
