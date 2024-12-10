import Header from "@/components/header";
import Head from "next/head";

interface Tip {
    title: string;
    subtitle: string;
    description: string;
    subheader: string;
    list: string[];
}

const tips: Tip[] = [
    {
        title: "1. Zdravé stravování",
        subtitle: "Jídlo jako palivo pro tělo",
        description:
            "Zdravé stravování není o tom se omezovat, ale o tom, jak si vybírat potraviny, které nám dávají energii a podporují naše tělo v jeho přirozené síle. To, co jíme, ovlivňuje naši náladu, zdraví a imunitní systém. I malé změny ve stravování mohou mít obrovský vliv na naše zdraví.",
        subheader: "Tipy pro lepší stravování",
        list: [
            "Ovoce a zelenina by měly být tví nejlepší kamarádi – každý den bys měl mít na talíři co nejvíce barevné zeleniny a ovoce.",
            "Vyhýbej se zpracovaným potravinám – místo sladkostí a nezdravých svačinek si raději dej oříšky nebo celozrnné pečivo.",
            "Pij dostatek vody – pití vody je základem pro to, aby tělo správně fungovalo a bylo plné energie.",
        ],
    },
    {
        title: "2. Pohyb",
        subtitle: "Každý krok se počítá",
        description:
            "Pohyb je klíčem k dobrému zdraví. Není třeba trávit hodiny v posilovně, stačí pravidelný pohyb, který tě bude bavit. Každý krok se počítá, ať už jde o krátkou procházku nebo aktivitu, kterou si užíváš. Důležité je, že se hýbeš.",
        subheader: "Jak začít",
        list: [
            "Procházky a výlety jsou skvělé – každý den si najdi chvilku na procházku. Je to skvělý způsob, jak se protáhnout a na chvíli si vyčistit hlavu.",
            "Najdi si aktivitu, která tě baví – ať už je to běhání, jízda na kole nebo třeba tanec.",
            "Buď aktivní i během dne – i krátké protažení nebo pohyb během práce nebo školy pomáhá udržet tělo v kondici.",
        ],
    },
    {
        title: "3. Duševní zdraví",
        subtitle: "Udržuj si klidnou mysl",
        description: "Stres a psychické napětí mohou mít velký vliv na náš imunitní systém. Dlouhodobé vystavení stresu oslabuje tělo a přináší vyšší riziko nemocí. Psychická pohoda a dobré zvládání stresu jsou tedy další důležitou částí prevence.",
        subheader: "Cesta k psychické pohodě",
        list: [
            "Naučte se relaxační techniky – meditace nebo hluboké dýchání jsou účinné způsoby, jak zvládat stres.",
            "Dopřejte si dostatek spánku – kvalitní spánek regeneruje nejen tělo, ale i mysl.",
            "Pište si deník vděčnosti – napište si každý večer alespoň tři věci, za které jste vděční.",
        ],
    },
    {
        title: "4. Spánek",
        subtitle: "Regenerace pro tělo i mysl",
        description: "Během spánku naše tělo regeneruje a posiluje imunitní systém. Dobrý spánek je základem pro fyzickou pohodu, ale i pro udržení duševní rovnováhy.",
        subheader: "Zaručené způsoby pro lepší spánek",
        list: [
            "Vytvořte si spánkový rituál – chození spát a vstávání každý den ve stejnou dobu pomáhá synchronizovat váš vnitřní rytmus a zlepšuje kvalitu spánku.",
            "Omezte modré světlo před spaním – před spaním si dopřejte chvíli klidu a omezte používání elektroniky, která může narušit vaši schopnost usnout.",
            "Dopřejte si relaxaci před spaním – zkuste meditaci nebo jemné protažení, které vám pomůže uvolnit tělo a mysl před odpočinkem.",
        ],
    },
    {
        title: "5. Prevence",
        subtitle: "Zdravé návyky jako investice do budoucnosti",
        description:
            "Prevence je jedním z nejúčinnějších způsobů, jak si zajistit dlouhý a zdravý život. Když se pravidelně staráme o své zdraví, chodíme na preventivní prohlídky a sledujeme změny v těle, máme šanci včas zachytit jakékoli riziko a zůstat v kondici po dlouhá léta. Prevence není nic strašného – je to investice do naší budoucnosti.",
        subheader: "Jak na prevenci",
        list: [
            "Poslouchejte své tělo – pokud si všimnete nějaké neobvyklé změny, nebojte se jít k lékaři.",
            "Navštěvujte pravidelně lékaře – preventivní prohlídky jsou příležitostí zjistit, že vše je v pořádku.",
            "Samovyšetření – jednoduchý a účinný způsob, jak včas odhalit případné změny v těle a zajistit si tak větší šanci na zdravý a bezstarostný život.",
        ],
    },
];

