import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

const customStyles = {
    content: {
        background: '#46B030',
        color: '#161D27',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '8px'
    }
};

Modal.setAppElement('#root');

const HireMe = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const handleSubmit = () => {
        emailjs.send("service_kfav2ch","template_03c6j75",{
            from_name: name,
            message: message,
            from_email: email,
            reply_to: email,
        }, 'user_nJxmJzw5CuKzWTPL8heGQ')
            .then(res => console.log('Email sent successfully'))
            .catch(err => console.log('Error sending email'));
    }

    return (
        <div>
            <button
                className="hire-me"
                onClick={openModal}
            >
                Hire Me
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Hire Me"
            >
                <form className="hire-me-mailing">
                    <h3>Hello! Please use the form to contact me.</h3>
                    <div className="email-form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" name="subject" value={subject} onChange={e => setSubject(e.target.value)}/>
                        <label htmlFor="message">Body:</label>
                        <textarea
                            name="message"
                            id="message"
                            onChange={e => setMessage(e.target.value)}
                            required
                            value={message}
                            style={{width: '100%', height: '150px'}}
                        />
                    </div>
                    <div className="btn-container">
                        <input type="button" value="Send" className="hire-me" onClick={handleSubmit}/>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default HireMe;
