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
                <div className="flex flex-col items-center justify-center mx-4">
                    <FontAwesomeIcon
                        icon={faHome}
                        className={`mx-4 transition-all hover:text-white cursor-pointer text-[30px] ${props.page == "home" ? "text-white" : ""}`}
                    />
                    <p className="text-sm">Home</p>
                </div>
                <div className="flex flex-col items-center justify-center mx-4">
                    <FontAwesomeIcon
                        icon={faDiscord}
                        className="mx-4 transition-all hover:text-white cursor-pointer text-[30px]"
                    />
                    <p className="text-sm">Discord</p>
                </div>
                <div className="flex flex-col items-center justify-center mx-4">
                    <FontAwesomeIcon
                        icon={faDownload}
                        className={`mx-4 transition-all hover:text-white cursor-pointer text-[30px] ${props.page == "download" ? "text-white" : ""}`}
                    />
                    <p className="text-sm">Download</p>
                </div>

                <div className="flex flex-col items-center justify-center mx-4">
                    <FontAwesomeIcon
                        icon={faNewspaper}
                        className={`mx-4 transition-all hover:text-white cursor-pointer text-[30px] ${props.page == "guide" ? "text-white" : ""}`}
                    />
                    <p className="text-sm">Guide</p>
                </div>

                <div className="flex flex-col items-center justify-center mx-4">
                    <FontAwesomeIcon
                        icon={faGithub}
                        className={`mx-4 transition-all hover:text-white cursor-pointer text-[30px] ${props.page == "github" ? "text-white" : ""}`}
                    />
                    <p className="text-sm">GitHub</p>
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;
