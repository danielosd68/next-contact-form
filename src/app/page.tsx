"use client";
import {useState} from "react";
import TextInput from "@/app/components/TextInput/TextInput";
import {bool, object, string} from "yup";

export default function Home() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState(false);

    const [contactData, setContactData] = useState({
        name: "",
        surname: "",
        email: "",
        message: ""
    });

    const contactSchema = object({
        name: string().required("Pole wymagane"),
        surname: string().required("Pole wymagane"),
        email: string().email("Wprowadź poprawną formę adresu email").required("Pole wymagane"),
        queryType: bool().oneOf([true]),
        message: string().required("Pole wymagane"),
        agreement: bool().oneOf([true]).required("Zgoda wymagana")
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        contactSchema.validate(contactData).then((validatedObject) => {
            console.log(validatedObject);
        }).catch((reason) => {
            console.warn(reason);
        });
    }

    const handleChange = (event) => {
        console.log(event);
        setContactData((prevState) => {
            if(event.target.type !== "checkbox" && event.target.type !== "radio"){
                return {
                    ...prevState,
                    [event.target.name] : event.target.value
                }
            }

            else{
                if(event.target.type === "checkbox"){
                    return {
                        ...prevState,
                        [event.target.name] : event.target.checked
                    }
                }
            }
        });
    }

    return (
        <main>
            <div className="w-[700px] h-[800px] bg-white rounded-3xl p-10">
                <header>
                    <h1 className={'text-3xl font-bold'}>Wyślij wiadomość</h1>
                </header>
                <section>
                    <form>
                        <div className={'grid grid-cols-2 gap-5 mt-5 items-stretch'}>
                            <div>
                                <TextInput fieldset={'Imię'} name={'name'} value={contactData.name} onChange={handleChange}/>
                            </div>
                            <div>
                                <TextInput fieldset={'Nazwisko'} name={'surname'} value={contactData.surname} onChange={handleChange}/>
                            </div>

                            <div className={'col-span-2'}>
                                <TextInput fieldset={'Email'} name={'email'} type={'email'} value={contactData.email} onChange={handleChange}/>
                            </div>

                            <div className={'col-span-2'}>
                            <p className={'mb-3'}>Wiadomość</p>
                                <textarea value={contactData.message} name="message" className={'outline-none w-full border-[1px] border-[--foreground] rounded-lg p-5'} rows={5} onChange={handleChange}></textarea>
                            </div>

                            <div className={'col-span-2'}>
                                <input type="checkbox" name={'agreement'} className={'mr-5'} id={'agreement'} onChange={handleChange}/>
                                <label htmlFor="agreement">Wyrażam zgodę na otrzymanie informacji zwrotnej z pomocą.</label>
                            </div>

                            <div className={'col-span-2 mt-10'}>
                                <button
                                    onClick={(e) => {handleSubmit(e)}}
                                    className={'bg-[--main-green] text-white border-0 w-full h-[50px] rounded-lg'}>Wyślij
                                </button>
                                {error && (<p className={'text-[--error] mt-3'}>Wystąpił błąd w wysyłce wiadomości. Spróbuj ponownie.</p>)}
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
}
