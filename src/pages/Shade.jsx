import React from 'react'

const Shade = () => {

    return (
        <>

            <div className='w-screen h-screen absolute overflow-hidden '>

                <div className=' absolute  left-[-390px] top-1'>
                    <div className='shade-blue relative left-[130px] top-[-150px]'>
                    </div>
                    <div className='shade-blue relative left-[150px] top-[-100px]'>
                    </div>
                    <div className='shade-blue relative left-[270px] top-[-100px]' >
                    </div>
                </div>



                <div className=' absolute top-[90%] right-1'>
                    <div className='shade-blue relative left-[130px] top-[-150px]'>
                    </div>
                    <div className='shade-blue relative left-[200px] top-[-100px]'>
                    </div>
                    <div className='shade-blue relative left-[367px] top-[-100px]' >
                    </div>
                </div>



            </div>
        </>

    )
}

export default Shade;
