import React from 'react'

const FooAppLink = () => {
  return (
    <>
    <div className='md:px-[330px] py-[80px]' >
            <div className=" flex   flex-col gap-5 bg-transparent items-center ">

<span className="text-black md:text-[18px] text-[12px] font-bold  bg-transparent   ">
  For better experience,download the Swiggy app now
</span>
<div className="flex" >
<img
  className="md:w-[150px] w-[100px] bg-transparent block md:inline "
  src="../public/images/Footer/play_store.avif"
  alt="Play Store"
/>

<img
  className="md:w-[150px] w-[100px] bg-transparent  "
  src="../public/images/Footer/app_store.avif"
  alt=" App Store"
/>
</div>
</div>
</div>
    </>
  )
}

export default FooAppLink
