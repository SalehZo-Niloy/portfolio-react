import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';


const EmailMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4grliqo', 'template_tolp7sc', form.current, '9oL-t0mrTlGn2Qhyi')
            .then((result) => {
                console.log(result.text);
                toast.success('Message sent');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='mt-12 w-11/12 mx-auto rounded-xl overflow-hidden'>
            <h1 className='text-3xl font-bold text-primary mb-4'>Send me a message</h1>
            <form ref={form} onSubmit={sendEmail}>
                <div className="hero bg-base-300 w-full rounded-xl">
                    <div className="hero-content w-full flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left w-full lg:w-1/2">
                            <img src="https://i.ibb.co/WPNfTDH/businessman-holding-tablet-touching-with-virtual-white-newsletter-electronic-mail-e-mail-with-notifi.webp" alt="" className='rounded-xl w-full' />
                        </div>
                        <div className="card w-full lg:w-1/2 shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your name</span>
                                    </label>
                                    <input name="user_name" type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your email</span>
                                    </label>
                                    <input name="user_email" type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea name="message" className="textarea textarea-primary" placeholder="message"></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Send message" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default EmailMe;