import React from "react";

const Filterbox = () => {
  return (
    <div style={{display:"block",alignItems:"center"}} >
      <div style={{marginTop:"20px"}} >
        <legend>Colour</legend>
        <input type="checkbox" id="Red" value="Red" />
        <label for="Colour">Red</label>
        <br />
        <input type="checkbox" id="Blue" value="Blue" />
        <label for="Colour">Blue</label>
        <br />
        <input type="checkbox" id="Green" value="Green" />
        <label for="Colour">Green</label>
      </div>
      <div style={{marginTop:"20px"}}>
        <legend>Gender</legend>
        <input type="checkbox" id="Men" value="Men" />
        <label for="Colour">Men</label>
        <br />
        <input type="checkbox" id="Women" value="Women" />
        <label for="Colour">Women</label>
      </div>
      <div>
        <legend>Price</legend>
        <input type="checkbox" id="price" value="250" />
        <label for="Colour">0-Rs250</label>
        <br />
        <input type="checkbox" id="price" value="" />
        <label for="Colour">Rs251-451</label>
      </div>
    <div style={{marginTop:"20px"}}>
        <legend>Type</legend>
        <input type="checkbox" id="Type" value="Polo" />
        <label for="Colour">Polo</label>
        <br />
        <input type="checkbox" id="Type" value="Hoddies" />
        <label for="Colour">Hoddies</label>
        <br />
        <input type="checkbox" id="Type" value="Basic" />
        <label for="Colour">Basic</label>
      </div>
    </div>
  );
};

export default Filterbox;
