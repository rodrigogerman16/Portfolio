import React, {Fragment, useState}  from 'react';
import emailjs from 'emailjs-com';

const Form = () => {

    const [datos, setDatos] = useState ({
        name: '',
        phone: '',
        email: '',
        message: '',
    })

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
        [e.target.name] : e.target.value
        })        
    }

    const sendData = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ki8skwr', 'template_g1hml5e', e.target, '3JrmPJmxGZpTsDh1a').then (res=>{
            alert('Your message has been sent.');
    })
    }

    return (
        <Fragment>
            <div className='Contact-container' id='Contact' onSubmit={sendData}>
            <div className='Message-form'>
            <h1>¡Let's work togheter!</h1>
            <div className='Border'></div>  
            <form className='Contact-form' action="index.html" method="post">
                <input type="text" className='Contact-form-text' placeholder='Name' name='name' onChange={handleInputChange}/>
                <input type="text" className='Contact-form-text' placeholder='Phone' name='phone'onChange={handleInputChange}/>
                <input type="email" className='Contact-form-text' placeholder='Email' name='email'onChange={handleInputChange}/>
                <textarea type="text" className='Contact-form-text' placeholder='Message' name='message'onChange={handleInputChange}/>
                <input type="submit" className='Contact-form-btn' value='Send'/>
            </form>
            </div>      
        </div>
      </Fragment>
    );
}

export default Form;