export default function Health() {
    return (
        <>
            <Head>
                <title>O krok napřed - Zdraví</title>
            </Head>
            <Header active="health"></Header>
            <main className="max-w-7xl mx-auto border-x linePatern border-gray-100">
                <section className="bg-[#c7f2ff] p-3  border">
                    <h2 className="text-2xl font-bold mb-2">Zdraví není náhoda!</h2>
                    <p className="text-md mb-4">
                        Zdraví je náš nejcennější dar, který si plně uvědomíme až ve chvíli, kdy ho začneme ztrácet. Když se cítíme dobře, bereme to jako samozřejmost – ale co kdybychom to změnili? Co kdybychom začali každý den investovat do svého
                        zdraví ještě dřív, než přijde problém? Naštěstí máme moc měnit směr. Každý malý krok, který uděláme pro své tělo a mysl, je krokem k lepší budoucnosti. A to, co děláme dnes, se nám vrátí zítra. Není nikdy pozdě začít se starat
                        o své zdraví, a čím dřív to uděláme, tím větší rozdíl to udělá v našem životě.
                    </p>
                    <p className="text-m block font-medium">A jak se konkrétně starat o své tělo a mysl každý den?</p>
                    <p className="text-m block">Zde je 5 osvědčených tipů, které nám mohou pomoci na cestě k dlouhodobé pohodě a síle.</p>
                </section>
                <section className="space-y-2 pt-4  ">
                    {tips.map((tip, index) => (
                        <article
                            key={index}
                            className=""
                        >
                            <div className="flex flex-col md:flex-row">
                                <h2 className="bg-[#1e8fdb] text-lg  w-full md:w-fit  md:rounded-r-md py-2 px-3  md:mb-0 md:-mr-1 text-white z-10 font-light">{tip.title}</h2>
                                <h2 className="bg-[#c7f2ff] text-lg  w-full md:w-fit  md:rounded-r-md  py-2 pr-3 pl-3 md:pl-4  z-0">{tip.subtitle}</h2>
                            </div>

                            <div className="px-4 py-3">
                                <p className="mb-2">{tip.description}</p>
                                <p className="font-bold ">{tip.subheader}</p>
                                <ul className="list-disc list-inside px-3 ">
                                    {tip.list.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </section>
                <footer className=" px-4 py-3 bg-[#c7f2ff] border ">
                    <p>
                        Každý den je příležitost udělat krok k lepšímu zdraví – ať už jde o stravování, pohyb, relaxaci nebo prevenci. Nejde o dokonalost, ale o malé, pravidelné změny, které mohou mít zásadní vliv na náš život. Začněte dnes – každý
                        malý krok, který uděláte, se vám vrátí zítra v podobě vitality, energie a dlouhého, spokojeného života. Na správné cestě na vás čeká světlá budoucnost plná síly.
                    </p>
                    <div className="flex justify-center text-center mt-3">
                        <div
                            className="grid grid-cols-[minmax(min-content,auto),minmax(min-content,auto)] sm:grid-cols-[minmax(min-content,auto),minmax(min-content,auto),minmax(min-content,auto),minmax(min-content,auto)] text-left sm:text-center
                    font-medium text-sm  gap-y-1 gap-x-6 px-3 text-[#0A58CA]"
                        >
                            <p>#NASPRAVNECESTE</p>
                            <p>#ZDRAVINENINAHODA</p>
                            <p>#PREVENCEJEKLIC</p>
                            <p>#DNESPROZITREK</p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}
