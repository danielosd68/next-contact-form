import ContactFormDto from "@/app/api/models/ContactFormDto";

export default class ContactFormValidator{
    constructor(
        private readonly contactFormDto: ContactFormDto
    ) {
        if(this.contactFormDto.name.length < 1){
            throw new Error("Imię musi mieć co namniej jeden znak");
        }

        if(this.contactFormDto.surname.length < 1){
            throw new Error("Nazwisko musi mieć co namniej jeden znak");
        }

        if(this.contactFormDto.email.length < 1){
            throw new Error("Email musi mieć co namniej jeden znak");
        }

        if(!(new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(this.contactFormDto.email))){
            throw new Error("Niepoprawna forma email");
        }

        if(this.contactFormDto.message.length < 1){
            throw new Error("Wiadomość musi mieć co namniej jeden znak");
        }
    }
}