import React, { useEffect, useRef, useState } from "react";
import './Suggestion.css';

const Practise = () => {

const scrollRef = useRef();

const [leftData, setleftData] = useState();
const [rightData, setrightData] = useState();





const LeftSection = () => {
    scrollRef.current.scrollBy({left: -200, behaviour:'smooth'})
}

const RightSection = () => {
    scrollRef.current.scrollBy({ left: 200, behaviour:'smooth'})
}




const handleScroll = () =>{
    const sami = scrollRef.current
    if (!sami) return;

    setleftData(sami.LeftSection > 0)
    setrightData(sami.LeftSection + sami.clientWidth < sami.scrollWidth)
}




useEffect(()=> {
    const scrollE2 = scrollRef.current;
    handleScroll();

    if (scrollE2) {
        scrollE2.addEventListner('scroll', handleScroll)
    }

    if (scrollE2){
        scrollE2.removeEventListner('scroll', handleScroll)
    };
},[]);


  return (
    <div className="navbar-suggestion-container">
        {setleftData && (
      <button className="scroll-arrow left" onClick={LeftSection}>
        <IoIosArrowBack />
      </button>
      )}

      <div className="navbar-suggestion-scroll" ref={scrollRef}>
        <div className="navbar-suggestion-buttons">
          <button>All</button>
          <button>Thrillers</button>
          <button>Sharman Joshi</button>
          <button>Live</button>
          <button>Hyundai</button>
          <button>Asin</button>
          <button>Mixes</button>
          <button>Dramedy</button>
          <button>T-Series</button>
          <button>Music</button>
          <button>Web Development</button>
          <button>Playlists</button>
          <button>Meditation music</button>
          <button>Automotive Exteriors</button>
          <button>Rapping</button>
          <button>Hindu Music</button>
          <button>Information</button>
          <button>Recently uploaded</button>
          <button>Watched</button>
          <button>New to you</button>
        </div>
      </div>

{setrightData && (
      <button className="scroll-arrow right" onClick={RightSection}>
        <IoIosArrowForward />
      </button>
      )}
    </div>
  );
};
export default Practise;
