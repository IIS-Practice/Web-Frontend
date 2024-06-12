// src/components/Contacts/ContactForm.js
import React from 'react';
import './ContactForm.styles.css';
import Button from "@components/shared/Button";
import FormInput from "@components/shared/FormInput";

const ContactForm = () => {
    return (
        <div className="contact-form">
            <h2>Мы рады увидеть Вашу заявку!</h2>
            <p>Пожалуйста оставьте Ваше имя и телефон, мы будем счастливы помочь Вам.</p>
            <form>
                <FormInput label="Ваше имя" type="text" name="name" required />
                <FormInput label="Телефон" type="phone" name="phone" required />
                <FormInput label="Сообщение" type="text" name="message" required />
                <Button type="submit">Отправить</Button>
            </form>
        </div>
    );
};

export default ContactForm;
