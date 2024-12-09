import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
    active: string;
}

const Header = ({ active }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`bg-gradient-to-r from-[#22BAE8] via-[#1C7ED6] to-[#0A58CA] py-2 headerLinePatern`}>
            <div className="max-w-7xl mx-auto pl-1  flex flex-row justify-between sm:items-center ">
                <div className="flex  items-center">
                    <Image
                        className="static size-14"
                        src="/icon.webp"
                        alt="Web icon"
                        width={50}
                        height={50}
                    />
                    <h1 className="text-4xl ml-3 mt-1 font-bold text-white tracking-wider">O KROK NAPŘED</h1>
                </div>

                <button
                    onClick={toggleMenu}
                    className=" m-2 rounded-md md:hidden "
                >
                    <Image
                        src={isOpen ? "/close.png" : "/menu.png"}
                        alt=""
                        width={30}
                        height={30}
                    />
                </button>

                <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute top-16 mt-2 right-0   bg-[#1e8fdb] text-white p-4 rounded-b-md  border-b border-l`}>
                    <ul className="space-y-4 tracking-wider text-right text-lg ">
                        <li>
                            <Link
                                href="../"
                                className={`${active == "index" ? "font-bold" : "  "} transition duration-200    pt-1 pb-0.5 px-2`}
                            >
                                Úvod
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/health"
                                className={`${active == "health" ? "font-bold" : "  "} transition duration-200   pt-1 pb-0.5 px-2`}
                            >
                                Zdraví
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cancer"
                                className={`${active == "cancer" ? "font-bold" : ""} transition duration-200   pt-1 pb-0.5 px-2`}
                            >
                                Rakovina
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/prevention"
                                className={`${active == "prevention" ? "font-bold" : ""} transition duration-200   pt-1 pb-0.5 px-2`}
                            >
                                Prevence
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/treatment"
                                className={`${active == "treatment" ? "font-bold" : ""} transition duration-200    pt-1 pb-0.5 px-2`}
                            >
                                Léčba
                            </Link>
                        </li>
                    </ul>
                </div>

                <nav className="hidden md:block">
                    <ul className="mt-4 flex font-semibold tracking-wider md:mt-1 w-full text-lg md:text-base justify-end md:justify-normal md:gap-0">
                        <li>
                            <Link
                                href="../"
                                className={`${
                                    active == "index" ? "bg-[#c7f2ff] text-[#0A58CA]" : "bg-[#0A58CA] md:bg-transparent text-white"
                                } transition duration-200 md:hover:text-[#0A58CA] md:hover:bg-[#c7f2ff] md:px-4 lg:px-6 md:pt-7 md:pb-6 border-gray-300 border-l pt-1 pb-0.5 px-2`}
                            >
                                Úvod
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/health"
                                className={`${active == "health" ? "bg-[#c7f2ff] text-[#0A58CA]" : "bg-[#0A58CA] md:bg-transparent text-white"}
                                transition duration-200 md:hover:text-[#0A58CA] md:hover:bg-[#c7f2ff] md:px-4 lg:px-6 md:pt-7 md:pb-6 border-gray-300 border-l  pt-1 pb-0.5 px-2`}
                            >
                                Zdraví
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cancer"
                                className={`${
                                    active == "cancer" ? "bg-[#c7f2ff] text-[#0A58CA]" : "bg-[#0A58CA] md:bg-transparent text-white"
                                } transition duration-200 md:hover:text-[#0A58CA] md:hover:bg-[#c7f2ff] md:px-4 lg:px-6 md:pt-7 md:pb-6 border-gray-300  border-l  pt-1 pb-0.5 px-2`}
                            >
                                Rakovina
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/prevention"
                                className={`${
                                    active == "prevention" ? "bg-[#c7f2ff] text-[#0A58CA]" : "bg-[#0A58CA] md:bg-transparent text-white"
                                } transition duration-200 md:hover:text-[#0A58CA] md:hover:bg-[#c7f2ff] md:px-4 lg:px-5 md:pt-7 md:pb-6 border-gray-300  border-l pt-1 pb-0.5 px-2`}
                            >
                                Prevence
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/treatment"
                                className={`${
                                    active == "treatment" ? "bg-[#c7f2ff] text-[#0A58CA]" : "bg-[#0A58CA] md:bg-transparent text-white"
                                } transition duration-200 md:hover:text-[#0A58CA] md:hover:bg-[#c7f2ff] md:px-4 lg:px-6 md:pt-7 md:pb-6 border-gray-300  border-l md:border-t-0 md:border-r pt-1 pb-0.5 px-2`}
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
