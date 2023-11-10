import React from 'react'
import Image from "next/image";
import Block from './Block';
const Header1 = () => {
  return (
    <div className=" flex justify-between border-b-2 border-gray-300 items-center h-15 px-10">
       < Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className=" w-28 h-28 "
      />
      <div className='border-r-2 border-gray-300 h-full flex'></div>
      <Block
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block title={"List your property"} para={"Start earning in 30 min."} />
        <Block title={"7050249009"} para={"Call us to book now."} />
        <div className='flex items-center'>
        <Image
        src={"/demo.svg"}
        alt="demo"
        width={200}
        height={200}
        className=" w-10 h-10 rounded-full mr-5"
      /> 
<h3 className="font-bold"> Login/Singup </h3>
         </div>
    </div>
  )
}

export default Header1

