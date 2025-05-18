
import { useState } from 'react'

// This component is used to create an input field with validation for the form inside Page2.jsx
// Props used :  name of the input (name,surname,email), type, onChange: a function to handle changes if the content is invalid, placeholder

export default function Input(props) {

  const valName = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  const [valid, setValid] = useState(true);

  // This function checks if the input value is valid based on the name value
  // It uses regular expressions to validate the input
  const validData = (e) => {
    var re;
    if (props.name === 'email') {
      re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }
    else if (props.name === 'name' || props.name === 'surname') {
      re = /^[a-zA-Z]+$/;
    }

    re.test(e.target.value) ? setValid(true) : setValid(false);
  };

  const handleChange = (e) => {

    validData(e);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  // Sets the class name based on the validity of the input
  const inputClassName = valid ? 'validValue' : 'invalidValue';

  return (
    <>
      <label className='labelClass'>
        {valName} : <input name={props.name} className='inputClass' placeholder={'Enter your ' + props.name} type={props.type} onChange={handleChange} />
      </label>
      <p className={inputClassName}>Please enter a valid {props.name}.</p>

    </>
  )
};

