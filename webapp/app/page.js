"use client"
import {useState} from "react";
export default function Home() {

  const [text, setText] = useState("");
  const handleChange = (e) => {
    
    setText(e.target.value);
    
  };
  return (
    
    <div className="m-16   flex flex-col gap-3">
    <h1 className="font-semibold text-gray-600 text-2xl lg:text-3xl ml-10">Code,Compile & Run..</h1>
    <form className="flex flex-col gap-4 p-10">
    <label className="flex flex-row gap-3 items-center">
    Username 
    <input type="text" className="p-2 border-2  rounded-sm"></input>
    </label>
    
    <label className="flex flex-row gap-3 items-center">
    Prefered Language
    <select className="p-2 border-2 rounded-sm">
            <option value="">Select</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
    </label>
    <div className="w-[90%] h-[350px] lg:w-full lg:h-[450px] border-2">
    <textarea
          value={text}
          onChange={handleChange}
          className="flex-grow items-center h-full overflow-y-scroll p-4  w-full  placeholder-gray-700 placeholder-opacity-50 leading-4 text-md cursor-text text-gray-600"
          
          placeholder="#Write your code here"
        />
   
    </div>
    
    <label>
    Standard Input(stdin)
    <div className="w-[90%] h-24 lg:w-full lg:h-32 border-2">
    <input className="flex-grow items-center h-full overflow-y-scroll p-4  w-full   text-sm cursor-text text-gray-600" value=""></input>
    </div>
    </label>
    <div className="flex items-end justify-end w-[90%]  lg:w-full ">
    <button className="bg-gray-700 text-white font-sembold p-4 rounded-sm">Submit</button>
    </div>
    </form>
    </div>
  );
}




































































































