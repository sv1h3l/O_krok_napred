import Header from "@/components/header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>O krok napřed</title>
            </Head>
            <Header active="index"></Header>
            <main className="max-w-7xl mx-auto linePatern border-x border-gray-100">
                <div className="lg:flex bg-white lg:gap-3 justify-center w-full text-center py-6 lg:py-10 text-2xl font-bold tracking-wider text-[#0A58CA]">
                    <p>Zdraví na vedlejší koleji?</p>
                    <p>Takovou jízdu přece nechceš!</p>
                    <p>Buď O KROK NAPŘED.</p>
                </div>

                <section className="flex flex-col items-center lg:items-start lg:flex-row bg-[#c7f2ff] p-6 border">
                    <div className="text-center w-1/2 lg:w-1/3 lg:pt-4 lg:pl-6">
                        <p className="text-2xl font-medium mb-2">RAKOVINA</p>
                        <p>
                            Strašák, kterého nemálo lidí ve svém životě potká a musí se s ním se vší ctí a úsilím poprat. Je zde však cesta, jak minimalizovat riziko onkologického onemocnění? Ovšem, že ano! Pokud takovou cestu hledáš, věz, že jsi na
                            správném místě.
                        </p>
                    </div>

                    <div className="w-1/2 lg:w-1/3 mt-6 lg:mt-0 flex justify-center">
                        <Image
                            className="w-60"
                            src="/main.png"
                            alt="Web icon"
                            width={250}
                            height={250}
                        />
                    </div>

                    <div className="text-center  w-1/2 lg:w-1/3 pt-6 lg:pt-4 lg:pr-6">
                        <p className="text-2xl font-medium mb-2">O ČEM ŽE JE TATO STRÁNKA?</p>
                        <p>
                            Věřím, že nejen já, ale i ty pro sebe a své blízké chceš jen to dobré. S nabytými informacemi nalož jak uznáš za vhodné, ale cílem by mělo být zvýšení povědomí o riziku, které číhá na každém kroku. Už jen že právě čteš
                            tento článek je taková malá prevence, tak jdi a udělej další KROK.
                        </p>
                    </div>
                </section>

                <section className="flex ">
                    <div className=" w-1/6"></div>

                    <div className=" w-4/6  p-8">
                        <div className="text-center pb-4 lg:py-8">
                            <p className="text-2xl font-medium mb-2">OD MLADÝCH PRO MLADÉ</p>
                            <p>
                                Mimo samotné distribuce informací se tímto webem snažíme zapůsobit na generaci, která má zatím pocit že se jich toto onemocnění netýká. Jsme skupina studentů, která se snaží v rámci tohoto dobrovolnictví šířit povědomí
                                o možných komplikacích které v rámci onkologického onemocnění mohou nastat. Prosím, začni poslouchat své tělo, než bude pozdě.
                            </p>
                        </div>

                        <div className="text-center pt-4 pb-4 lg:pb-8">
                            <p className="text-2xl font-medium mb-2">CO TĚ MŮŽE ZAJÍMAT?</p>
                            <p className="mb-2">Nadační fond Pavla Novotného již dlouhé roky pomáhá široké veřejností s onemocněním rakoviny. Mimo jiné pořádají též preventivní akce, které by sis neměl nechat ujít.</p>
                            <Link
                                className="text-[#0A58CA] font-medium"
                                href="https://nfpavlanovotneho.cz/projekty/preventivni-akce/"
                            >
                                NFPAVLANOVOTNEHO.CZ/PROJEKTY/PREVENTIVNI-AKCE/
                            </Link>
                        </div>

                        <div className="text-center  pt-4 :pb-4 lg:pb-8">
                            <p className="text-2xl font-medium mb-2">MŮJ PŘÍBĚH</p>
                            <p>V této části najdeš osobní příběhy odvážlivců, kteří se chtějí podělit o svůj osobní příběh. Nikdy nejsi sám!</p>
                        </div>
                    </div>

                    <div className="w-1/6"></div>
                </section>

                <footer className="px-4 py-3 bg-[#c7f2ff] border ">
                    <div className="justify-center  w-full text-center py-3   text-2xl tracking-wider text-[#0A58CA]">
                        <p>Tak co, kdy uděláš svůj první krok?</p>
                    </div>

                    <div className="flex flex-col justify-center gap-2 my-2 w-full items-center ">
                        <div className="flex  items-center gap-2 ml-2">
                            <button
                                onClick={() => {
                                    window.location.href = "mailto:okroknapred.cz@gmail.com";
                                }}
                            >
                                <Image
                                    className="w-8"
                                    src={`mail.png`}
                                    alt=""
                                    width={30}
                                    height={0}
                                />
                            </button>
                            <span>okroknapred.cz@gmail.com</span>
                        </div>

                        <div className="flex  items-center gap-2 mr-20">
                            <button
                                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                    if (event.button === 1) {
                                        window.open("https://www.instagram.com/okroknapred.cz/", "_blank");
                                    } else if (event.button === 0) {
                                        window.location.href = "https://www.instagram.com/okroknapred.cz/";
                                    }
                                }}
                            >
                                <Image
                                    className="w-8"
                                    src={`/ig.png`}
                                    alt=""
                                    width={30}
                                    height={0}
                                />
                            </button>
                            <span>okroknapred.cz</span>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}
