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
                        RANDOM TITLE
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
                        defaultOpen={true}
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
                            <li>DirectX: DX10 Onwards (DX8 and DX9 may be used by following <Link className="text-blue-400 hover:underline" href="/">these steps after installing Stalker GAMMA</Link>)</li>
                            <li>Storage: 100 GB available space (SSD Recommended)</li>
                        </ul>
                    </AcordionComponent>
                </section>
            </main>
        </div>
    );
};

export default InstallIndex;
