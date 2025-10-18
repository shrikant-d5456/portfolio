import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';

const Header = () => {
  return (
    <div className=' fixed w-full sm:bottom-1 bottom-0 flex justify-center items-center m-auto z-20  '>
      <Bounce>
      <ul className=' w-fit bg-[#ffffff7f] border shadow-md backdrop-blur-md text-gray-600 flex justify-between items-center gap-8 lg:text-sm px-8 py-4 sm:rounded-full font-semibold text-xs '>
        <li ><a href="#about">About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>
      </Bounce>
    </div>
  )
}
export default Header