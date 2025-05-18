import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Input from './Input';

import "./style.css";

export default function Page2() {
    // This component is used to create the form for the user to fill in their name, surname, and email

    const location = useLocation();
    const navigate = useNavigate();

    const item = location.state?.item;
    const keyVal = sessionStorage.getItem("key");

    const handleSubmit = async (e) => {
        // This function handles the form submission

        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        if (!(/^[a-zA-Z]+$/).test(formData.get("name")) ||
            !(/^[a-zA-Z]+$/).test(formData.get("surname")) ||
            !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(formData.get("email")) // Inputs verification
        ) {
            console.log("Invalid data");
            return;
        }

        const formJson = Object.fromEntries(formData.entries());
        formJson.pId = keyVal;

        console.log("Form data:", formJson);
        try {
            // Send the form data to the server and update the product in consequence
            const response = await fetch("https://oi5hultkdk.execute-api.us-east-1.amazonaws.com/dev/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formJson),
            });

            const responseData = await response.json();
            console.log("Success:", responseData);

            // Reset form, remove storaged id, and redirect user
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


