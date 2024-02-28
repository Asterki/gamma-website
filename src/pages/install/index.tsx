import * as React from "react";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { motion } from "framer-motion";

import NavbarComponent from "@/components/navbar";

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

                    <div className="w-8/12 text-center bg-neutral-700/10 mt-8 border-b-2 border-neutral-700/20">
                        <h1
                            onClick={() =>
                                setAcordionsOpen({
                                    disclaimer: !acordionsOpen.disclaimer,
                                })
                            }
                            className="select-none cursor-pointer text-white w-full py-2 px-10 md:px-56 text-center shadow-lg text-lg "
                        >
                            Disclaimer
                        </h1>
                        <motion.div
                            variants={{
                                open: {
                                    opacity: 1,
                                    height: "auto",
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    },
                                },
                                closed: {
                                    opacity: 0,
                                    height: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    },
                                },
                            }}
                            initial="closed"
                            animate={
                                acordionsOpen.disclaimer ? "open" : "closed"
                            }
                            className="overflow-y-hidden"
                        >
                            <p className="p-4">
                                This modpack is 100% copyright free since it
                                redistributes little to no copyrighted content
                                developed by other modders. Indeed, G.A.M.M.A.
                                downloads every add-on directly from moddb or
                                github, and installs them automatically. You
                                will thus directly support modders by installing
                                G.A.M.M.A. On top of this, each addon original
                                source (moddb or github page) is directly
                                accessible from the Mod Organizer 2 instance by
                                right-clicking addons {">"} visit moddb.com.
                            </p>

                            <br />

                            <p className="p-4">
                                GAMMA is a large project using the work of many
                                talented modders, and each and everyone one of
                                them are contributing to making Stalker Anomaly
                                a better experience. I would thus like to thank
                                all the modders involved in this project by
                                making all the GAMMA addons (indicated by
                                G.A.M.M.A... in MO2) free to use, edit and
                                repost with modifications as long as the source
                                is indicated (original addon author, from
                                Stalker GAMMA). Repost of unmodified individual
                                parts of this project are not recommended and
                                may harm the community in the long run because
                                updates happen quite often in this repository
                                and it is thus better to directly post links to
                                the relevant files stored here.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default InstallIndex;
