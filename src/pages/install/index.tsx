import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import NavbarComponent from "@/components/navbar";

const InstallIndex = () => {
    return (
        <div className="bg-[#171717] min-h-screen w-full text-white">
            <Head>
                <title>Stalker G.A.M.M.A. | Install</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full">
                <NavbarComponent page="download" />

                <section className="flex flex-col items-center justify-center w-full">
                    <h1 className="max-h-56 lg:max-h-[8rem] bg-neutral-700/20 text-white w-full mt-8 py-6 px-10 md:px-56 text-center shadow-lg text-lg ">
                        Installation Guide
                    </h1>

                    <div className="w-8/12 text-center">
                        <p>
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

                        <p>
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
                    </div>
                </section>
            </main>
        </div>
    );
};

export default InstallIndex;
