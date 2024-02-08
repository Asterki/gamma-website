import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => {
    return (
        <div className="bg-[#171717] min-h-screen w-full">
            <Head>
                <title>Stalker G.A.M.M.A.</title>
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
                    <img
                        src="/images/splash.png"
                        className="w-5/12 mt-20"
                        alt=""
                    />

                    <div className="flex items-center w-full justify-center">
                        <Link
                            href="https://discord.gg/stalker-gamma"
                            target="_blank"
                            className="text-center w-3/12 mx-2 p-4 border-2 border-green-400/30 text-white rounded-md text-2xl font-bold bg-green-400/20 transition-all hover:bg-green-400/40"
                        >
                            Download G.A.M.M.A.
                            <FontAwesomeIcon
                                icon={faDownload}
                                className="mx-2 transition-all hover:text-white cursor-pointer"
                            />
                        </Link>

                        <Link
                            href="https://discord.gg/stalker-gamma"
                            target="_blank"
                            className="text-center w-3/12 mx-2 p-4 border-2 border-blue-400/30 text-white rounded-md text-2xl font-bold bg-blue-400/20 transition-all hover:bg-blue-400/40"
                        >
                            Join Discord
                            <FontAwesomeIcon
                                icon={faDiscord}
                                className="mx-2 transition-all hover:text-white cursor-pointer"
                            />
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default IndexPage;
