import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    // console.log("Title clicked",index);
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    // item from i tag and p tag and key are from map renderedItems()
    const active = index === activeIndex ? "active" : ""; //"active" is from const active
    return (
      <React.Fragment key={item.title}>
        <div onClick={() => onTitleClick(index)} className={`title ${active}`}>
          <i className="dropdown icon"> </i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordian;
