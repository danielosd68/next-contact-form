export default class ContactFormModel{
    constructor(
        private readonly name: string,
        private readonly surname: string,
        private readonly email: string,
        private readonly message: string
    ) {
        if(this.name.length < 1){
            throw new Error("Imię musi mieć co namniej jeden znak");
        }

        if(this.surname.length < 1){
            throw new Error("Nazwisko musi mieć co namniej jeden znak");
        }

        if(this.email.length < 1){
            throw new Error("Email musi mieć co namniej jeden znak");
        }

        if(!(new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(this.email))){
            throw new Error("Niepoprawna forma email");
        }

        if(this.message.length < 1){
            throw new Error("Wiadomość musi mieć co namniej jeden znak");
        }
    }
}