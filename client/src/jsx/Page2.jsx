import "./style.css";

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

export default function Page2() {
    const location = useLocation();
    const navigate = useNavigate();

    const item = location.state?.item;
    const keyVal = sessionStorage.getItem("key");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        if (!(/^[a-zA-Z]+$/).test(formData.get("name")) ||
            !(/^[a-zA-Z]+$/).test(formData.get("surname")) ||
            !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(formData.get("email")) // Email validation)
        ) {
            console.log("Invalid data");
            return;
        }

        const formJson = Object.fromEntries(formData.entries());
        formJson.pId = keyVal;

        console.log("Form data:", formJson);
        try {
            // Call your API Gateway POST endpoint here:
            const response = await fetch("https://oi5hultkdk.execute-api.us-east-1.amazonaws.com/dev/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formJson),
            });

            const responseData = await response.json();
            console.log("Success:", responseData);

            // reset form, remove storaged id, and redirect user
            form.reset();
            sessionStorage.removeItem("key");
            navigate('/');

        } catch (error) {
            console.error("Fetch error:", error);
        }
    };

    return (
        <>
            <div className="centerForm">
                <div className="centerDiv">
                    <h2>Complete the form to finalize your order of{' '}
                        {item && item.name.toLowerCase()}
                    </h2>
                </div>

                <div className="centerDiv">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <Input name='name' type='text' /><br />
                            <Input name='surname' type='text' /><br />
                            <Input name='email' type='email' /><br />
                            <button id='idButtonSub' type='submit'>Submit</button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </>
    );

}


