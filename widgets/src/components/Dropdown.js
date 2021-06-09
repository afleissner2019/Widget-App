// import React, {useState, useEffect,useRef} from "react";

// const Dropdown = ({label, options, selected, onSelectedChange }) => {

//     const [open, setOpen] = useState(false) // default is close
//     const ref = useRef()

//     useEffect(()=>{
//         document.body.addEventListener("click", (event)=>{
//             // console.log(event.target);
//             if(ref.current.contains(event.target)){ // contains() method is belong to all DOM elements, allows us to check if 1 dom element is contain inside of another 
//                 return null;
//             }
//             setOpen(false)
//         },{capture:true})

//     })


//   const renderedOptions = options.map((option) => {
//       if( option.value === selected.value){ // on the dorpdown arrow selection there is no 2 same name options when we click on one of the selected options
//           return  null;
//       }
//     return (
//       // value is from options array variable from App.js
//       <div key={option.value} className="item"
//             onClick= {()=> onSelectedChange(option)}>
//         {option.label}
//       </div>
//     );
//   });
// //   console.log(ref.current);
//   return (
//     <div ref={ref} className="ui form">
//       <div className="field">
//         <label className="label">{label}</label>
//         <div onClick={()=> setOpen(!open)} 
//         className={`ui selection dropdown ${ open ? 'visible active' : ''}`}>
//           <i className="dropdown icon"></i>
//           <div className="text">{selected.label}</div>
//           <div className={`menu ${ open ? 'visible transition' : ''}`}>{renderedOptions}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

/////////////
import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

