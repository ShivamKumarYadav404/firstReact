//import Navbar from './component/Navbar'
//import YouTube from './component/YouTube'
//import Test from './component/Test'
//import './App.css'
//import PasswordGenerator from "./component/PasswordGenerator"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//import Dsp from './DspCollege/Dsp'
//import AcademicDsp from './DspCollege/AcademicDsp'
//import AdmissionDsp from './DspCollege/AdmissionDsp'
//import NoticeDsp from './DspCollege/NoticeDsp'
//import ContactDsp from './DspCollege/ContactDsp'
//import StudyDsp from './DspCollege/Study'
//import AboutDsp from './DspCollege/AboutDsp'
//import MEdsp from './DspCollege/MEdsp'
import React from "react"
import Test from "./component/Test"
import Test2 from "./component/Test2"

function App() {
    return ( 
    <>

        <BrowserRouter>
       
        <Routes>
            <Route path='/' Component={<Test/>}/>
            <Route path='./sumit.test' Component={<Test2/>}/>

        </Routes>
    
        
        </BrowserRouter>

       {/*<BrowserRouter>
        <Routes>
            <Route path='/' element={<Dsp/>}/>
            <Route path='/About.dsp' element={<AboutDsp/>}/>
            <Route path='/Academic.dsp' element={<AcademicDsp/>}/>
            <Route path='/Admission.dsp' element={<AdmissionDsp/>}/>
            <Route path='/Study.dsp' element={<StudyDsp/>}/>
            <Route path='/Notice.dsp' element={<NoticeDsp/>}/>
            <Route path='/Contact.dsp' element={<ContactDsp/>}/>
            <Route path='/ME.dsp' element={<MEdsp/>}/>

            </Routes>
        </BrowserRouter>*/}
       
       {/*<Navbar img1={img1} img2={img2} img3={img3}/>*/}
       </>
      
    )
}

export default App
