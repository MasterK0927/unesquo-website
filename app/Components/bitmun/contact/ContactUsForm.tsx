'use client'
import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

import axios from 'axios';

interface FormData {
    name: string;
    email: string;
    message: string;
  }
  

const ContactUs: React.FC = () => {

    const {
        register,
        handleSubmit, // Specify SubmitHandler type
        formState: { errors },
      } = useForm<FormData>();

    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const SHEET_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets/your-spreadsheet-id/values/contact_form_unesquo!:append?key=your-api-key';

    const onSubmit: SubmitHandler<FormData> = async (data) =>{
        setSubmitting(true);

        const formData = {
            values: [
                [data.name, data.email, data.message],
            ],
        };

        try {
            await axios.post(SHEET_API_URL, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setSuccessMessage('Your message has been sent!');
            setErrorMessage('');
        } catch (error) {
            console.error(error);
            setSuccessMessage('');
            setErrorMessage('An error occurred. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.infoGrid}>
                <div className={styles.infoBlock}>
                    <div className={styles.icon}>📍</div>
                    <div>
                        <h2 className={styles.h2}>Our Address</h2>
                        <p className={styles.p}>123 Main Street, City, State ZIP</p>
                    </div>
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.icon}>✉️</div>
                    <div>
                        <h2 className={styles.h2}>Email</h2>
                        <a href="mailto:info@yourdomain.com" className={styles.a}>info@yourdomain.com</a>
                    </div>
                </div>
                <div className={styles.infoBlock}>
                    <div className={styles.icon}>☎️</div>
                    <div>
                        <h2 className={styles.h2}>Phone</h2>
                        <a href="tel:+1234567890" className={styles.a}>+1 234-567-890</a>
                    </div>
                </div>
            </div>

            <div className={styles.contactFormGrid}>
                <section className={styles.form}>
                    <h2 className={styles.h2}>Get in Touch</h2>
                    {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.field}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input type="text" id="name" className={styles.input} {...register('name', { required: true })} />
                            {errors.name && <p className={styles.error}>*Name is required</p>}
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" className={styles.input} {...register('email', { required: true })} />
                            {errors.email && <p className={styles.error}>*E-Mail is required</p>}
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" className={styles.textarea}{...register('message', { required: true })} />
                            {errors.message && <p className={styles.error}>*Message is required</p>}
                        </div>
                        <button type="submit"className={styles.button} disabled={submitting}>
                            {submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </section>
            </div>

            <section className={styles.map}>
                <h2 className={styles.h2}>Find Us on Map</h2>
                <iframe
                    title="Google Map"
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117162.70177979996!2d85.35749940758309!3d23.412283394092263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4fb53f0c27be7%3A0x66180c1cf3c5e704!2sBirla%20Institute%20of%20Technology%20-%20Mesra!5e0!3m2!1sen!2sin!4v1702562001700!5m2!1sen!2sin'
                    width="600"
                    height="400"
                    allowFullScreen
                    loading="lazy"
                    className={styles.iframe}
                />
            </section>
        </div>
    );
};

export default ContactUs;
