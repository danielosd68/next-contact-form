import ContactFormDto from "@/app/api/models/ContactFormDto";
import ContactFormValidator from "@/app/api/validators/ContactFormValidator";

export default class DiscordService{
    constructor(
        private readonly contactFormValidator: ContactFormValidator
    ) {}
    public async sendMessage(contactDataDto: ContactFormDto){
        return await fetch(process.env.DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: `${contactDataDto.name} ${contactDataDto.surname} (${contactDataDto.email}): ${contactDataDto.message}`
            })
        })
    }
}