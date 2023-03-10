import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useStateContext } from '../context';
import { CustomButton } from './';
import {  dashboard, search, logout} from '../assets';
// import { navlinks } from '../constants';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#e1e1e8] rounded-[100px]">
        <input type="text" placeholder="Search..." className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
        
        <div className="w-[72px] h-full rounded-[20px] bg-[#2c23a6] flex justify-center items-center cursor-pointer">
          <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>
        </div>
      </div>

     


      <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton 
          btnType="button"
          title={address ? 'Create a nft' : 'Connect'}
          styles={address ? 'bg-[#2c23a6]' : 'bg-[#000000]'}
          handleClick={() => {
            if(address) navigate('create-nft')
            else connect()
          }}
        />
        <Link to="/">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c23a6] flex justify-center items-center cursor-pointer">
            <img src={dashboard} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>



        <Link to="/logout">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c23a6] flex justify-center items-center cursor-pointer">
            <img src={logout} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

     
    </div>
  )
}

export default Navbar