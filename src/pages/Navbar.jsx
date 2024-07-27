import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full backdrop-blur md:backdrop-blur-none  flex justify-center fixed top-0 z-10'>
      <div className=' w-full flex items-center justify-start px-8 py-4 font-semibold text-white '>
      
        <div className='flex justify-center items-center gap-4'><span className="circle pulse blue"></span>Awailable to Work</div>
        <div className='lg:flex hidden  justify-center items-center'>
         
          {/* <li className='flex gap-8 '>
            <ul >
              Home
            </ul>
            <ul >
              Tratements
            </ul>
            <ul  >
              About
            </ul>
            <ul  >
              Contact
            </ul>
          </li> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
