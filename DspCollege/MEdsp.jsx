import React, { useState } from 'react'
    const validateNames=["shivam kumar yadav","roshan pandey","sourav yadav"];

function MEdsp() {


    const [fullName, setFullName] = useState('');
    const [isValid, setIsValid] = useState(null);



    const handleNameChange = (e) => {
        setFullName(e.target.value);
    };

    const validateName = () => {
        if (validateNames.includes(fullName.trim())) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const [registrationNumber,setRegistrationNumber]=useState("")

  return (
    <>
     <div className='w-full h-12 flex justify-center items-center text-white bg-blue-500 font-medium '><h4>Mechanical Engineering students login</h4></div>
    <div className='w-full flex flex-col justify-center items-center h-[550px] bg-white'>
        <div className='bg-blue-500 rounded-sm-500 w-5/6 rounded-lg h-5/6'>
        <div className='w-full gap-2 justify-around border-b-black border-2 h-12 flex items-center'>
            <select name="Semester check" className='w-24 text-sm text-center font-medium h-6'>
                <option value="1st Year">FIRST YEAR</option>
                <option value="2nd Year">SECOND YEAR</option>
                <option value="3rd Year">THIRD YEAR</option>
            </select>
            <div className='flex'>
                <input onChange={handleNameChange} value={fullName} className='px-2 w-4/5 text-sm placeholder:text-red-500' type="text" placeholder='Full Name' />
                <button className='bg-orange-400 w-12 h-6 rounded-tr-md rounded-br-md flex justify-center items-center text-white text-sm  ' onClick={validateName}>verify</button>
                </div>
                {isValid !== null && (
                    <div className={`absolute flex text-xs justify-center items-center h-6 top-12 ${isValid ? 'bg-green-500 w-32 text-white':'bg-red-600 w-40 text-white'}`}>
                <h5>
                    {isValid ? 'Name is valid!' : 'Name is not valid.'}
                </h5>
                </div>
            )}


        </div>
        <div className='flex gap-2 justify-centeric flex-col items-center'>
            <h5 className='text-white'>Enter registration Number</h5>
            <input className='w-5/6 px-2 rounded-md h-6' type="text" value={registrationNumber} onChange={(e)=>setRegistrationNumber(e.target.value)} placeholder='Registration No.' />
        </div>
        
        </div>
      
    </div>
    </>
  )
}

export default MEdsp
