import React from "react";
import ContactsBlock from "./components/ContactsBlock/ContactsBlock";
import WorkingHours from "./components/ContactsWorkingHour/WorkingHours";
import MapLocation from "./components/ContactsMapLocation/MapLocation";
import ContactForm from "./components/ContactForm/ContactForm";
import RequisitesBlock from "./components/ContactsRequisitesBlock/RequisitesBlock";
import "./Contacts.styles.css";

const Contacts = () => {
    const contactsData = [
        { phone: "+7 (123) 456-7890", email: "contact1@example.com", address: "ул. Ленина, 1" },
        { phone: "+7 (234) 567-8901", email: "contact2@example.com", address: "ул. Гагарина, 2" },
        { phone: "+7 (345) 678-9012", email: "contact3@example.com", address: "ул. Мира, 3" }
    ];

    return (
        <div className="contacts-page">
            <h1>Контакты</h1>
            <div class="three">
                <div className="contacts-blocks">
                    {contactsData.map((contact, index) => (
                        <ContactsBlock
                            key={index}
                            phone={contact.phone}
                            email={contact.email}
                            address={contact.address}
                        />
                    ))}
                </div>
            </div>

            <h2>Время работы:</h2>
            <WorkingHours/>

            <div className="contact-details">
                <MapLocation/>
                <ContactForm/>
            </div>
            <RequisitesBlock
                title="Реквизиты"
                requisites={
                    `Название компании: ООО 'Пример'
ИНН: 123456789
КПП: 987654321
ОГРН: 1234567890123
Банк: ПримерБанк
БИК: 123456789
Р/С: 40702810000000000000
К/С: 30101810000000000000`}
                downloadLink="/path/to/requisites.pdf"
            />
        </div>
    );
};

export default Contacts;
