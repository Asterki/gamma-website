import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NavbarComponent from "@/components/navbar";

const IndexPage = () => {
    return (
        <div className="bg-[#171717] min-h-screen w-full">
            <Head>
                <title>Stalker G.A.M.M.A.</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full">
                <section className="flex flex-col items-center justify-center w-full z-10">
                    <div className="relative">
                        <div className="max-h-auto lg:h-[32rem] w-full flex items-center justify-between flex-col py-10">
                            <NavbarComponent page="home" />
                            <div className="max-h-56 lg:max-h-[8rem] bg-neutral-700/20 text-white w-full mt-8 py-6 px-10 md:px-56 text-center shadow-lg text-lg ">
                                G.A.M.M.A. aims at providing a balanced
                                survival, scavenging, cooking, crafting and
                                repairing focused experience with a long
                                progression and smooth gameplay.
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center justify-center w-full mt-20">
                    <h1 className="text-3xl font-bold text-white">
                        Gameplay Features
                    </h1>
                    <p className="text-neutral-300 font-md">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe corrupti dolores molestiae itaque eum facilis
                        molestias, soluta dolor vero et iure. Minus sed quae sit
                        laborum maxime numquam qui dolores.
                    </p>

                    <Carousel
                        className="w-6/12 rounded-md"
                        autoPlay={true}
                        infiniteLoop={true}
                        centerMode={false}
                    >
                        <div className="rounded-md">
                            <img src="/images/carousel/img1.jpg" />
                        </div>
                        <div className="rounded-md">
                            <img src="/images/carousel/img2.jpg" />
                        </div>
                        <div className="rounded-md">
                            <img src="/images/carousel/img3.png" />
                        </div>
                        <div className="rounded-md">
                            <img src="/images/carousel/img4.jpg" />
                        </div>
                        <div className="rounded-md">
                            <img src="/images/carousel/img5.jpg" />
                        </div>
                        <div className="rounded-md">
                            <img src="/images/carousel/img6.jpg" />
                        </div>
                        <div className="rounded-md">
                            <img src="/images/carousel/img7.jpg" />
                        </div>
                        <div className="rounded-md">
                            <img src="/images/carousel/img8.jpg" />
                        </div>
                    </Carousel>
                </section>

                <section className="w-full">
                    <div className="flex md:flex-row flex-col items-center w-full justify-center mt-16">
                        <Link
                            href="https://discord.gg/stalker-gamma"
                            target="_blank"
                            className="text-center w-11/12 md:w-3/12 my-2 md:mx-2 p-4 border-2 border-green-400/20 text-white rounded-md text-2xl font-bold bg-green-400/20 transition-all hover:bg-green-400/40"
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
                            className="text-center w-11/12 md:w-3/12 my-2 md:mx-2 p-4 border-2 border-blue-400/30 text-white rounded-md text-2xl font-bold bg-blue-400/20 transition-all hover:bg-blue-400/40"
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
