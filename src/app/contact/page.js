"use client"

import React from "react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import {FaSpinner} from 'react-icons/fa'

export default function ContactPage() {

    const [formData, setFormData] = useState({
        from_name: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const [confirmSubmitOpen, setConfirmSubmitOpen] = useState(false);
    const [sendingIcon, setSendingIcon] = useState(false);

    const handleFormChange = (event) => {
        let eName = event.target.name;
        let eValue = event.target.value;
        setFormData({...formData, [eName]: eValue});
    }

    const form = useRef();

    const sendEmail_test = (e) => {
        e.preventDefault();
        setConfirmSubmitOpen(true);
        setTimeout(() => {
            setConfirmSubmitOpen(false);
        }, 4000)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        setSendingIcon(true);

        emailjs.init('ZGFTYyttQbN2yqDK9');

        emailjs.send('service_g5pjord', 'template_ybc25ic', formData)
        .then((result) => {
            console.log(result.text);
            setConfirmSubmitOpen(true);
            setSendingIcon(false);
            setTimeout(() => {
                setConfirmSubmitOpen(false);
            }, 4000);
            setFormData({
                from_name: '',
                user_email: '',
                subject: '',
                message: ''
            })
        }, (error) => {
            console.log(error.text);
            setSendingIcon(false);
        });
    }

    return (
        // container
        <div className="grid lg:grid-cols-2 gird-cols-1 pt-[8vh] h-[92vh]">
        {/* left contact form */}
            <div className="flex w-[100% z-5">
                {/* Form container */}
                <div className="p-4 w-[90%] lg:h-[66%] h-[80%] m-auto z-6">
                    <div className="flex relative">
                        <h3 className="text-2xl text-white px-4 font-bold font-mono">Shoot me a message!</h3>
                        <div 
                            className="absolute bg-[#62929E] rounded-2xl mr-4 right-0 p-5 z-20 transition-all ease-in-out"
                            style={{
                                opacity: confirmSubmitOpen ? '100' : '0',
                                transform: confirmSubmitOpen ? 'scale(1)' : 'scale(.5)'
                            }}
                        >
                            <h4 className="text-white font-extrabold font-mono">Message Sent!</h4>
                        </div>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="pt-4 flex flex-col justify-between lg:h-[80%] h-[90%] w-[100%]">
                        <div className="px-4">
                            <label htmlFor='first-name' className="block text-white font-mono">First Name:</label>
                            <input id='first-name' name='from_name' value={formData.from_name} onChange={handleFormChange} required placeholder='Enter your name' type='text' className="w-[100%] p-2 rounded-xl"></input>
                        </div>
                        <div className="px-4 pt-1">
                            <label htmlFor='email-address' className="block text-white font-mono">Email Address:</label>
                            <input id='email-address' name='user_email' value={formData.user_email} onChange={handleFormChange} required placeholder="Enter your email" type='email' className="w-[100%] p-2 rounded-xl"></input>
                        </div>
                        <div className="px-4 pt-1">
                            <label htmlFor='subject' className="block text-white font-mono">Subject:</label>
                            <input id='subject' name='subject' value={formData.subject} onChange={handleFormChange} required placeholder="Subject line" type='text' className="w-[100%] p-2 rounded-xl"></input>
                        </div>
                        <div className="px-4 pt-1">
                            <label htmlFor='message' className="block text-white font-mono">Message:</label>
                            <textarea id='message' name='message' value={formData.message} onChange={handleFormChange} required placeholder="Message contents" rows='4' cols='50' className="w-[100%] p-2 rounded-xl"></textarea>
                        </div>
                        <button type='submit' className="p-4 px-20 bg-white mt-4 mx-auto rounded-xl w-[25% transition-all ease-in-out duration-700">
                            {   sendingIcon ?
                                <FaSpinner className="animate-spin"/>
                                :
                                <p className="text-slate-800 font-bold font-mono">Submit</p>
                            }
                        </button>
                    </form>
                </div>
            </div>
        {/* right contact info */}
            <div className="flex w-[100] bg-white lg:rounded-l-3xl z-5">
                {/* Info Container */}
                <div className="p-4 w-[90%] h-[66%] m-auto z-6">
                    <h1 className="text-2xl px-4 text-slate-900 font-bold font-mono">Or contact me via:</h1>
                    <div className="flex flex-col justify-between mt-10 px-4 h-[30%]">
                        <h4 className="xl:text-3xl text-2xl text-slate-800 font-mono">phone: 808-722-3642</h4>
                        <h4 className="xl:text-3xl text-2xl text-slate-800 font-mono">email: kainoa.accs@gmail.com</h4>
                        <h4 className="xl:text-3xl text-2xl text-slate-800 font-mono">github: kainoa-borg</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}