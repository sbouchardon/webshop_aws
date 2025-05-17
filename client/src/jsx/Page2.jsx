import "./style.css";

import { useLocation } from 'react-router-dom';
import Input from './Input';

export default function Page2() {
    const location = useLocation();
    const item = location.state?.item;

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        console.log(formData.get("email"));
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(formData.get("email")) // Email validation)
        ){
            console.log("Invalid data");
            return;
        }

        const formJson = Object.fromEntries(formData.entries());
        const stringJson = JSON.stringify(formJson);
        console.log(stringJson);

        form.submit();
        return stringJson;
    };

    return (
        <>
          <div className="centerForm">
            <div className="centerDiv">
                <h2>Thank you for purchasing 
                {item && (
                    <div>{item.name.toLowerCase()} !</div>
                )}
                </h2>
            </div>
          
            <div className="centerDiv">
                <form  onSubmit={handleSubmit}>
                    <fieldset>
                        <Input name='name' type='text' /><br/>
                        <Input name='surname' type='text' /><br/>
                        <Input name='email' type='email' /><br/>
                        <button id='idButtonSub' type='submit'>Submit</button>

                    </fieldset>
                </form>
            </div>
          </div>
        </>
    );

}

