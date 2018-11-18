      import React from 'react';
      import RedCar from '../images/RedCar.svg';
      import RoseCar from '../images/RoseCar.svg';
      import PurpleCar from '../images/PurpleCar.svg';
      import GreenCar from '../images/GreenCar.svg';
      import BlueCar from '../images/BlueCar.svg';
      import TealCar from '../images/TealCar.svg';
      import GrapeCar from '../images/GrapeCar.svg';
      import YellowCar from '../images/YellowCar.svg';
      
      const carStyles = {
          width: "60px",
          boxSizing: "borderBox",
          display: "inlineBlock"
      }

      const CarsAnimation = (props) => {
      
      return (

          <div style={{margin: "0 0 30px 23px", width: "100%", height: "auto"}}>
          
          <div style={{textAlign: "left"}}>
          <span style={carStyles}><img src={RedCar} alt=""/></span>  
          <span style={carStyles}><img src={TealCar} alt=""/></span>    
          <span style={carStyles}><img src={GreenCar} alt=""/></span>    
          <span style={carStyles}><img src={RoseCar} alt=""/></span>    
          <span style={carStyles}><img src={BlueCar} alt=""/></span>    
          <span style={carStyles}><img src={YellowCar} alt=""/></span> 
          <span style={carStyles}><img src={GrapeCar} alt=""/></span>   
          </div>
          <div style={{textAlign: "left", marginLeft: "5%"}}>
          <span style={carStyles}><img src={PurpleCar} alt=""/></span>   
          <span style={carStyles}><img src={RedCar} alt=""/></span>    
          <span style={carStyles}><img src={GreenCar} alt=""/></span>    
          <span style={carStyles}><img src={TealCar} alt=""/></span>    
          <span style={carStyles}><img src={BlueCar} alt=""/></span>    
          <span style={carStyles}><img src={RoseCar} alt=""/></span> 
          <span style={carStyles}><img src={YellowCar} alt=""/></span>   
          </div>
          <div style={{textAlign: "left"}}>
          <span style={carStyles}><img src={GreenCar} alt=""/></span>   
          <span style={carStyles}><img src={RoseCar} alt=""/></span>    
          <span style={carStyles}><img src={TealCar} alt=""/></span>    
          <span style={carStyles}><img src={YellowCar} alt=""/></span>    
          <span style={carStyles}><img src={PurpleCar} alt=""/></span>    
          <span style={carStyles}><img src={RedCar} alt=""/></span> 
          <span style={carStyles}><img src={BlueCar} alt=""/></span>   
          </div>
          <div style={{textAlign: "left", marginLeft: "5%"}}>
          <span style={carStyles}><img src={BlueCar} alt=""/></span>   
          <span style={carStyles}><img src={YellowCar} alt=""/></span>    
          <span style={carStyles}><img src={RedCar} alt=""/></span>    
          <span style={carStyles}><img src={PurpleCar} alt=""/></span>    
          <span style={carStyles}><img src={TealCar} alt=""/></span>    
          <span style={carStyles}><img src={GreenCar} alt=""/></span> 
          <span style={carStyles}><img src={RoseCar} alt=""/></span>   
          </div>
          <div style={{textAlign: "left"}}>
          <span style={carStyles}><img src={GreenCar} alt=""/></span>   
          <span style={carStyles}><img src={PurpleCar} alt=""/></span>    
          <span style={carStyles}><img src={TealCar} alt=""/></span>    
          <span style={carStyles}><img src={RoseCar} alt=""/></span>    
          <span style={carStyles}><img src={BlueCar} alt=""/></span>    
          <span style={carStyles}><img src={YellowCar} alt=""/></span> 
          <span style={carStyles}><img src={RedCar} alt=""/></span>   
          </div>

      </div> 
  
  );
}

export default CarsAnimation;