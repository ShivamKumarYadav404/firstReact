import React,{useState,useEffect, } from 'react'
import { Link } from 'react-router-dom'



function Dsp() {

    const [menuOpen,setMemuOpen]=useState(false)
    const menuClick=()=>{
        setMemuOpen(!menuOpen)

    }
    const [depOpen,setDepOpen]=useState(false)

    const depClick=()=>{
        setDepOpen(!depOpen)

    }
    const [currentImg,setCurrentImg]=useState(0)

    const [slide,setSlide]=useState([
        {id:1,Image:'/images/japan.jpg'},
        {id:2,Image:'/images/high-quality.png'},
        {id:3,Image:'/images/boxshot.png'},
        {id:4,Image:'/images/kid.png'},
        {id:5,Image:'/images/netflix_hero.jpg'}
    
        ]);
        useEffect(()=>{
            const interval=setInterval(()=>{
                setCurrentImg((currentImg+1)%slide.length)
            },10000)
            return ()=>clearInterval(interval);
        },[currentImg,slide,setSlide])


    return (
        <>
        <div className=''>
            <div className='w-full flex items-center sm:h-20  justify-around h-12 bg-orange-400'>
                    <div className='bg-orange-700 flex text-white justify-center rounded-sm items-center w-28 h-1/2'>
                       <Link to="/Contact.dsp"><span href="contactUs">Contact Us </span></Link> 
                    </div>
                     
            <div className='language bg-white rounded-sm text-black sm:h-7 w-24 h-1/2 flex justify-center items-center'>
                <select className='w-24 ' name="language">
                    <option value="english">English </option>
                    <option value="hindi">Hindi </option>
                </select>
            </div>
             </div>
             <div className='w-full flex items-center bg-white sm:h-60 text-black h-20'>
                <div className='college_logo h-16 w-1/5 flex justify-center items-center '>
                    <img
                    className='w-44 ' 
                    src="/images/Jexpo.png" alt="logo" />

                </div>
                <div className='h-16 gap-1 w-4/5'>
                    <h1 className='text-center sm:text-4xl sm:font-extrabold font-semibold text-[15px]'>West Bengal State Council For Vocational Training</h1>
                    <p className='text-center font-medium sm:text-2xl sm:font-bold text-[12px]'>Dasnagar Government Polytechnic</p>
                </div>
             </div>
             <div className='w-full flex items-center justify-around sm:h-28 h-16 bg-blue-600'>
                <div onClick={menuClick} className='w-20 sm:w-36 justify-center rounded-md flex items-center bg-white text-black h-1/2'>
                    <span className='text-[14px] sm:text-3xl sm:font-bold cursor-pointer font-semibold'>|| Menu ||</span>
                </div>
                <div onClick={depClick} className='bg-white cursor-pointer justify-center rounded-md items-center flex w-24 h-1/2'>
                    <span className='text-black text-center font-semibold text-[13px]'>Student Login</span>
                    </div>
             </div>
             {menuOpen &&(
                <div className='w-full top-48 absolute flex-col flex'>
                <div className='w-5/6 rounded-md
                  cursor-pointer h-60'>
                    <div className='bg-white relative flex text-lg justify-around items-center text-blue-600 border-b-2 border-black font-semibold h-1/6'>
                      <Link to="/About.dsp"><stan>About Us</stan></Link>
                        <span >+</span>
                    </div>
                    <div className='bg-white flex text-lg justify-around items-center text-blue-600 border-b-2 border-black font-semibold h-1/6'>
                      <Link to="/Academic"><span>Acamedic</span></Link>
                        <span >+</span>
                    </div>
                    <div className='bg-white flex text-lg justify-around items-center text-blue-600 border-b-2 border-black font-semibold h-1/6'>
                        <span>Admission</span>
                        <span >+</span>
                    </div>
                    <div onClick={depClick} className='bg-white flex text-lg justify-around items-center text-blue-600 border-b-2 border-black font-semibold h-1/6'>
                        <span>Department</span>
                        <span >+</span>
                    </div>
                    <div className='bg-white flex text-lg justify-around items-center text-blue-600 border-b-2 border-black font-semibold h-1/6'>
                        <span>Study material</span>
                        <span >+</span>
                    </div>
                    <div className='bg-white flex text-lg justify-around items-center text-blue-600 border-b-2 border-black font-semibold h-1/6'>
                        <span>Notice</span>
                        <span >+</span>
                    </div>

               </div>
                <div className='w-full flex justify-center items-center h-12'>
                    <button onClick={menuClick} className='w-20 h-10 bg-red-600 flex justify-center items-center rounded-2xl text-2xl text-white' >Close</button>
                </div>

               </div>
             )}
             <div className='w-full bg-white border-b-green-400 border-b-4 flex justify-center sm:w-full sm:h-72 items-center overflow-hidden h-60'>
                <div className='w-4/6  flex justify-center sm:h-72 sm:w-64 items-center h-44 '>
                {slide.map((slide,index)=>(
                    <img 
                    className={` w-4/5 sm:h-72 rounded-xl sm:w-64 h-44 object-cover ${
                        index===currentImg?'block':'hidden'
                        }`}
                    src={slide.Image}
                    alt=''
                    
                    />
                ))}

                </div>
                
             </div>
       
             <div className='flex h-10 items-center w-full text-3xl font-serif font-medium underline justify-center'>
                <h2>Announcments</h2>
             </div> 
             <div className='w-full flex justify-center h-[700px] bg-orange-400'>
             <div className='w-11/12 text-sm font-medium mt-4 bg-blue-300 h-[670px]'>
                <ul className='list-item'>
                <li className='text-center'>** First year students internal exam will be started from 30 Sep 2024 download your exam routine inside Menu Department--your stream </li>
                <li className='text-center'>** Intership of final year students started soon please visit office regular </li>
                <li className='text-center'>** Announcment for Information technology students to wear college dress code during college times</li>
                <li className='text-center'>** First year students internal exam will be started from 30 Sep 2024 download your exam routine inside Menu Department--your stream </li>
                <li className='text-center'>** Intership of final year students started soon please visit office regular </li>
                <li className='text-center'>** Announcment for Information technology students to wear college dress code during college times</li>
                <li className='text-center'>** First year students internal exam will be started from 30 Sep 2024 download your exam routine inside Menu Department--your stream </li>
                <li className='text-center'>** Intership of final year students started soon please visit office regular </li>
                <li className='text-center'>** Announcment for Information technology students to wear college dress code during college times</li>
                </ul>
             </div>

        </div>

        </div>
        <div className='bg-black flex justify-center items-center text-white w-full h-[250px]'>
            <div className='flex justify-around'>
                <div>
                   <span href="">Know our college by visiting It</span>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
        {depOpen &&(
            <div className='absolute top-64 w-44 h-32 gap-2 cursor-pointer flex flex-col justify-center items-center text-sm bg-blue-500 text-white  left-1/2'>
              <Link to="/ME.dsp"><span >Mechanical Engineering</span></Link>
                <span>Civil Engineering</span>
                <span className='text-center'>Information technology & Engineering</span>
                <button onClick={depClick} className='bg-red-600 flex justify-center items-center rounded-sm w-10 h-5 text-[10px]'>Close</button>
            </div>
        )}
        
        </>
    )
}
export default Dsp
