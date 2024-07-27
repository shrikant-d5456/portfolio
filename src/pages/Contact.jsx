import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='flex-col m-auto lg:w-10/12 lg:p-8 lg:my-8 text-sm lg:text-base mt-10'>
      <p className='text-2xl font-extrabold lg:ml-0 ml-4'>Contact Now</p><hr className='my-4' />

        <div className='w-full h-[300px] flex m-auto my-4 '>
          <iframe  className='w-full h-full rounded-md' frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Mangaon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div>

        <div className=' w-full lg:flex m-auto'>

          <div className='lg:w-1/2 flex-col justify-center items-center '>

            <div className='flex justify-start items-center m-4'>
              <img
                className='w-10 h-10 m-4 bg-white rounded-full'
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/address-1522724-1289410.png?f=webp&w=256" alt="" />
              <p>Address : <br />Place : Mangaon, Dist.: Raigad, State : Maharashtra, India,<br />
                Pin : 402112 </p>
            </div>

            <div className='flex justify-start  items-center m-4'>
              <img
                className='w-10 h-10 m-4 bg-white rounded-full'
                src="https://cdn.iconscout.com/icon/free/png-512/free-phone-2015-1100768.png?f=webp&w=256" alt="" />
              <p>Phone : <br />
              +91 77688824 </p>
            </div>

            <div className='flex justify-start  items-center m-4'>
              <img
                className='w-10 h-10 m-4 bg-white rounded-full'
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/address-54-103144.png?f=webp&w=256" alt="" />
              <p>Email : <br />
              dalvishrikant@gmail.com </p>
            </div>

          </div>

          <div className= 'lg:w-1/2 p-4 '>
          <p className='text-xl font-semibold m-2'>Send  Message </p><hr className='my-4 ml-2 border-white'/>

          <form  action="https://formspree.io/f/mjkbygqk" method="POST">
          <input className='inp' placeholder='Name' type="text" name='Name' required/>

          <input className='inp' placeholder='Email' type="email" name="email" required/>

          <textarea className='inp' cols={4} rows={4} placeholder='Message' name="message" type="text" required/>
          <button type='submit' className='ml-2 py-2 px-4 bg-[#00d0ff] font-semibold text-white'>Hire Me</button>
          </form>
          </div>

        </div>

      </div>
    </>
  )
}

export default Contact