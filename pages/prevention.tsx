import Header from "@/components/header";
import Head from "next/head";

export default function Prevention() {
    return (
        <>
            <Head>
                <title>O krok napřed - Prevence</title>
            </Head>
            <Header active="prevention"></Header>
            <main className="border-x border-gray-100 max-w-7xl mx-auto linePatern">
                <section className="bg-[#c7f2ff] p-3 border  ">
                    <h2 className="text-2xl font-bold mb-3">5 důvodů, proč je prevence rakoviny důležitá i pro mladší generace</h2>

                    <div className="text-md">
                        <strong>Víš, že</strong>
                        <ul className="list-disc list-inside px-3 pb-3">
                            <li>každý třetí Čech prodělá onkologické onemocnění?</li>
                            <li>ročně u nás zemře kolem 30 000 na rakovinu?</li>
                            <li>nádory v prvním stádiu jsou léčitelné?</li>
                            <li>každému třetímu onemocnění lze předejít?</li>
                        </ul>
                    </div>

                    <p className="text-md">
                        Mladí lidé často vnímají rakovinu jako onemocnění, které se jich ještě dlouho týkat nebude. Statistiky však ukazují, že prevence rakoviny je klíčová v každém věku – a čím dříve začneš přemýšlet o zdravých návycích a prevenci,
                        tím větší máš šanci snížit riziko onkologických onemocnění v budoucnosti!
                    </p>
                </section>

                <section className=" mb-6 ">
                    <article className="  pt-5 ">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit md:rounded-r-md py-2 px-3 text-white z-10 font-light">1. Rakovina postihuje mladé lidi víc, než si uvědomuješ</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                Ačkoli jsou některé typy rakoviny častější u starších lidí, například rakovina plic nebo tlustého střeva, jiné druhy – jako je <strong>melanom</strong>, <strong>rakovina prsu</strong> nebo <strong>varlat</strong> či{" "}
                                <strong>rakovina štítné žlázy</strong> – postihují i mladší ročníky. Podle organizace WHO dochází k nárůstu diagnóz rakoviny u lidí mladších 50 let, což je spojeno i s životním stylem a environmentálními faktory.
                            </p>
                        </div>
                    </article>

                    <article className="  pt-2">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit md:rounded-r-md py-2 px-3 text-white z-10 font-light">2. Tvůj současný životní styl ovlivňuje tvé budoucí zdraví</h3>
                        <div className="space-y-1 px-3 py-3">
                            <p>
                                Zvyk je železná košile, a právě v mladém věku si tvoříme návyky, které nás budou provázet celý život. Kouření, častá konzumace alkoholu, nezdravé stravování a nedostatek pohybu jsou rizikové faktory, které se mohou v
                                mladém věku zdát bezvýznamné, ale v dlouhodobém horizontu mohou vést k vážným zdravotním problémům, včetně rakoviny.
                            </p>
                            <p>
                                V posledních letech se nám tady navíc rozvinul takový nešvar zvaný <strong>vapování</strong>. Kouření je známým rizikovým faktorem pro vznik rakoviny. Způsobuje poškození plicních buněk, které se kumuluje a zvyšuje
                                riziko rakoviny plic, jícnu, močového měchýře nebo ústní dutiny. Pokud si myslíš, že vapování je oproti kouření klasických cigaret méně škodlivé, jsi na velkém omylu. Vapovací zařízení (e-cigarety) jsou sice často
                                inzerována jako „zdravější alternativa“, avšak výzkumy ukazují, že i když vapování neobsahuje dehet, který je přítomen v tradičních cigaretách, <strong>stále může představovat závažná zdravotní rizika</strong>. Podle
                                studií se v aerosolu, který inhalují uživatelé e-cigaret, nacházejí škodlivé chemikálie, jako jsou formaldehyd, acetaldehyd nebo toluen – látky, které mohou poškodit buňky a jsou považovány za karcinogenní.
                            </p>
                            <p>Tak co, stále máš chuť na svůj oblíbený vapík nebo ho raději pošleš do koše?</p>
                        </div>
                    </article>
                    <article className="  pt-2">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit md:rounded-r-md py-2 px-3 text-white z-10 font-light">3. Časná prevence a samovyšetření ti mohou zachránit život</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                Samovyšetření a pravidelné lékařské prohlídky mají významnou roli v časném odhalení rakoviny. Například pravidelné samovyšetření prsou a varlat může pomoci zachytit změny, které mohou signalizovat rakovinu. Důležité je
                                proto osvojit si tyhle návyky co nejdřív, aby případné problémy byly odhaleny včas. <strong>Nezapomeň – včasná diagnóza znamená vyšší šanci na úspěšnou léčbu!</strong> Čti dál a dozvíš se, jak takové samovyšetření
                                provádět – neboj se, není to žádná věda.
                            </p>
                        </div>
                    </article>

                    <article className="  pt-2">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit md:rounded-r-md py-2 px-3 text-white z-10 font-light">4. Očkování je kámoš</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                Pro mladé lidi může být klíčové očkování proti HPV, které je úzce spojeno s rakovinou děložního čípku, ale i dalšími druhy rakoviny, jako jsou rakovina hlavy a krku. Díky očkování lze předejít velkému množství případů
                                této rakoviny, a proto je doporučeno nejen pro dívky, ale i pro chlapce.
                            </p>

                            <p>
                                <strong>Kdo že je ten HPV?</strong>
                                <br />
                                HPV (lidský papilomavirus) je skupina virů, která zahrnuje více než 200 různých typů, z nichž některé mohou způsobit zdravotní problémy. Nejvíce známé jsou typy HPV, které jsou spojeny s výskytem rakoviny, zejména
                                rakoviny děložního čípku u žen, ale také rakoviny hlavy, krku, penisu a análního karcinomu.
                            </p>
                            <p>
                                Jedná se o běžný virus, který se přenáší <strong>pohlavním stykem</strong> a většina sexuálně aktivních lidí se s ním v určitém období svého života setká. Ačkoli většina infekcí HPV nezpůsobí problémy a odezní sama,
                                některé kmeny tohoto viru mohou způsobit rakovinu, pokud se infekce neodstraní včas. Očkování v mladém věku, nejlépe před zahájením sexuální aktivity, je klíčové pro maximální ochranu.
                            </p>
                        </div>
                    </article>

                    <article className="  pt-2">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit md:rounded-r-md py-2 px-3 text-white z-10 font-light">5. Prevence ovlivňuje psychickou pohodu</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                Vědomí, že se aktivně staráš o své zdraví, může mít pozitivní vliv i na tvou psychickou pohodu. Prevence rakoviny a zdravý životní styl ti mohou dát pocit kontroly a jistoty, že děláš to nejlepší pro své zdraví. Tímto
                                způsobem je prevence nejen fyzickým, ale i psychickým ochranným faktorem.
                            </p>
                        </div>
                    </article>
                </section>

                <section className="bg-[#c7f2ff] p-3 border mb-2">
                    <h2 className="text-2xl font-bold mb-3">Samovyšetření – věc, která ti může zachránit život</h2>
                    <p className="text-md">Nevíš jak na samovyšetření prsou, varlat, kůže nebo třeba ústní dutiny? Nevadí – v tomto článku se dozvíš, jak taková samovyšetření provést krok za krokem. Tak jdeme na to!</p>
                </section>

                <section className=" mb-6">
                    <article className="  pt-2">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit md:rounded-r-md py-2 px-3 text-white z-10 font-light">Samovyšetření prsou</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                Samovyšetření prsou je jednoduchý a účinný způsob, jak včas odhalit možné změny, které mohou naznačovat rakovinu prsu. Je důležité věnovat se mu pravidelně, ideálně každý měsíc, mezi 5. a 10. dnem od začátku
                                menstruace. Pokud z nějakého důvodu nemenstruuješ, je doporučeno provádět samovyšetření každý měsíc v pravidelných intervalech.
                            </p>
                            <div>
                                <strong>1. Samovyšetření před zrcadlem</strong>
                                <p>Stoupni si před zrcadlo nejprve s rukama podél těla, následně zvedni ruce nad hlavu a pozoruj:</p>
                                <ul className="list-disc list-inside px-3">
                                    <li>Změnu barvy kůže – například zarudnutí, což může být známkou zánětu</li>
                                    <li>Změnu tvaru nebo barvy bradavek – například jejich zploštění nebo vtažení</li>
                                    <li>Nerovnosti povrchu prsou nebo podpaží – například vyklenutí nebo otok</li>
                                    <li>Výtok z bradavky – jakýkoliv výtok, který není běžný, by měl být okamžitě zkontrolován</li>
                                </ul>
                            </div>

                            <div>
                                <strong>2. Samovyšetření v leže</strong>
                                <p>Lehni si na levý bok, pravou ruku natáhni za sebe a levou rukou prohmatej oblast podpaží. Pak se přetoč na záda a prohmatej vnitřní část prsu. Tento postup opakuj následně i na druhém prsu.</p>
                            </div>

                            <div>
                                <strong>3. Samovyšetření v sedě</strong>
                                <p>V sedě můžeš prohmátnout i oblast pod klíčními kostmi. Pomalu a jemně prohmatávej tuto oblast, abys zjistila případné změny nebo hrudky.</p>
                            </div>

                            <p>
                                <strong>Co dělat, když objevíš změny?</strong>
                                <br />
                                Pokud při samovyšetření najdeš bulku nebo jakoukoli jinou změnu, nepanikař. Většina změn není rakovinná, ale je důležité to neignorovat a konzultovat to s odborníkem. Kontaktuj svého praktického lékaře, gynekologa nebo
                                mamalogické centrum a nech si poradit a pomoct.
                            </p>
                        </div>
                    </article>

                    <article className="  pt-2">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit md:rounded-r-md py-2 px-3 text-white z-10 font-light">Samovyšetření varlat</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                Rakovina varlat je u mladších mužů poměrně častá. Samovyšetření varlat je dobrý způsob, jak zjistit jakékoliv změny, které mohou naznačovat problémy. Samovyšetření prováděj ideálně každý měsíc, ideálně po sprše, kdy
                                jsou varlata teplá a uvolněná. Je důležité prohmátnout každé varle zvlášť. Použij proto obě ruce a jemně prohmatávej varlata od shora dolů. Dbej na to, abys zkontroloval celou oblast varlete, včetně spodní části.
                            </p>
                            <div>
                                <strong>Je důležité sledovat</strong>

                                <ul className="list-disc list-inside px-3">
                                    <li>Změny velikosti nebo tvaru – pokud jedno varle zvětší nebo změní tvar</li>
                                    <li>Ztvrdnutí – jakýkoliv pocit ztvrdnutí nebo tužších oblastí ve varlatech</li>
                                    <li>Změny barvy kůže – zarudnutí, ztmavnutí nebo jiná neobvyklá změna barvy</li>
                                    <li>Nerovnosti povrchu – jakékoli nepravidelnosti v povrchu varlete</li>
                                </ul>
                            </div>

                            <p>
                                <strong>Co dělat, když objevíš změny?</strong>
                                <br />
                                Pokud si při samovyšetření všimneš jakýchkoli změn nebo neobvyklostí, jako je výskyt boule, ztuhlosti, změny velikosti nebo barvy, nezoufej. Ve většině případů nemusí jít o rakovinu varlat, ale je důležité tyto změny
                                neignorovat. Kontaktuj svého ošetřujícího lékaře, který ti poradí, co dál. Možná ti pomůže i fakt, že léčba rakoviny varlat je obvykle velmi úspěšná, pokud je zahájena včas, proto na nic nečekej.
                            </p>
                        </div>
                    </article>

                    <article className="  pt-2">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit md:rounded-r-md py-2 px-3 text-white z-10 font-light">Samovyšetření kůže</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                <strong>Melanom kůže</strong> je jedním z nejnebezpečnějších typů rakoviny kůže, ale pokud je včas zachycen, lze ho úspěšně léčit. Jedním z klíčových faktorů prevence je ochrana před nadměrnou expozicí slunečnímu
                                záření a pravidelné používání opalovacích krémů s vysokým ochranným faktorem (SPF), a to nejen v létě, ale po celý rok! Protože vystavování kůže intenzivnímu slunci bez ochrany, zejména v období mezi 10. a 16. hodinou,
                                kdy je UV záření nejsilnější, zvyšuje riziko vzniku melanomu a dalších kožních nádorů.
                            </p>
                            <p>Samovyšetření kůže je snadný a účinný způsob, jak včas zachytit případné změny, které mohou naznačovat vznik melanomu. Celé tělo prohlédni třeba v zrcadle, nezapomeň ani na pokožku hlavy, záda, dlaně či chodidla.</p>
                            <div>
                                <strong>Při každé prohlídce pokožky se zaměř na</strong>

                                <ul className="list-disc list-inside px-3">
                                    <li>Změnu tvaru nebo velikosti znaménka – pokud znaménko začne měnit svůj tvar nebo se zvětší</li>
                                    <li>Asymetrické nebo nepravidelné okraje – zdravé znaménko má obvykle symetrické okraje, zatímco maligní může mít nepravidelný, roztřepený tvar</li>
                                    <li>Velikost větší než 6 mm – znaménka, která jsou větší než 6 mm, by měla být důkladně sledována</li>
                                    <li>Drsný nebo šupinatý povrch</li>
                                    <li>Výskyt více barev v jednom znaménku – melanom může mít různé barvy, zatímco zdravé znaménko bývá obvykle jednobarevné</li>
                                    <li>Svědění, krvácení nebo mokvání – jakákoliv změna, která způsobuje svědění nebo výtok, může být varovným signálem</li>
                                </ul>
                            </div>

                            <p>
                                <strong>Co dělat, když objevíš změny?</strong>
                                <br />
                                Pokud si všimneš jakékoli z výše uvedených změn, je důležité co nejdříve navštívit kožního lékaře, který provede podrobnou kontrolu. Kožní lékař může doporučit další testy, jako je dermatoskopie nebo biopsie, pro
                                přesnější diagnostiku.
                            </p>
                            <p>
                                Je důležité říct, že i když si nevšimneš žádných změn, pravidelná preventivní prohlídka znamének není vůbec od věci. Především pokud spadáš do rizikové skupiny – máš pihy, světlou pokožku, často se vystavuješ slunci
                                nebo máte rakovinu kůže v rodině.
                            </p>
                        </div>
                    </article>
                </section>

                <section className="bg-[#c7f2ff] p-3 border  mb-2">
                    <h2 className="text-2xl font-bold mb-3">Preventivní prohlídky</h2>

                    <p className="text-md">
                        V České republice jsou pravidelné preventivní prohlídky poskytovány v rámci veřejného zdravotního pojištění pro všechny občany. Preventivní prohlídku provádí tvůj praktický lékař, a to jednou za dva roky. Je však důležité se
                        na tuto prohlídku objednat předem, aby byla zajištěna její dostupnost.
                    </p>
                </section>

                <section className="">
                    <article className="  pt-2">
                        <h3 className="bg-[#1E8FDB] text-lg w-full md:w-fit md:rounded-r-md py-2 px-3 text-white z-10 font-light">Jak často a co všechno zahrnují</h3>
                        <div className="space-y-2 px-3 py-3">
                            <p>
                                V rámci preventivní prohlídky máš nárok i na onkologickou prevenci. Kdy tvůj lékař vyhodnotí možná rizika vzniku rakoviny na základě rodinné historie, profesního zaměření a aktuálního zdravotního stavu. Součástí této
                                prohlídky je vyšetření kůže, kdy lékař prověří kůži na přítomnost podezřelých znamének a změn, které mohou indikovat rakovinu kůže (melanom). U mužů se pak provádí vyšetření varlat na přítomnost neobvyklých změn,
                                zejména pokud máte tento typ rakoviny v rodině. V některých případech provádí i vyšetření prostaty. U žen se pak od 25 let provádí vyšetření prsu, v případě, že se rakovina prsu vyskytuje v rodině nebo na základě
                                jiných rizikových faktorů.
                            </p>
                            <p>V rámci prohlídky může lékař doporučit i screeningová vyšetření pro detekci rakoviny.</p>
                            <p>
                                Jedná se o screening rakoviny tlustého střeva a konečníku, kterou je doporučeno provádět jak u mužů, tak u žen od 50 let jednou ročně. Screening je prováděn prostřednictvím testu na okultní krvácení ve stolici, který
                                lze provést doma. Pokud test ukáže pozitivní výsledek, následuje obvykle kolonoskopické vyšetření. Od 55 let se provádí jednou za dva roky nebo jednou za 10 let kolonoskopie.
                            </p>
                            <p>
                                Ženy pak mají nárok od svých 45 let také na mamografické vyšetření prsu, a to každé dva roky. Screening probíhá na specializovaných mamografických pracovištích, která jsou součástí nemocnic nebo vybraných klinik. Každá
                                žena by pak měla pravidelně jednou ročně podstupovat gynekologickou prohlídku u svého gynekologa či gynekoložky, která zahrnuje PAP test pro prevenci rakoviny děložního čípku.
                            </p>

                            <p>
                                <strong>Chceš získat další informace ohledně preventivních prohlídek?</strong>
                                <br />
                                Máš několik možností. Kromě našeho webu ti na spoustu tvých otázek určitě odpoví i tvůj praktický lékař. Kromě toho můžeš navštívit webové stránky Ministerstva zdravotnictví ČR nebo vznést dotaz na svou zdravotní
                                pojišťovnu.
                            </p>
                            <p>
                                Pamatuj na jedno – <strong>rakovina si nevybírá</strong>. Prevence je to nejmenší, co pro sebe a své zdraví můžeš udělat. Tak nečekej, až bude pozdě!
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}
