import * as React from "react";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";

import NavbarComponent from "@/components/navbar";
import AcordionComponent from "@/components/acordion";

const InstallIndex = () => {
    const [acordionsOpen, setAcordionsOpen] = React.useState({
        disclaimer: false,
    });

    return (
        <div className="bg-[#171717] min-h-screen w-full text-white">
            <Head>
                <title>Stalker G.A.M.M.A. | Install</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full">
                <NavbarComponent page="download" />

                <section className="flex flex-col items-center justify-center w-full ">
                    <h1 className="max-h-56 lg:max-h-[8rem] bg-neutral-700/20 text-white w-full mt-8 py-6 px-10 md:px-56 text-center shadow-lg text-lg ">
                        Installation Guide
                    </h1>

                    <p>This page is under heavy development and may change.</p>

                    <AcordionComponent defaultOpen={true} title="Disclaimer">
                        <p className="p-4">
                            This modpack is 100% copyright free since it
                            redistributes little to no copyrighted content
                            developed by other modders. Indeed, G.A.M.M.A.
                            downloads every add-on directly from moddb or
                            github, and installs them automatically. You will
                            thus directly support modders by installing
                            G.A.M.M.A. On top of this, each addon original
                            source (moddb or github page) is directly accessible
                            from the Mod Organizer 2 instance by right-clicking
                            addons {">"} visit moddb.com.
                        </p>

                        <br />

                        <p className="p-4">
                            GAMMA is a large project using the work of many
                            talented modders, and each and everyone one of them
                            are contributing to making Stalker Anomaly a better
                            experience. I would thus like to thank all the
                            modders involved in this project by making all the
                            GAMMA addons (indicated by G.A.M.M.A... in MO2) free
                            to use, edit and repost with modifications as long
                            as the source is indicated (original addon author,
                            from Stalker GAMMA). Repost of unmodified individual
                            parts of this project are not recommended and may
                            harm the community in the long run because updates
                            happen quite often in this repository and it is thus
                            better to directly post links to the relevant files
                            stored here.
                        </p>
                    </AcordionComponent>

                    <AcordionComponent
                        defaultOpen={false}
                        title="Minimum Requirements"
                    >
                        <p className="p-4">
                            Stalker GAMMA is a very CPU intensive game, below
                            are noted the minimum requirements to run Stalker
                            GAMMA
                            <p>
                                <b>Note:</b> Visual and gameplay settings may be
                                tweaked to better perform in your computer.{" "}
                                <Link
                                    className="text-blue-400 hover:underline"
                                    href="/"
                                >
                                    Learn More
                                </Link>
                            </p>
                        </p>

                        <ul className="p-4">
                            <li>OS: Windows 7 or later</li>
                            <li>Processor: Intel Core i5-2500K</li>
                            <li>Memory: 8 GB RAM</li>
                            <li>Graphics: Nvidia GeForce GTX 760</li>
                            <li>
                                DirectX: DX10 Onwards (DX8 and DX9 may be used
                                by following{" "}
                                <Link
                                    className="text-blue-400 hover:underline"
                                    href="/"
                                >
                                    these steps after installing Stalker GAMMA
                                </Link>
                                )
                            </li>
                            <li>
                                Storage: 100 GB available space (SSD
                                Recommended) Note: This does not account for
                                additional modifications that may be added
                            </li>
                        </ul>
                    </AcordionComponent>

                    <AcordionComponent
                        defaultOpen={false}
                        title="READ BEFORE PROCEEDING"
                    >
                        <h1 className="text-xl font-bold">
                            CLEAN, UNMODIFIED COPY OF ANOMALY 1.5.1 IS REQUIRED.
                            THIS GUIDE PROVIDE A LINK FOR IT.
                        </h1>
                        <h1 className="text-xl font-bold">
                            YOU WILL NEED TO DOWNLOAD THE 1.5.2 UPDATE FOR
                            ANOMALY. THIS GUIDE PROVIDE A LINK FOR IT.
                        </h1>
                        <h1 className="text-xl font-bold">
                            DON&APOS;T SKIP THE 1.5.2 UPDATE, YOU NEED IT, GAMMA
                            WON&APOS;T WORK WITHOUT IT.
                        </h1>
                        <ul className="mt-4 list list-disc">
                            <li className="list-item">
                                NONE OF THESE STEPS ARE OPTIONAL, ALL ARE HARD
                                REQUIREMENTS, DON&apos;T SKIP THEM.
                            </li>
                            <li className="list-item">
                                FIREWALL AND ANTI-VIRUS NEED TO BE EITHER OFF OR
                                WITH EXCEPTIONS FOR ANOMALY AND THE LAUNCHER.
                            </li>
                            <li className="list-item">
                                DON&apos;T CONTACT STAFF IN PRIVATE ASKING FOR
                                HELP, YOU WILL BE IGNORED.{" "}
                            </li>
                        </ul>
                        If you have any issues with the installation, ask in{" "}
                        <Link
                            className="px-2 py-1 bg-blue-500/20 text-white rounded font-bold hover:bg-blue-600/50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                            href={
                                "https://discord.com/channels/912320241713958912/1026866080347603065"
                            }
                        >
                            #only-installation-problems
                        </Link>{" "}
                        and or in{" "}
                        <Link
                            className="px-2 py-1 bg-blue-500/20 text-white rounded font-bold hover:bg-blue-600/50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                            href={
                                "https://discord.com/channels/912320241713958912/922555488665743391"
                            }
                        >
                            #base-gamma-support
                        </Link>{" "}
                        (You will need to join the{" "}
                        <Link href={"/discord"} className="text-blue-400">
                            discord server
                        </Link>{" "}
                        to access these chat channels)
                    </AcordionComponent>

                    <AcordionComponent
                        defaultOpen={false}
                        title="Important before proceeding"
                    >
                        1. You&apos;ll need AT LEAST 16 GB for Anomaly and 100+
                        GB for G.A.M.M.A. on your hard drive/SSD, we HIGHLY
                        RECOMMEND to use a SSD. MAKE SURE YOU HAVE SPACE IN YOUR
                        HARD DRIVE/SSD OR YOU WILL HAVE PROBLEMS.
                        <br />
                        <br />
                        2. 7Zip: https://www.7-zip.org/download.html --- If you
                        don&apos;t know which version to get, get the 64-bit
                        Windows version. If you&apos;re wondering &quot;why do I
                        have to use 7zip? Can&apos;,t I just use WinRAR as I
                        always do?&quot; No, you can&apos;t use WinRAR, because
                        the program is known to cause extraction issues for
                        files with specific file extensions, in this case .7zip
                        and .7z, this is why.
                    </AcordionComponent>
                </section>
            </main>
        </div>
    );
};

export default InstallIndex;
