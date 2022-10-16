import React from "react";
import Sidebar from "./Sidebar";
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';

const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">

      <h1><u>JavaScript TypedArray reduce() Method</u></h1>

      <tr><h2 align="left">reduce() method</h2>
        <p>The JavaScript reduce() method reduces the elements of an array into a single value and the returned value of the function is stored in an accumulator and each element in the array (from left to right) 
          has to reduce it to a single value.

</p>
          <h2>Syntax</h2>
          <img src={image1} alt="image1" align="left" style={{width:'60'}}/>
          </tr><tr>
            <h2 align='left'>parameters:</h2>


<ul>
  <li>Total(required): The previously returned value of the function.</li>
  <li>CurrentValue(Required): The value of the current element.</li>
  <li>Index(Optional): The index of the current element being processed in the array. Starts at index 0.

</li>
  <li>Arr(Optional): The array reduce() was called upon.</li>
  <li>InitialValue(Optional): A value to be passed to the function as the initial value.</li>
</ul>
      </tr>

      <tr><h2 align="left"><b>Return value:</b></h2>
      <p><b>Return the reduced single value of the array.</b></p></tr>
     












<tr>
      <h2 align="left"> Example 1</h2>
      <p><b>JavaScript reduce() Method</b></p><br/>



          

             <img src={image2} alt="image2" align="left" style={{width:'50%'}}/> <br/></tr><tr></tr><tr></tr><tr><h3 align="left" >output:</h3></tr><tr>
             
             <img src={image3} alt="image3" align="left" style={{width:'60'}}/>

</tr>


<tr>
      <h2 align="left"> Example 2</h2>
      <p><b>JavaScript reduce() Method</b></p><br/>



          

             <img src={image5} alt="image5" align="left" style={{width:'70%'}}/> <br/></tr><tr></tr><tr></tr><tr><h3 align="left" >output:</h3></tr><tr>
             
             <img src={image6} alt="image6" align="left" style={{width:'60'}}/>

</tr>
          
      

      





          <br/>
          <br/>
          <br/>

      
      <br/>
        
        

      
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;