import react from 'react';

const Contact = () =>{
    return (
        <div>
            <form >
                <label for="name">
                    <input type="text" name="name"></input>
                </label>
                <label for="Surname">
                    <input type="text" name="surname"></input>
                </label>
                <label for="email">
                    <input type="email" name="email"></input>
                </label>
                <button></button>
            </form>
   
        </div>
    )
}

export default Contact;
