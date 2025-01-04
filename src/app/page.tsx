export default function Home() {
    return (
        <main>
            <div className="w-[700px] h-[800px] bg-white rounded-3xl p-10">
                <header>
                    <h1 className={'text-3xl font-bold'}>Wyślij wiadomość</h1>
                </header>

                <section>
                    <div className={'grid grid-cols-2 gap-3 mt-5'}>
                        <div>
                            <p>Imię</p>
                        </div>
                        <div>
                            <p>Nazwisko</p>
                        </div>

                        <div className={'col-span-2'}>
                            <p>Adres Email</p>
                        </div>

                        <div className={'col-span-2'}>
                            <p>Rodzaj pytania</p>
                        </div>

                        <div className={'col-span-2'}>
                            <p>Wiadomość</p>
                        </div>

                        <div className={'col-span-2'}>

                        </div>

                        <div className={'col-span-2'}>
                            <button className={'bg-[--main-green] text-white border-0 w-full h-[50px] rounded-lg'}>Wyślij</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
