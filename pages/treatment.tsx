import Header from "@/components/header";
import Head from "next/head";

export default function Treatment() {
    return (
        <>
            <Head>
                <title>O krok napřed - Léčba</title>
            </Head>
            <Header active="treatment"></Header>
            <main className=" max-w-7xl mx-auto">
                <section className="p-3">
                    <article className="bg-[#c7f2ff] p-3 border rounded-md mb-3">
                        <h2 className="text-2xl font-semibold mb-3">Léčba rakoviny</h2>
                        <p className="text-md">
                            Léčba nádorového onemocnění není vždy jen prací jednoho lékaře. Je zde zapotřebí více odborníků z různých oborů, kteří společně vyhodnotí na základě umístění onemocnění v těle, zdravotního stavu pacienta, typu nádoru a
                            rozsahu onemocnění určí plán léčby.
                        </p>
                    </article>

                    <article className=" shadow-md border rounded-md mb-3 ">
                        <h3 className="bg-[#1E8FDB] text-lg  w-full md:w-fit rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-br-md py-2 px-3 text-white z-10 font-light">Primární tři metody léčby rakoviny</h3>
                        <div className="space-y-2  px-3 py-3">
                            <div>
                                <strong>Chirurgická léčba</strong>
                                <ul className="list-disc list-inside px-3 ">
                                    <li>U většiny nádorů představuje základní léčebný postup.</li>
                                    <li>
                                        Měla by ústit k úplnému odstranění tumoru. Nelze však použít u každého druhu, např. hematologické nádory jdou léčit jinou formou, protože při odstranění nádoru musí chirurg, mimo viditelný nádor, vyjmout i
                                        okolní tkáň.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <strong>Chemoterapie</strong>
                                <ul className="list-disc list-inside px-3 ">
                                    <li>Při této léčbě jsou využívány cytoxické látky – cytostatika.</li>
                                    <li>
                                        Tyto látky, které působní na veškeré rostoucí buňky, tzn. Buňky nádoru, působí též i na všechny zdravé tkáně. Z tohoto důvodu má chemoterapie řadu nežádoucích účinků (Vypadávání vlasů, nevolnosti, zvracení,
                                        změny v krevním obrazu – nízká či žádná přítomnost bílých krvinek, průjem atd.).
                                    </li>
                                    <li>
                                        Tato léčba bývá v nejčastějších případech podávána ve formě infuze přímo do žíly. Ve většině případů se tato léčba podává ve tří týdenních cyklech, kdy je třeba určitá doba na zotavení. Počet cyklů vždy závisí
                                        na konkrétním případu onemocnění.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <strong>Radioterapie</strong>
                                <ul className="list-disc list-inside  px-3 ">
                                    <li>Zbytek tohoto sóla má ADAM tzn například radioterapie, biologická, protonová, Hormonální, Imunoterapie, transplantace atd.</li>
                                </ul>
                            </div>
                        </div>
                    </article>

                    <article className="shadow-md border rounded-md mb-3">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-br-md py-2 px-3 text-white z-10 font-light">Radioterapie</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                Radioterapie je léčebná metoda, která využívá vysokofrekvenční záření (například rentgenové nebo gama záření) k ničení rakovinových buněk nebo zpomalení jejich růstu. Většinou se ozařuje pouze nádor a jeho okolí,
                                případně místo po vyjmutí nádoru.
                            </p>
                            <p>
                                <strong>Jak to funguje</strong> – Záření poškodí DNA rakovinových buněk, což způsobí, že se nemohou dělit a růst. Tímto způsobem může být nádor zmenšen nebo zničen. Radioterapie se může podávat zvenčí (externí
                                radioterapie) nebo přímo do těla (interní radioterapie).
                            </p>
                            <p>
                                <strong>Použití</strong> – Používá se na léčbu různých typů rakoviny, často před nebo po operaci, nebo jako samostatná léčba.
                            </p>
                            <p>
                                <strong>Výhody a nevýhody</strong> – Je efektivní při léčbě lokálně omezených nádorů, ale může způsobit vedlejší účinky jako únava, kožní reakce, vypadávání vlasů (v ozařovaných oblastech) a jiné.
                            </p>
                            <p>
                                Pro pacienty, kterých čeká radioterapie, je zde přiložen odkaz na{" "}
                                <a
                                    className="text-[#1E8FDB] font-semibold hover:underline "
                                    href="https://www.youtube.com/watch?v=ydOh2W9O81o"
                                >
                                    video
                                </a>
                                , který jim poskytne všechny důležité informace{" "}
                            </p>
                        </div>
                    </article>

                    <article className="shadow-md border rounded-md mb-3">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-br-md py-2 px-3 text-white z-10 font-light">Biologická terapie (bioterapie)</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                Biologická terapie využívá biologické látky (přírodní nebo syntetické) na podporu a posílení imunitního systému, který bojuje proti rakovině. Cílem je upravit biologické procesy v těle tak, aby se zlepšil boj proti
                                rakovině.
                            </p>
                            <p>
                                <strong>Jak to funguje</strong> – Biologické léky mohou zahrnovat monoklonální protilátky, cytokiny, nebo jiné látky, které pomáhají imunitnímu systému lépe rozpoznat a zničit rakovinové buňky.
                            </p>
                            <p>
                                <strong>Použití</strong> – Může se použít na léčbu rakoviny, jako jsou lymfomy, rakovina prsníku, rakovina plic a jiné typy rakoviny. Často se kombinuje s jinými terapiemi, jako je chemoterapie.
                            </p>
                            <p>
                                <strong>Výhody a nevýhody</strong> – Biologická terapie může být méně toxická než tradiční chemoterapie, ale vedlejší účinky zahrnují imunitní reakce, horečky nebo alergické reakce.
                            </p>
                        </div>
                    </article>

                    <article className="shadow-md border rounded-md mb-3">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-br-md py-2 px-3 text-white z-10 font-light">Protonová terapie</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                Protonová terapie je specifická forma radioterapie, která využívá protony (kladně nabité částice) místo rentgenového záření k léčbě rakoviny. Tento typ terapie je velmi přesný, protože dokáže přesněji zaměřit záření na
                                nádor a minimalizovat poškození okolního zdravého tkáně.
                            </p>
                            <p>
                                <strong>Jak to funguje</strong> – Protony mají větší hmotnost než běžné rentgenové záření, což jim umožňuje proniknout hlouběji do tkáně a zastavit se přesně v nádoru. To umožňuje přesnější zaměření léčby na rakovinové
                                buňky.
                            </p>
                            <p>
                                <strong>Použití</strong> – Protonová terapie se používá na léčbu rakoviny v oblastech, kde je potřebná vysoká přesnost, například při nádorech v mozku, očích, prostatě a dětských nádorech.
                            </p>
                            <p>
                                <strong>Výhody a nevýhody</strong> – Množství zdravých tkání, které dostanou záření, je minimalizováno. Je to velmi šetrné pro citlivé oblasti. Je drahá a dostupná pouze na některých specializovaných centrech.
                            </p>
                        </div>
                    </article>

                    <article className="shadow-md border rounded-md mb-3">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-br-md py-2 px-3 text-white z-10 font-light">Hormonální terapie</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>Hormonální terapie se používá při léčbě rakoviny, která je závislá na hormonech pro svůj růst, jako jsou rakoviny prsníku nebo prostaty. Cílem této terapie je blokovat účinky hormonů, které podporují růst nádoru.</p>
                            <p>
                                <strong>Jak to funguje</strong> – Hormonální terapie může zahrnovat léky, které snižují hladiny hormonů v těle nebo blokují jejich účinky na rakovinové buňky. Například u rakoviny prsníku se používají léky, které
                                blokují estrogen (hormon, který podporuje růst některých typů rakoviny prsníku).
                            </p>
                            <p>
                                <strong>Použití</strong> – Na léčbu rakoviny prsníku, prostaty, vaječníků, endometria (vysouvaní sliznice dělohy) a dalších hormonálně závislých rakovin.
                            </p>
                            <p>
                                <strong>Výhody a nevýhody</strong> – Pomáhá zpomalit růst rakoviny a může být účinná u rakovin, které jsou citlivé na hormony. Vedlejší účinky mohou zahrnovat návaly horka, únavu, změny nálad, ztrátu libida a jiné.
                            </p>
                        </div>
                    </article>

                    <article className="shadow-md border rounded-md mb-3">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-br-md py-2 px-3 text-white z-10 font-light">Imunoterapie</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>Imunoterapie je typ léčby, který stimuluje imunitní systém, aby účinněji bojoval proti rakovině. Cílem imunoterapie je posílit přirozenou obranyschopnost těla proti rakovinovým buňkám.</p>
                            <p>
                                <strong>Jak to funguje</strong> – Imunoterapie může zahrnovat léky, které posilují imunitní systém, jako jsou inhibitory kontrolních bodů, nebo léky, které přímo aktivují imunitní buňky k ničení rakovinových buněk.
                                Může se jednat o monoklonální protilátky, vakcíny.
                            </p>
                            <p>
                                <strong>Použití</strong> – Používá se na léčbu rakoviny plic, melanomu, lymfomů, rakoviny ledvin a dalších typů rakoviny.
                            </p>
                            <p>
                                <strong>Výhody a nevýhody</strong> – Může mít trvalý účinek a nabízí nové možnosti léčby, zejména u pokročilých a metastatických forem rakoviny. Může způsobit závažné vedlejší účinky, jako jsou autoimunitní reakce nebo
                                záněty ve zdravých tkáních.
                            </p>
                        </div>
                    </article>

                    <article className="shadow-md border rounded-md ">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit rounded-tl-md rounded-tr-md md:rounded-tr-none md:rounded-br-md py-2 px-3 text-white z-10 font-light">Transplantace</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                Transplantace se používá na léčbu některých typů rakoviny, jako jsou leukémie nebo lymfomy, kdy je rakovina přítomna v kostní dřeni nebo krvi. Transplantace krvotvorných buněk (kmenových buněk) může být léčbou, která
                                obnoví zdravou krvetvorbu po chemoterapii nebo radioterapii.
                            </p>
                            <p>
                                <strong>Jak to funguje</strong> – Po intenzivní chemoterapii nebo radioterapii, která zničí rakovinové buňky, se pacientovi podají zdravé krvotvorné buňky buď od dárce anebo od samotného pacienta. Tyto buňky nahradí
                                poškozené nebo zničené kmenové buňky v kostní dřeni.
                            </p>
                            <p>
                                <strong>Použití</strong> – Nejčastěji se používá při léčbě leukémie, lymfomů a některých dalších hematologických nádorů.
                            </p>
                            <p>
                                <strong>Výhody a nevýhody</strong> – Může vést k úplnému vyléčení některých typů rakoviny. Transplantace nese riziko odmítnutí transplantovaných buněk, infekcí a dalších komplikací.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}
