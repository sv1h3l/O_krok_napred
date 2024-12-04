import Header from "@/components/header";
import Head from "next/head";

export default function Cancer() {
    return (
        <>
            <Head>
                <title>O krok napřed - Rakovina</title>
            </Head>
            <Header active="cancer"></Header>
            <main className="p-3 max-w-7xl mx-auto">
                <section className="bg-[#c7f2ff] p-3 border rounded-md mb-3">
                    <h2 className="text-2xl font-bold mb-3">Rakovina</h2>
                    <p className="text-md mb-2">Slovo, pod kterým si žádná lidská bytost nepředstaví nic hezkého, ani příjemného. Co to vůbec ale rakovina či nádorové onemocnění znamená, a co s sebou nese?</p>
                    <p className="text-md">
                        Jedná se o onemocnění, který je známý nekontrolovatelným růstem a atypickým růstem shlukujících se buněk – nádorů. Rakovinné buňky napadají své okolí a jsou schopny se šířit do dalších částí těla. Je důležité si uvědomit, že
                        každé toto diagnostikované onemocnění je vždy „jedinečné“ a vyžaduje pokaždé individuální přístup a léčbu.
                    </p>
                </section>

                <section className="shadow-md border rounded-md mb-3">
                    <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-br-md py-2 px-3 text-white z-10 font-light">Víš, jak nádorová onemocnění můžeme rozdělit?</h3>
                    <div className="space-y-2 px-3 py-3">
                        <p>
                            <strong>Zhoubné nádory</strong> jsou schopny se pomocí krevního systému šířit po celém těle ve formě dalších nádorů – metastáz.
                        </p>
                        <p>
                            <strong>Nezhoubné nádory</strong> rostou značně pomaleji než jejich maligní „bratři“ a nejsou tolik život-ohrožující. Nejčastěji jsou z těla vyňaty chirurgicky a pacient je následně sledován u svého onkologa.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <article className="shadow-md border rounded-md">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-br-md py-2 px-3 text-white z-10 font-light">
                            Nádory také můžeme definovat do čtyř základních skupin, které určují, kde daný tumor vznikl
                        </h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                <strong>Karcinom</strong> – jedná se zde o nejčastější typ nádorového onemocnění, jeho vznik se týká především kůže, povrchy tkání orgánů...
                            </p>
                            <p>
                                <strong>Sarkom</strong> – tento termín vyjadřuje, že nádor vniká v pojivových tkáních, včetně kostí, svalů a chrupavek.
                            </p>
                            <p>
                                <strong>Leukémie</strong> – tento typ rakoviny, který vzniká v kostní, způsobuje nadměrnou a atypickou tvorbu bílých krvinek, které poté napadají celý imunitní systém.
                            </p>
                            <p>
                                <strong>Lymfom a myelom</strong> – vznikají v buňkách imunitního systému.
                            </p>
                        </div>
                    </article>

                    <article className=" shadow-md border rounded-md">
                        <h3 className="bg-[#1E8FDB] text-lg  w-full md:w-fit rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-br-md py-2 px-3 text-white z-10 font-light">
                            Jedny z nejčastějších druhů rakoviny, se kterými se můžeme setkat jsou
                        </h3>
                        <div className="space-y-2  px-3 py-3">
                            <div>
                                <strong>Rakovina plic</strong>
                                <ul className="list-disc list-inside px-3 ">
                                    <li>Jeden z nejčastějších typů. Rizikovým faktorem je kouření.</li>
                                    <li>Pacient nemusí dlouho nic pozorovat, dokud ho nedožene například úporný kašel, úbytek hmotnosti atd.</li>
                                    <li>Čím dříve je léčba zahájena, tím lépe.</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Rakovina žaludku a jícnu</strong>
                                <ul className="list-disc list-inside px-3">
                                    <li>
                                        Každoročně tímto typem rakoviny onemocní až 1 300 lidí. Mortalita však u této diagnózy neustále klesá. Může to mít za následek například změna stravovacích návyků, úspěšné léčení dřívějších infekcí žaludku...
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <strong>Rakovina kůže</strong>
                                <ul className="list-disc list-inside px-3">
                                    <li>Nejdůležitější faktor, při vzniku rakoviny kůže, hraje sluneční UV záření.</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Zhoubné nádory ženských pohlavních orgánů</strong>
                                <ul className="list-disc list-inside px-3">
                                    <li>Jedním z rizikových faktorů pro vznik tohoto typu zhoubného nádoru je lidský papilomavirus (HPV), proti kterému se lze nechat očkovat.</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Rakovina tlustého střeva</strong>
                                <ul className="list-disc list-inside px-3">
                                    <li>Časné odhalení stádia lze léčit mnohem úspěšněji než pokročilý nádor.</li>
                                    <li>Nejedná se však o lehký typ nádorového onemocnění, ročně v ČR na tento typ rakoviny zemře 3 400 ze 7 700 diagnostikovaných pacientů.</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Rakovina močového měchýře, ledvin a mužských orgánů</strong>
                                <ul className="list-disc list-inside px-3">
                                    <li>Hlavním rizikovým faktorem je překvapivě kouření. Vyskytuje se častěji u mužů než u žen, opět zde platí pravidlo, čím dřívější odhalení, tím vyšší šance vyléčení.</li>
                                </ul>
                            </div>
                            <p>
                                Pro bližší a přesnější popis rakoviny je zde přiložen odkaz na{" "}
                                <a
                                    className="text-[#1E8FDB] font-semibold hover:underline "
                                    href="https://www.youtube.com/watch?v=SGaQ0WwZ_0I"
                                >
                                    video
                                </a>
                                , kde Dr. Edgar D. Staren, MD, PhD, MBA vysvětlí vše potřebné.
                            </p>
                        </div>
                    </article>
                </section>

            </main>
        </>
    );
}
