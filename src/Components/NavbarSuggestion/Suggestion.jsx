import React, { useRef, useState, useEffect } from 'react';
import './Suggestion.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Suggestion = () => {

  const scrollRef = useRef(null)
    const [leftScroll,setleftScroll] = useState(false);
    const [rightScroll, setrightScroll] = useState(true);
 






    const ScrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };


    const ScrollRight = () => {
        scrollRef.current.scrollBy({left: 200, behavior: 'smooth'});
    };


    const handlescroll = () => {
        const sami = scrollRef.current;
        if (!sami) return;

        setleftScroll(sami.scrollLeft > 0);
setrightScroll(sami.scrollLeft + sami.clientWidth < sami.scrollWidth);

    }



useEffect(()=>{
    const scrollE1 = scrollRef.current;
    handlescroll();

    if (scrollE1) {
        scrollE1.addEventListener('scroll', handlescroll);
    }
    return () => {
        if (scrollE1) {
            scrollE1.removeEventListener('scroll', handlescroll)
        };
    };
},[])

  return (
    <div className="navbar-suggestion-container">
      {leftScroll && (
        <button className="scroll-arrow left" onClick={ScrollLeft}>
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

      {rightScroll && (
        <button className="scroll-arrow right" onClick={ScrollRight}>
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};

export default Suggestion;
