      import React from 'react';
      import GreyCar from '../images/GreyCar.svg';
      import TanCar from '../images/TanCar.svg';
      
      const carContainer = {
        margin: "5% 2% 5% 3%", 
        width: "100%", 
        boxSizing: "borderBox", 
        height: "auto"
      }
      
      const carStyles = {
          boxSizing: "borderBox",
          display: "inlineBlock"
      }

      const CarsAnimation = (props) => {
      
      return (
          <div style={carContainer}>    
          <div style={{textAlign: "left"}}>
          <span className="animated bounceOut delay-3s slower" style={carStyles}><img src={GreyCar} alt=""/></span>  
          <span className="animated bounceOut delay-3s slow" style={carStyles}><img src={TanCar} alt=""/></span>    
          <span className="animated bounceOut delay-4s slower" style={carStyles}><img src={GreyCar} alt=""/></span>    
          <span style={carStyles}><img src={TanCar} alt=""/></span>    
          <span style={carStyles}><img src={GreyCar} alt=""/></span>    
          <span style={carStyles}><img src={TanCar} alt=""/></span> 
          <span style={carStyles}><img src={GreyCar} alt=""/></span>   
          </div>
          <div style={{textAlign: "left", marginLeft: "5%"}}>
          <span className="animated bounceOut delay-4s"style={carStyles}><img src={TanCar} alt=""/></span>   
          <span className="animated bounceOut delay-3s slow" style={carStyles}><img src={GreyCar} alt=""/></span>    
          <span style={carStyles}><img src={TanCar} alt=""/></span>    
          <span style={carStyles}><img src={GreyCar} alt=""/></span>    
          <span style={carStyles}><img src={TanCar} alt=""/></span>    
          <span style={carStyles}><img src={GreyCar} alt=""/></span> 
          <span style={carStyles}><img src={TanCar} alt=""/></span>   
          </div>
          <div style={{textAlign: "left"}}>
          <span className="animated bounceOut delay-3s"style={carStyles}><img src={TanCar} alt=""/></span>   
          <span style={carStyles}><img src={GreyCar} alt=""/></span>    
          <span style={carStyles}><img src={TanCar} alt=""/></span>    
          <span style={carStyles}><img src={GreyCar} alt=""/></span>    
          <span style={carStyles}><img src={TanCar} alt=""/></span>    
          <span style={carStyles}><img src={GreyCar} alt=""/></span> 
          <span style={carStyles}><img src={TanCar} alt=""/></span>   
          </div>
          <div style={{textAlign: "left", marginLeft: "5%"}}>
          <span style={carStyles}><img src={TanCar} alt=""/></span>   
          <span style={carStyles}><img src={GreyCar} alt=""/></span>    
          <span style={carStyles}><img src={TanCar} alt=""/></span>    
          <span style={carStyles}><img src={GreyCar} alt=""/></span>    
          <span style={carStyles}><img src={TanCar} alt=""/></span>    
          <span style={carStyles}><img src={GreyCar} alt=""/></span> 
          <span style={carStyles}><img src={TanCar} alt=""/></span>   
          </div>
          <div style={{textAlign: "left"}}>
          <span style={carStyles}><img src={GreyCar} alt=""/></span>   
          <span style={carStyles}><img src={TanCar} alt=""/></span>    
          <span style={carStyles}><img src={GreyCar} alt=""/></span>    
          <span style={carStyles}><img src={TanCar} alt=""/></span>    
          <span style={carStyles}><img src={GreyCar} alt=""/></span>    
          <span style={carStyles}><img src={TanCar} alt=""/></span> 
          <span style={carStyles}><img src={GreyCar} alt=""/></span>   
          </div>

      </div> 
  
  );
}

export default CarsAnimation;