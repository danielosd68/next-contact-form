"use client";
import {useState} from "react";
import TextInput from "@/app/components/TextInput/TextInput";
import RadioGroup from "@/app/components/RadioGroup/RadioGroup";
import RadioOption from "@/app/components/RadioOption/RadioOption";

export default function Home() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState(false);
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
                                <TextInput fieldset={'Imię'} name={'name'}/>
                            </div>
                            <div>
                                <TextInput fieldset={'Nazwisko'} name={'surname'}/>
                            </div>

                            <div className={'col-span-2'}>
                                <TextInput fieldset={'Email'} name={'email'} type={'email'}/>
                            </div>

                            <div className={'col-span-2'}>
                                <RadioGroup fieldset={'Rodzaj pytania'}>
                                    <RadioOption id={'question1'} name={'question'} label={'Pytanie ogólne'}></RadioOption>
                                    <RadioOption id={'question2'} name={'question'} label={'Prośba o pomoc'}></RadioOption>
                                </RadioGroup>
                            </div>

                            <div className={'col-span-2'}>
                            <p className={'mb-3'}>Wiadomość</p>
                                <textarea name="message" className={'outline-none w-full border-[1px] border-[--foreground] rounded-lg p-5'} rows={5}></textarea>
                            </div>

                            <div className={'col-span-2'}>
                                <input type="checkbox" name={'agreement'} className={'mr-5'} id={'agreement'}/>
                                <label htmlFor="agreement">Wyrażam zgodę na otrzymanie informacji zwrotnej z pomocą.</label>
                            </div>

                            <div className={'col-span-2 mt-10'}>
                                <button
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
