import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    // const myElement = document.querySelector("#myElement");
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: [
        "Constructor!",
        "Expert Man!",
        "Man of word",
        "brother of Mhamad ",
      ],
    });

    console.log(textRef);
  }, []);
  //   render(){
  //     return <div id="myElement"></div>
  // }
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/hadi1.jpg' alt='hadi' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1> Hadi Ahmad </h1>
          <h3>
            <span ref={textRef}>.. </span>/ Freelancer
          </h3>
          <a href='#portfolio'>
            <img src='assets/down.png' alt='f' />
          </a>
        </div>
      </div>
    </div>
  );
}
