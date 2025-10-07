import { BsMailbox2, BsMapFill, BsPhoneFill } from 'react-icons/bs'

const Contact = () => {
  return (
    
      <div id='contact' className=' relative z-0 lg:w-8/12 md:w-11/12 w-full flex-col m-auto text-sm lg:text-base  py-8 dark:text-white text-black'>
        <p className='text-2xl font-extrabold lg:ml-0 ml-4'>Contact Now</p><hr className='my-4' />

        <div className='w-full h-[300px] flex m-auto my-4 '>
          <iframe className='w-full h-full rounded-md outline-none' frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Mangaon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div>

        <div className=' w-full lg:flex m-auto'>
          <div className='lg:w-1/2 flex-col justify-center items-center '>
            <div className='flex justify-startitems-center  gap-4 m-4'>
              <BsMapFill />
              <p>
                <span className=' font-bold'>Address: </span>
                Mangaon, Raigad, Maharashtra, India,<br />
                Pin: 402112
              </p>
            </div>
            <div className='flex justify-start items-center gap-4  m-4'>
              <BsPhoneFill />
              <p className=' font-bold'>Contact:</p>
              <p>+91 7768882495 </p>
            </div>
            <div className='flex justify-start items-center gap-4  m-4'>
              <BsMailbox2 />
              <p>
                <span className=' font-bold'>Email: </span>
                dalvishrikant5456@gmail.com </p>
            </div>
          </div>

          <div className='lg:w-1/2 p-4 '>
            <p className='text-xl font-semibold m-2'>Send  Message </p><hr className='my-4 ml-2 border-white' />
            <form action="https://formspree.io/f/mjkbygqk" method="POST" className='text-black dark:text-white'>
              <input className='inp border dark:border-white border-black ' placeholder='Name' type="text" name='Name' required />
              <input className='inp border dark:border-white border-black ' placeholder='Email' type="email" name="email" required />
              <textarea className='inp border dark:border-white border-black ' cols={4} rows={4} placeholder='Message' name="message" type="text" required />
              <button type='submit' className='box  ml-2 anime bg-primary hover:bg-primary font-semibold px-4 py-1  transition-all text-sm text-white'>Hire Me</button>
            </form>
          </div>
        </div>
      </div>
    
  )
}
export default Contact