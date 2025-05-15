
import "./style.css";


import Input from './Input';

export default function Page2() {

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
            <div>
                <form  onSubmit={handleSubmit}>
                    <fieldset>
                        <Input name='email' type='email' /><br/>
                        <button id='idButtonSub' type='submit'>Submit</button>

                    </fieldset>
                </form>
            </div>
        </>
    );

}


