import {NextApiRequest, NextApiResponse} from "next";
import ContactFormModel from "@/app/api/models/ContactFormModel";

export default function get(request: NextApiRequest, response: NextApiResponse) {
    if(request.method !== "POST"){
        return response.status(400).json({
            error: 'Nieprawidłowa metoda HTTP'
        });
    }

    try{
        const {name, surname, email, message} = JSON.parse(request.body);
        const validatedData = new ContactFormModel(name, surname, email, message);


    }
    catch (e) {
        return response.status(400).json({
            error: 'Nieprawidłowy obiekt',
            error2: e.message
        });
    }
    return response.status(200).json({});
}
