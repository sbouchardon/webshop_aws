
import { useState } from 'react'

export default function Input(props) {

  const valName = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  const [valid, setValid] = useState(true);

  const validData = (e) => {
    var re;
      if(props.name === 'email'){
        re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      }
      else if(props.name === 'name' || props.name === 'surname'){
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

  const inputClassName = valid ? 'validValue' : 'invalidValue';

  return (
    <>
        <label className='labelClass'>
            {valName} : <input name={props.name} className='inputClass' placeholder={'Enter your ' + props.name} type={props.type} onChange={handleChange}/>
        </label>
        <p className={inputClassName}>Please enter a valid {props.name}.</p>
        
    </>
  )
};

