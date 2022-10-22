import React from 'react';
import contactMe from '../../assets/Contact Me.png'
import './contact.css'
import { useState } from 'react'
import sendMail from '../../utils/sendMail';

interface ContactInputProps {
    name: string,
    label: string,
    placeholder: string,
    type?: string,
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const ContactInput: React.FC<ContactInputProps> = ({name, label, placeholder, type='text', inputValue, setInputValue}) => {
    return (
        <div className="inputContainer">
            <div className="border">
                <div className="whiteBG">
                    <input 
                        type={type} 
                        required name={name}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={( e => setInputValue(e.target.value))}
                    />
                    <div className="greenLine"></div>
                </div>
            </div>
            <p className="bangers">{label}</p>
        </div>
)}

const Contact:React.FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')

    const [submitState, setSumbitState] = useState<'standBy' | 'sending' | 'sent' | 'failed'>('standBy')

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(submitState === 'standBy'){
            setSumbitState('sending')
            try {
                const response = await sendMail({name, email, company, message})
                if(response?.status === 200) {
                    setSumbitState('sent')
                } else {
                    setSumbitState('failed')
                }
                setTimeout(() => {
                    setSumbitState('standBy')
                }, 2000);
            } catch (error) {
                console.error(error)
            }
        }
    }
    return (
        <div id="contact" className='contact'>
            <form className="contactForm" onSubmit={(e)=> submitForm(e)}>
                <div className="tinyInputs">
                    <ContactInput name='fullName' label='Full Name' inputValue={name} setInputValue={setName} placeholder='John Doe'/>
                    <ContactInput name='email' label='Email' type='email' inputValue={email} setInputValue={setEmail} placeholder='example@domain.com'/>
                    <ContactInput name='company' label='Company'  inputValue={company} setInputValue={setCompany} placeholder='Example Corp. Inc.'/>
                </div>
                <div className="bigInput">
                    <div className="inputContainer">
                        <div className="border">
                            <div className="whiteBG">
                            <div className="greenLines">
                                <div className="greenLine"></div>
                                <div className="greenLine"></div>
                                <div className="greenLine"></div>
                                <div className="greenLine"></div>
                                <div className="greenLine"></div>
                                <div className="greenLine"></div>
                                <div className="greenLine"></div>
                            </div>
                            <textarea 
                                required 
                                name='message' 
                                rows={7} 
                                cols={50}
                                placeholder='Tell me what you think'
                                value={message}
                                onChange= { e => setMessage(e.target.value)}
                            />
                            </div>
                        </div>
                        <p className="bangers">
                            Message
                        </p>
                        <div className="aestheticLines">
                            <div className="line1"></div>
                            <div className="line2"></div>
                        </div>
                    </div>
                </div>
                <div className="submitButton">  
                    { submitState === 'sending' && <p className='comicNeue'>&lt;Sending&gt;</p> }
                    { submitState === 'sent' && <p className='comicNeue'>&lt;Message Sent&gt;</p> }
                    { submitState === 'failed' && <p className='comicNeue'>&lt;Sending Failed&gt;</p> }
                    <button type='submit'>
                        <div className="whiteBG">
                            <p className='bangers'>submit</p>
                        </div>
                    </button>
                </div>
            </form>
            <img src={contactMe} alt='contact me' className='contactMe' />
        </div>
    );
}

export default Contact;