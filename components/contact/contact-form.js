import styles from './contact-form.module.css'
import {useState, useEffect} from 'react'
import Notification from '../ui/notification'



async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
        method:'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message || "Something went wrong")
    }
}


const ContactForm = props => {

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [reqStatus, setReqStatus] = useState() //pending, success, error
    const [reqError, setReqError] = useState()


    useEffect(() => {
        if(reqStatus === 'success' || reqStatus === 'error') {
            const timer = setTimeout(() => {
                setReqStatus(null)
                setReqError(null)
            }, 3000 )

            return () => {
                clearTimeout(timer)
            }
        }

    }, [reqStatus])

    
    const sendMessageHandler = async e => {
        e.preventDefault()

        setReqStatus('pending')

        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            })
            setReqStatus('success')
            setEnteredMessage('')
            setEnteredEmail('')
            setEnteredMessage('')
        } catch(error) {
            setReqError(error.message)
            setReqStatus('error')
        }
        
        

    }

    let notification;

    if(reqStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way'
        }
    }

    if(reqStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success...',
            message: 'Message sent successfully'
        }
    }

    if(reqStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error',
            message: reqError
        }
    }

    return (
        <section className={styles.contact}>
            <h1>How can I help you?</h1>
            <form className={styles.form} onSubmit={sendMessageHandler}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor='email'>Your email</label>
                        <input type="email" id="email" required value={enteredEmail} onChange={e => setEnteredEmail(e.target.value)}  />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input type="text" id="name" required value={enteredName} onChange={e => setEnteredName(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea id="message" rows="5" required value={enteredMessage} onChange={e => setEnteredMessage(e.target.value)}></textarea >
                </div>
                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>

            </form>
            {notification && <Notification status={notification.status}  title={notification.title} message={notification.message}  />}
        </section>
    )
}

export default ContactForm