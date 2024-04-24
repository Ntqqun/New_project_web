import "./Home.css";

// домашня сторінка
export const Home = () => {
  return (
    <>

    <div className="homePage">
    {/* <div className="homeStory">Вітаємо на сайті магазину "Україна". 
     Тут ви зможете дізатися більше про нас. </div> */}
     <img className="homeMainPhoto" src="images/Магазин1.JPG" />
   

<div className="secondBlock">
<img src="images/Магазин2.JPG" className="homePhoto" />
<img src="images/Магазин3.JPG" className="homePhoto" />
</div>

     </div>
 
  </>);
};