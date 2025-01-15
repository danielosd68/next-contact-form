export default class ContactFormDto {
    constructor(
        public readonly name: string,
        public readonly surname: string,
        public readonly email: string,
        public readonly message: string,
    ) {}
}