import nodemailer from 'nodemailer';
import SMTPTransport from "nodemailer/lib/smtp-transport";
import ContactFormDto from "@/app/api/models/ContactFormDto";
import ContactFormValidator from "@/app/api/validators/ContactFormValidator";

export default class EmailService{
    private transporter:  nodemailer.Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>;
    constructor(
        private readonly contactFormValidator: ContactFormValidator
    ) {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVICE,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
    }

    public async sendMessage(contactData: ContactFormDto){
        const response =  await this.transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: contactData.email,
            subject: 'Potwierdzenie wysłania wiadomości',
            html: '<h1>Potwierdzamy wysłanie wiadomości</h1><p>' + contactData.message + '</p>'
        });

        return response;
    }
}