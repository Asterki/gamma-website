import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faDownload,
    faKeyboard,
    faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NavbarComponent from "@/components/navbar";

const IndexPage = () => {
    return (
        <div className="bg-[#171717] min-h-screen w-full text-neutral-300 ">
            <Head>
                <title>Stalker G.A.M.M.A.</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full">
                <NavbarComponent page="home" />
                <div className="max-h-56 lg:max-h-[8rem] bg-neutral-700/20 text-white w-full mt-8 py-6 px-10 md:px-56 text-center shadow-lg">
                    G.A.M.M.A. aims at providing a balanced survival,
                    scavenging, cooking, crafting and repairing focused
                    experience with a long progression and smooth gameplay.
                </div>

                <section className="flex flex-col items-center justify-center w-11/12 md:w-8/12 mt-4">
                    <p className="text-lg text-center">
                        G.A.M.M.A. stands for Gigantic Automated Modular Modpack
                        for Anomaly.
                    </p>

                    <br />

                    <p className="text-center p-2 border-2 border-white/20 bg-white/10 rounded-md shadow-md">
                        It is based on STALKER Anomaly that is free and
                        standalone (no base games needed). The main motivation
                        behind this project is to provide an easy to install,
                        automatically updated and modular modding platform for
                        Stalker Anomaly, with base parameters and gameplay
                        mechanics setup to create a meaningful and enjoyable
                        sense of progression.
                    </p>

                    <br />

                    <p className="text-2xl text-center">Gameplay Features</p>

                    <Carousel
                        className="w-full shadow-lg "
                        autoPlay={true}
                        infiniteLoop={true}
                        centerMode={false}
                        showStatus={false}
                        showThumbs={false}
                    >
                        <div>
                            <Image
                                width={1000}
                                height={565}
                                alt=""
                                className="rounded-md"
                                src="/images/carousel/img1.jpg"
                            />
                            <p className="legend">
                                A-Life and Dynamic News System
                            </p>
                        </div>
                        <div>
                            <Image
                                width={1000}
                                height={565}
                                alt=""
                                className="rounded-md"
                                src="/images/carousel/img2.jpg"
                            />
                            <p className="legend">Several Zones to Explore</p>
                        </div>
                        <div>
                            <Image
                                width={1000}
                                height={565}
                                alt=""
                                className="rounded-md"
                                src="/images/carousel/img3.png"
                            />
                            <p className="legend">
                                All S.T.A.L.K.E.R. Locations Included
                            </p>
                        </div>
                        <div>
                            <Image
                                width={1000}
                                height={565}
                                alt=""
                                className="rounded-md"
                                src="/images/carousel/img4.jpg"
                            />
                            <p className="legend">Survival and Crafting</p>
                        </div>
                        <div>
                            <Image
                                width={1000}
                                height={565}
                                alt=""
                                className="rounded-md"
                                src="/images/carousel/img5.jpg"
                            />
                            <p className="legend">Factions Overhaul</p>
                        </div>
                        <div>
                            <Image
                                width={1000}
                                height={565}
                                alt=""
                                className="rounded-md"
                                src="/images/carousel/img6.jpg"
                            />
                            <p className="legend">Graphic Overhaul</p>
                        </div>
                        <div>
                            <Image
                                width={1000}
                                height={565}
                                alt=""
                                className="rounded-md"
                                src="/images/carousel/img7.jpg"
                            />
                            <p className="legend">Improved Gunplay</p>
                        </div>
                        <div>
                            <Image
                                width={1000}
                                height={565}
                                alt=""
                                className="rounded-md"
                                src="/images/carousel/img8.jpg"
                            />
                            <p className="legend">Ambience and Atmosphere</p>
                        </div>
                    </Carousel>

                    <br />

                    <p className="text-center p-2 border-2 border-white/20 bg-white/10 rounded-md shadow-md border-dotted">
                        This modpack is 100% copyright free since it
                        redistributes little to no copyrighted content developed
                        by other modders. Indeed, G.A.M.M.A. downloads every
                        add-on directly from moddb or github, and installs them
                        automatically. You will thus directly support modders by
                        installing G.A.M.M.A. On top of this, each addon
                        original source (moddb or github page) is directly
                        accessible from the Mod Organizer 2 instance by
                        right-clicking addons {">"} visit moddb.com.
                    </p>

                    <br />

                    <div className="text-center p-2 border-2 border-white/20 bg-white/10 rounded-md shadow-md">
                        <p className="text-2xl">Credits</p>
                        <p className="text-center">
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

                <section className="w-full my-16">
                    <h1 className="text-2xl text-center">Important Links</h1>
                    <div className="flex flex-col items-center w-full justify-center ">
                        <Link
                            href="/install"
                            className="text-center w-11/12 md:w-7/12 lg:w-5/12 my-2 md:mx-2 p-4 border-2 border-green-400/20 text-white rounded-md text-2xl font-bold bg-green-400/20 transition-all hover:bg-green-400/40"
                        >
                            <FontAwesomeIcon
                                icon={faDownload}
                                className="mr-2 text-emerald-300"
                            />
                            Install S.T.A.L.K.E.R. G.A.M.M.A.
                        </Link>
                        <Link
                            href="/manual"
                            className="text-center w-11/12 md:w-7/12 lg:w-5/12 my-2 md:mx-2 p-4 border-2 border-blue-400/20 text-white rounded-md text-2xl font-bold bg-blue-400/20 transition-all hover:bg-blue-400/40"
                        >
                            <FontAwesomeIcon
                                icon={faBook}
                                className="mr-2 text-blue-300"
                            />
                            Manual and FaQ
                        </Link>
                        <Link
                            href="/default-keybinds"
                            className="text-center w-11/12 md:w-7/12 lg:w-5/12 my-2 md:mx-2 p-4 border-2 border-yellow-400/20 text-white rounded-md text-2xl font-bold bg-yellow-400/20 transition-all hover:bg-yellow-400/40"
                        >
                            <FontAwesomeIcon
                                icon={faKeyboard}
                                className="mr-2 text-yellow-300"
                            />
                            Default Keybinds
                        </Link>

                        <Link
                            href="/addons"
                            className="text-center w-11/12 md:w-7/12 lg:w-5/12 my-2 md:mx-2 p-4 border-2 border-red-400/20 text-white rounded-md text-2xl font-bold bg-red-400/20 transition-all hover:bg-red-400/40"
                        >
                            <FontAwesomeIcon
                                icon={faPlusCircle}
                                className="mr-2 text-red-300"
                            />
                            Addons used in G.A.M.M.A.
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default IndexPage;
