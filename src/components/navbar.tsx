import Link from "next/link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faDownload,
    faNewspaper,
    faHome,
} from "@fortawesome/free-solid-svg-icons";

import { NextPage } from "next";

interface ComponentProps {
    page: "home" | "download" | "guide" | "discord" | "github";
}

const NavbarComponent: NextPage<ComponentProps> = (props) => {
    return (
        <div className="flex items-center justify-center flex-col">
            <img src="/images/splash.png" alt="" className="max-h-[16rem]" />
            <div className="max-h-56 lg:max-h-[4rem] w-full p-4 inline-flex items-center justify-center text-white/50 text-2xl box-shadow-md">
                <Link href="/" className="flex flex-col items-center justify-center mx-2 md:mx-4">
                    <FontAwesomeIcon
                        icon={faHome}
                        className={`mx-4 transition-all hover:text-neutral-200/80 cursor-pointer text-[30px] ${props.page == "home" ? "text-white" : ""}`}
                    />
                    <p className="text-sm">Home</p>
                </Link>
                <Link href="https://discord.gg/stalker-gamma" target="_blank" className="flex flex-col items-center justify-center mx-2 md:mx-4">
                    <FontAwesomeIcon
                        icon={faDiscord}
                        className="mx-4 transition-all hover:text-neutral-200/80 cursor-pointer text-[30px]"
                    />
                    <p className="text-sm">Discord</p>
                </Link>
                <Link href="/install" className="flex flex-col items-center justify-center mx-2 md:mx-4">
                    <FontAwesomeIcon
                        icon={faDownload}
                        className={`mx-4 transition-all hover:text-neutral-200/80 cursor-pointer text-[30px] ${props.page == "download" ? "text-white" : ""}`}
                    />
                    <p className="text-sm">Download</p>
                </Link>

                <Link href="/guide" className="flex flex-col items-center justify-center mx-2 md:mx-4">
                    <FontAwesomeIcon
                        icon={faNewspaper}
                        className={`mx-4 transition-all hover:text-neutral-200/80 cursor-pointer text-[30px] ${props.page == "guide" ? "text-white" : ""}`}
                    />
                    <p className="text-sm">Guide</p>
                </Link>

                <Link href="https://github.com/Grokitach/Stalker_GAMMA" target="_blank" className="flex flex-col items-center justify-center mx-2 md:mx-4">
                    <FontAwesomeIcon
                        icon={faGithub}
                        className={`mx-4 transition-all hover:text-neutral-200/80 cursor-pointer text-[30px] ${props.page == "github" ? "text-white" : ""}`}
                    />
                    <p className="text-sm">GitHub</p>
                </Link>
            </div>
        </div>
    );
};

export default NavbarComponent;
