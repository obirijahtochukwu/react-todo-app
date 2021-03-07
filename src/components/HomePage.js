import React from 'react'
import { FaGlobe, FaTv, FaUnlock, FaVideo } from 'react-icons/fa';


export default function HomePage() {
 return (
  <>
   <div className="container-fluid">
    <div className="row header-img" style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url(img/img-3.jpeg)'}}>
     <h1>welcome to <span className="text-uppercase text-warning">biswa api</span></h1>
     <p>stream your video on any platform</p>
     <button className="btn-inline mb-4">get started</button>
    </div>
   </div>

      {/* ICON */}
   <div className="container">
    <div className="row text-center">
     <div className="col-6 mx-auto  icon col-md-3 ">
      <img src="./img/logo1.png" alt=""/>
     </div>
     <div className="col-6 mx-auto  icon col-md-3 ">
      <img src="./img/logo2.png" alt=""/>
     </div>
     <div className="col-6 mx-auto  icon col-md-3 ">
      <img src="./img/logo3.png" alt=""/>
     </div>
     <div className="col-6 mx-auto  icon col-md-3 ">
      <img src="./img/logo4.png" alt=""/>
     </div>
     <div className="col-6 mx-auto  icon col-md-3 ">
      <img src="./img/logo5.png" alt=""/>
     </div>
     <div className="col-6 mx-auto  icon col-md-3 ">
      <img src="./img/logo6.png" alt=""/>
     </div>
     <div className="col-6 mx-auto  icon col-md-3 ">
      <img src="./img/logo7.png" alt=""/>
     </div>
     <div className="col-6 mx-auto icon  col-md-3 ">
      <img src="./img/logo9.png" alt=""/>
     </div>
    </div>
   </div>

   {/* INTRODUCTION SECTION */}
   <div className="container">
    <div className="row mt-5">
     <div className="col-md-6 mx-auto">
      <div className="quote">
       <h2 className="text-uppercase">biswa api</h2>
       <p><i>Biswa Video is an API that enables developers to build unique live and on-demand video experiences.</i></p>
      </div>
     </div>
     <div className="col-md-6 mx-auto m-4">
      <img src="../img/item13.jpg" style={{width:'100%'}} alt=""/>
     </div>
    </div>
   </div>


   {/* CARD */}
   <div className="container-fluid">
    <div className="row mt-3">
     <div className="col-10 mx-auto col-md-6 col-lg-2 card-1"> 
      <FaVideo className='font pb-3'/>
      <h2>One API. Everything video</h2>
      <p>From capture to playback in minutes, not months.</p>
     </div>
     <div className="col-10 mx-auto col-md-6 col-lg-2 card-2">
      <FaUnlock className='font pb-3'/> 
      <h2>Own your platform.</h2>
      <p>Streaming video that adapts to your workflow and not the other way around.</p>
     </div>
     <div className="col-10 mx-auto col-md-6 col-lg-2 card-3">
      <FaTv className='font pb-3'/> 
      <h2>Built-in video expertise.</h2>
      <p>Decisions are driven by data for better quality, reliability, and speed.</p>
     </div>
     <div className="col-10 mx-auto col-md-6 col-lg-2 card-4">
      <FaGlobe className='font pb-3'/>
      <h2>Global scale and performance.</h2>
      <p>Whether you're serving a few dozen streams or a few million, we’ll manage it so you don’t have to.</p>
     </div>
    </div>
   </div>
   <br/>


   {/* VIDEO */}
   <div className="container-fluid">
      <h5 className='text-center mt-5 pb-3' style={{color:'orange'}}>API VIDOE</h5>
      <h1 className='text-center' >Video, in seconds.</h1>
      <div className="row">
         <div className="col-11 mx-auto col-md-5">
            <h5 className='text-center mt-5 pb-3' style={{color:'orange'}}>STEP 1</h5>
            <h2 className='py-4' >POST a video.</h2>
            <p>POST the URL of any video file using the Biswa API. Biswa will ingest the file, create a video asset, and prepare it for streaming.</p>
         <div className="link">
            <p>POST https//api.biswa.com/video/v1/assets</p>
         </div>
         </div>
         <div className="col-11 mx-auto col-md-5">
            <h5 className='text-center mt-5 pb-3' style={{color:'orange'}}>STEP 2</h5>
            <h2 class Name='text-center py-4' >Stream it anywhere.</h2>
            <p>Add the Playback ID to stream.biswa.com. biswa instantly creates the right renditions for every device and bandwidth, resulting in lower costs and better viewer experiences. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio dignissimos iste non impedit delectus aspernatur officia saepe cupiditate qui adipisci?</p>
                     <div className="link mb-5">
            <p>POST https://api.biswa.com/video/v1/assets</p>
         </div>
         </div>
      </div>
   </div>
   <div className="container-fluid">
      <div className="ready">
         <div className="row">
          <div className="col-11 mx-auto col-md-6">
           <h1 className="text-center">Ready to get started?</h1>
           <p>No credit card to start. $20 in free credit when you’re ready.
           </p>
         <button className="btn-inline m-4">create account</button>
          </div>
         </div>
         <br/>
         <hr/>
         <br/>
         <div className="row">
            <div className="col-11 mx-auto col-md-5 mt-5">
               <h3 className='mb-3'>Better quality through data. biswa Data.</h3>
               <p className='mb-5'>Our meticulously designed metrics and powerful filtering tools help you see what your users are really experiencing, around the world and across devices.</p>
               <button className="btn-outline">learn more about biswa data</button>
            </div>
            <div className="col-12 col-md-6 mx-auto mt-5">
               <img src="../img/biswa.png" style={{width:'100%'}} className='img' alt=""/>
            </div>
         </div>
      </div>
   </div>

  </>
 )
}
