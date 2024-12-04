import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
    active: string;
}

const Header = ({ active }: HeaderProps) => {
    return (
        <header className={`bg-gradient-to-r from-[#22BAE8] via-[#1C7ED6] to-[#0A58CA] pt-2 sm:py-2`}>
            <div className="max-w-7xl mx-auto sm:px-3 pl-2 flex flex-col sm:flex-row justify-between sm:items-center">
                <div className="flex items-start sm:items-center">
                    <Image
                        className="absolute sm:static size-20 sm:size-14"
                        src="/icon.webp"
                        alt="Web icon"
                        width={50}
                        height={50}
                    />

                    <h1 className="text-4xl ml-20 pl-3 sm:pl-0 mt-2 sm:ml-3 sm:mt-1 font-bold text-white tracking-wider">O krok napřed</h1>
                </div>

                <nav>
                    <ul
                        className=" mt-4  flex  font-semibold  tracking-wider  sm:mt-1 w-full 
                    text-lg sm:text-base justify-end sm:justify-normal sm:gap-0"
                    >
                        <li>
                            <Link
                                href="../"
                                className={` ${active == "index" ? "bg-[#c7f2ff] text-[#0A58CA]" : "bg-[#0A58CA] sm:bg-transparent text-white"}
                                transition duration-200 sm:hover:text-[#0A58CA] sm:hover:bg-[#c7f2ff] 
                                sm:px-2 md:px-6 sm:pt-7 sm:pb-6 border-gray-300 rounded-tl-md sm:rounded-none border-t border-l sm:border-t-0  py-1 px-2  `}
                            >
                                Úvod
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cancer"
                                className={` ${active == "cancer" ? "bg-[#c7f2ff] text-[#0A58CA]" : "bg-[#0A58CA] sm:bg-transparent text-white"}
                                transition duration-200 sm:hover:text-[#0A58CA] sm:hover:bg-[#c7f2ff] 
                                sm:px-2 md:px-6 sm:pt-7 sm:pb-6 border-gray-300 border-t border-l sm:border-t-0  py-1 px-2  `}
                            >
                                Rakovina
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/prevention"
                                className={` ${active == "prevention" ? "bg-[#c7f2ff] text-[#0A58CA] " : "bg-[#0A58CA] sm:bg-transparent text-white"}
                                transition duration-200 sm:hover:text-[#0A58CA] sm:hover:bg-[#c7f2ff]
                                sm:px-2 md:px-6 sm:pt-7 sm:pb-6 border-gray-300 border-t border-l sm:border-t-0  py-1 px-2  `}
                            >
                                Prevence
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/treatment"
                                className={` ${active == "treatment" ? "bg-[#c7f2ff] text-[#0A58CA] " : "bg-[#0A58CA] sm:bg-transparent text-white"}
                                transition duration-200 sm:hover:text-[#0A58CA] sm:hover:bg-[#c7f2ff] 
                                sm:px-2 md:px-6 sm:pt-7 sm:pb-6 border-gray-300 border-t border-l sm:border-t-0 sm:border-r  py-1 px-2  `}
                            >
                                Léčba
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
