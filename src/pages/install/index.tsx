import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const InstallIndex = () => {
    return (
        <div className="bg-[#171717] min-h-screen w-full">
            <Head>
                <title>Stalker G.A.M.M.A. | Install</title>
            </Head>

            <main className="flex items-center justify-center w-full">
                <section className="flex flex-col items-center justify-center w-full">
                    <div className="bg-green-400/60 w-full p-4 flex items-center justify-center text-white/50 text-2xl box-shadow-md shadow-green-400/30 shadow-lg">
                        <FontAwesomeIcon
                            icon={faDiscord}
                            className="mx-2 transition-all hover:text-white cursor-pointer"
                        />
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="mx-2 transition-all hover:text-white cursor-pointer"
                        />
                        <FontAwesomeIcon
                            icon={faDownload}
                            className="mx-2 transition-all hover:text-white cursor-pointer"
                        />
                    </div>
                   

                   Coming Soon, me is lazy
                </section>
            </main>
        </div>
    );
};

export default InstallIndex;
