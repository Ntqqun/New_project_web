
import "./Assortment.css"
import {  NavLink } from "react-router-dom";

// сторінка про додаткову інформацію
export const Assortment = () => {
  return (
    <>
    
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-1-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z"/>
</svg> */}



<div className="assortmentPage">

      <div className="assortmentInfo">
       

       <div className="connectingBlock  connectingBlockSpecial"> 
      <li >
          <NavLink  className="numbers" to="/assortmantPage1">1</NavLink>
        </li> 
        <div className="assortmentWords">Побутова техніка</div>
      {/* <a className="assortmantLink">1</a> */}

       {/* End connecting block */}
      </div>


      <img className="assortmentPhoto" src="images/Асортимент1.jpg"  />
       {/* End assortmentInfo block */}
      </div>

      <br />
      
     
      <div className="assortmentInfo">
      <div className="connectingBlock"> 

      <li >
          <NavLink className="numbers" to="/assortmantPage2">2</NavLink>
        </li> 
        <div className="assortmentWords specialWords"><div>Сантехніка, люстри,</div> товари для електрики,<div>водопровід</div> </div>
      {/* <a className="assortmantLink">2</a> */}

 {/* End connecting block */}
      </div>

      <img className="assortmentPhoto specialPhoto2" src="images/Асортимент2_11.jpg"  />

       {/* End assortmentInfo block */}
      </div>
      
      <br />

      <div className="assortmentInfo">
      <div className="connectingBlock"> 
        
      <li >
          <NavLink className="numbers" to="/assortmantPage3">3</NavLink>
        </li> 
        <div className="assortmentWords">
      <div>Товари </div>  <div>для покриття  підлоги,</div>   <div>карнізи, оверлок</div></div>
      {/* <a className="assortmantLink">3</a> */}

      {/* End connecting block */}
      </div>


      <img className="assortmentPhoto" src="images/Асортимент3.jpg"  />

      {/* End assortmentInfo block */}
      </div>
    
    {/* End assortmentPage block  */}
      </div>
    </>
  );
};