import React, { useEffect, useState } from "react";
import image from "../assets/assets/WhatsApp Image 2023-12-07 at 7.17.28 PM.jpeg";
function Home() {
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const content = "Full stack developer";
  const [first,setFirst]=useState(true)

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (charIndex <= content.length&&first) {
        setText(content.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if(charIndex==content.length)setFirst(false)
      }
      else if(!first){
        setText(content.substring(0, charIndex + 1));
        setCharIndex(charIndex-1)
        if(charIndex==1){
            setFirst(true)
        }
      }
    }, 70);

    return () => clearTimeout(typingTimer);
  }, [charIndex, content]);
  return (
    <div className="h-96 flex mt-8">
      <div className="w-3/5 flex justify-center items-center">
        <div className="text-violet-400 ">
          <p className="font-semibold text-2xl" style={{ fontSize: "9vh" }}>
            Mohamed Nayeem CE
          </p>
          <p className="mt-3 text-2xl">{text}</p>
        </div>
      </div>
      <div className="w-2/5">
        <img
          src={image}
          alt=""
          className="rounded-lg shadow-xl"
          style={{ height: "75vh" }}
        />
      </div>
    </div>
  );
}

export default Home;
