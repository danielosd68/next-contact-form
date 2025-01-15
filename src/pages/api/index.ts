import {NextApiRequest, NextApiResponse} from "next";
import ContactFormDto from "@/app/api/models/ContactFormDto";
import EmailService from "@/app/api/services/EmailService";
import ContactFormValidator from "@/app/api/validators/ContactFormValidator";

export default function get(request: NextApiRequest, response: NextApiResponse) {
    if(request.method !== "POST"){
        return response.status(400).json({
            error: 'Nieprawidłowa metoda HTTP'
        });
    }
    try{
        const emailService = new EmailService(new ContactFormValidator(JSON.parse(request.body)));
        const {name, surname, email, message} = JSON.parse(request.body);
        const contactData = new ContactFormDto(name, surname, email, message);

        emailService.sendMessage(contactData);
    }
    catch (e) {
        return response.status(400).json({
            error: 'Błąd',
            error2: e.message
        });
    }
    return response.status(200).json({});
}
