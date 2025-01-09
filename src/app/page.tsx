"use client";
import {useState} from "react";
import TextInput from "@/app/components/TextInput/TextInput";
import {bool, object, string} from "yup";
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";

export default function Page() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const [loading, setLoading] = useState(false);


    const contactSchema = object().shape({
        name: string().required("Pole wymagane"),
        surname: string().required("Pole wymagane"),
        email: string().email("Wprowadź poprawną formę adresu email").required("Pole wymagane"),
        queryType: bool().oneOf([true]),
        message: string().required("Pole wymagane"),
        agreement: bool().oneOf([true], "Zgoda wymagana").required()
    });

    const handleSubmit = async (values, formikHelpers: FormikHelpers<any>) => {

        return await fetch('/api', {
            method: 'post',
            body: JSON.stringify(values)
        });
    }

    return (
        <main>
            <div className="w-[700px] h-[800px] bg-white rounded-3xl p-10">
                <header>
                    <h1 className={'text-3xl font-bold'}>Wyślij wiadomość</h1>
                </header>
                <section>
                    <Formik initialValues={{
                        name: "",
                        surname: "",
                        email: "",
                        message: "",
                        agreement: false
                    }} onSubmit={handleSubmit} enableReinitialize={true} validationSchema={contactSchema}>
                        {({errors, touched}) => (
                            <Form>
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
                                        <p className={'mb-3'}>Wiadomość</p>
                                        <Field as={"textarea"} name={'message'} className={'outline-none w-full border-[1px] border-[--foreground] rounded-lg p-5'} rows={5}/>
                                        <ErrorMessage name={'message'} render={(errorMessage) => (<p className={'text-red-500'}>{errorMessage}</p>)}/>
                                    </div>

                                    <div className={'col-span-2'}>
                                        <Field type={"checkbox"} name={'agreement'} className={'mr-5'} id={'agreement'}/>
                                        <label htmlFor="agreement">Wyrażam zgodę na otrzymanie informacji zwrotnej z pomocą.</label>
                                        <ErrorMessage name={'agreement'} render={(errorMessage) => (<p className={'text-red-500'}>{errorMessage}</p>)}/>
                                    </div>

                                    <div className={'col-span-2 mt-10'}>
                                        <button
                                            disabled={loading}
                                            className={'bg-[--main-green] text-white border-0 w-full h-[50px] rounded-lg ' + (loading ? 'opacity-30' : '')}>Wyślij
                                        </button>
                                        {error && (<p className={'text-[--error] mt-3'}>Wystąpił błąd w wysyłce formularza - {errMessage}</p>)}
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </section>
            </div>
        </main>
    );
}
