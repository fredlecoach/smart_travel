import React, { useState } from 'react';
import "../styles/mail.css"

function EmailForm() {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    function handleInput(event) {
        setInputValue(event.target.value);
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|fr)$/;

        if (!emailRegex.test(inputValue)) {
            setError("Veuillez entrer une adresse mail valide se terminant par .com ou .fr.");
            return false;  // Indique que la validation a échoué
        } else {
            setError('');
            return true;  // Indique que la validation a réussi
        }
    }

    function handleSubmit(event) {
        event.preventDefault();  // Empêche la soumission du formulaire par défaut

        if (validateEmail()) {
            // Traitement de la soumission si l'email est valide
            console.log('Email soumis:', inputValue);
            // Ici vous pouvez faire ce que vous voulez avec l'email
            // par exemple, envoyer les données à un serveur
        }
    }

    return (
        <div className='text-center mail mt-5'>
            <h3>Recevez nos dernières offres en avant-première</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder='Entrer votre email'
                    value={inputValue}
                    onChange={handleInput}
                    onBlur={validateEmail}
                    className='p-2 mx-1'
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className='btn btn-outline-dark '>Envoyer</button>
            </form>
        </div>
    );
}

export default EmailForm;
