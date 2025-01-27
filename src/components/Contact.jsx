import "../css/Contact.css"
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <>
            <h2>{t('contact.title')}</h2>
            <p>
                {t('contact.text1')}
                <a className="mailto" href="mailto:flavio.tolosana@gmail.com">flavio.tolosana@gmail.com</a>
                {t('contact.text2')}
            </p>
            <div className="contact-container">
                <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
                    <input type="hidden" name="access_key" value="0e1b5c63-009c-48bb-9f81-23b9f53d606b"/>
                    <input type="text" name="name" placeholder={t('contact.form.name')+'...'} className="contact-inputs" required/>
                    <input type="eimail" name="email" placeholder={t('contact.form.email')+'...'} className="contact-inputs" required/>
                    <textarea name="message" placeholder={t('contact.form.message')+'...'} className="contact-inputs" required></textarea>
                    <button type="submit">
                        {t('contact.submit')}
                        <img src="/images/arrow_icon.png" alt=""/>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact