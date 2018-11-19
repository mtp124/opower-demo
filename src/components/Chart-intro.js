import React from 'react';


const introBlockTitle = {
    fontWeight: "200",
    color: "#444"
}

const introBlockText = {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#666"
}

const ChartIntro = (props) => {
  return (
 <div>
    <div style={{introBlockTitle}}>{props.title}</div><br />
    <div style={introBlockText}>{props.subtitle}</div>
 </div>)

}

export default ChartIntro;