// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Convert = ({ language, text }) => {
//   const [translated, setTranslated] = useState("");
//   const [debouncedText, setDebouncedText] = useState(text)

//   useEffect(()=>{
//       const timerId = setTimeout(()=>{
//           setDebouncedText(text)

//       },500)
//       return () => {
//           clearTimeout(timerId)
//       }

//   }, [text])


//   // 3rd argument on axios.post is params...
//   useEffect(() => {
//     const doTranslation = async () => {
//       //   console.log("new language or text"); // everytime we have a piece of language and text we run the function
//       // data is from the api
//       const { data } = await axios.post(
//         "https://translation.googleapis.com/language/translate/v2",
//         {},
//         {
//           params: {
//             q: debouncedText,
//             target: language.value,
//             key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
//           },
//         }
//       );
//       setTranslated(data.data.translations[0].translatedText); // first data is from axios ,second inside that response there is a data property ,
//     };

//     doTranslation(); // doTranslation or invoke everytiome we change the language and text
//   }, [language, text]);
//   return (
//     <div className="ui header">
//       <h1>{translated}</h1>
//     </div>
//   );
// };

// export default Convert;

////////////// from Stephen Grider
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
        //   console.log("new language or text"); // everytime we have a piece of language and text we run the function
 // data is from the api
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText); // first data is from axios ,second inside that response there is a data property ,
    };

    doTranslation(); // doTranslation or invoke everytime we change the language and text
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
