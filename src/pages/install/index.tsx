import * as React from "react";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import NavbarComponent from "@/components/navbar";
import AcordionComponent from "@/components/acordion";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faKeyboard, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

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

                <section className="flex flex-col items-center justify-center w-full mb-32">
                    <h1 className="max-h-56 lg:max-h-[8rem] bg-neutral-700/20 text-white w-full mt-8 py-6 px-10 md:px-56 text-center shadow-lg text-lg ">
                        Installation Guide
                    </h1>

                    <p>This page is under heavy development and may change.</p>

                    <div className="p-4 border-2 border-white/20 border-dotted w-11/12 md:w-8/12 rounded-md flex flex-col items-center justify-center my-2">
                        <h1 className="text-center my-2 mb-[-20px] text-2xl">
                            READ BEFORE PROCEEDING
                        </h1>
                        <AcordionComponent
                            defaultOpen={true}
                            title="Disclaimer"
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
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Minimum Requirements"
                        >
                            <p className="p-4">
                                Stalker GAMMA is a very CPU intensive game,
                                below are noted the minimum requirements to run
                                Stalker GAMMA
                                <p>
                                    <b>Note:</b> Visual and gameplay settings
                                    may be tweaked to better perform in your
                                    computer.{" "}
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
                                    DirectX: DX10 Onwards (DX8 and DX9 may be
                                    used by following{" "}
                                    <Link
                                        className="text-blue-400 hover:underline"
                                        href="/"
                                    >
                                        these steps after installing Stalker
                                        GAMMA
                                    </Link>
                                    )
                                </li>
                                <li>
                                    Storage: ~120 GB available space (SSD
                                    Recommended) Note: This does not account for
                                    additional modifications that may be added
                                </li>
                            </ul>
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Important"
                        >
                            <h1 className="text-xl font-bold">
                                CLEAN, UNMODIFIED COPY OF ANOMALY 1.5.1 IS
                                REQUIRED. THIS GUIDE PROVIDE A LINK FOR IT.
                            </h1>
                            <h1 className="text-xl font-bold">
                                YOU WILL NEED TO DOWNLOAD THE 1.5.2 UPDATE FOR
                                ANOMALY. THIS GUIDE PROVIDE A LINK FOR IT.
                            </h1>
                            <h1 className="text-xl font-bold">
                                DON&apos;T SKIP THE 1.5.2 UPDATE, YOU NEED IT,
                                GAMMA WON&apos;T WORK WITHOUT IT.
                            </h1>
                            <ul className="mt-4 list list-disc">
                                <li className="list-item">
                                    NONE OF THESE STEPS ARE OPTIONAL, ALL ARE
                                    HARD REQUIREMENTS, DON&apos;T SKIP THEM.
                                </li>
                                <li className="list-item">
                                    FIREWALL AND ANTI-VIRUS NEED TO BE EITHER
                                    OFF OR WITH EXCEPTIONS FOR ANOMALY AND THE
                                    LAUNCHER.
                                </li>
                                <li className="list-item">
                                    DON&apos;T CONTACT STAFF IN PRIVATE ASKING
                                    FOR HELP, YOU WILL BE IGNORED.{" "}
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
                            <div className="flex items-center justify-center">
                                <Link
                                    href="https://discord.gg/stalker-gamma"
                                    target="_blank"
                                    className="block text-center w-11/12 md:w-3/12 my-2 md:mx-2 p-4 border-2 border-blue-400/20 text-white rounded-md text-2xl font-bold bg-blue-400/20 transition-all hover:bg-blue-400/40"
                                >
                                    <FontAwesomeIcon
                                        icon={faDiscord}
                                        className="mr-2 text-blue-300"
                                    />
                                    Join Discord
                                </Link>
                            </div>
                        </AcordionComponent>
                    </div>

                    <div className="p-4 border-2 border-white/20 border-dotted w-11/12 md:w-8/12 rounded-md flex flex-col items-center justify-center my-2">
                        <h1 className="text-center my-2 mb-[-20px] text-2xl">
                            INSTALLATION STEPS, ALL OF THEM ARE REQUIRED
                        </h1>

                        <AcordionComponent
                            defaultOpen={false}
                            title="7Zip Installation"
                        >
                            2. 7Zip: https://www.7-zip.org/download.html --- If
                            you don&apos;t know which version to get, get the
                            64-bit Windows version. If you&apos;re wondering
                            &quot;why do I have to use 7zip? Can&apos;,t I just
                            use WinRAR as I always do?&quot; No, you can&apos;t
                            use WinRAR, because the program is known to cause
                            extraction issues for files with specific file
                            extensions, in this case .7zip and .7z, this is why.
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Folder Creation"
                        >
                            Create <b>TWO</b> different folders at the{" "}
                            <b>root</b> of one of your drives, e.g. C:/, D:/,{" "}
                            <b>
                                whatever drive is fine, you&apos;re not
                                obligated to use C: if you don&apos;t want to or
                                just cannot use it.
                            </b>
                            <br />
                            One folder will contain Anomaly and the other will
                            contain G.A.M.M.A. <br />
                            <b>
                                <u>DO NOT</u>
                            </b>{" "}
                            create nor place these folders in{" "}
                            <b>
                                Downloads, Program Files, Program Files x86,
                                Documents, Desktop, OneDrive.
                            </b>
                            <br />
                            <br />
                            <p className="text-xl font-bold">
                                THIS <u>ISN&apos;T</u> A SUGGESTION, these
                                folders are <u>KNOWN</u> to be problematic with
                                videogames.
                                <br />
                                <u>DON&apos;T USE THEM.</u>
                            </p>
                            <br />
                            <div>
                                For example, you can do this: <br />
                                <b>C</b>:/Anomaly and <b>C</b>:/GAMMA. <br />
                                But you can also do this: <br />
                                <b>D</b>:/Anomaly and <b>D</b>:/GAMMA.
                            </div>
                            <br />
                            <div>
                                <b>DO NOT</b> create something like:
                                D:/Stalker/, with <b>both</b> Anomaly and GAMMA
                                folders{" "}
                                <b>
                                    inside of it, this only leads to problems,{" "}
                                    <u>DON&apos;T DO IT.</u>
                                </b>{" "}
                                Your OCD will have to vent with something else.
                                <br />
                                Point is: as long as you have{" "}
                                <b>TWO DIFFERENT FOLDERS</b> for Anomaly and
                                G.A.M.M.A on the <b>same root drive</b>, it will
                                be fine. <br />
                                <b>DO NOT</b> use special characters in any of
                                the folders when you name them, such as:{" "}
                                {"[-,@#$%"}, etc. <br />
                                For this guide, we will use C:/ as our preferred
                                drive, so{" "}
                                <b>
                                    adjust your installation accordingly if you
                                    use another drive
                                </b>
                                , the locations of everything are{" "}
                                <b>exactly the same</b>, the only thing that
                                will change is your <b>drive letter</b>.
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/images/installation/folders.webp"
                                        alt="Folders"
                                    />
                                </div>
                            </div>
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Antivirus Exception"
                        >
                            Add your Anomaly and G.A.M.M.A. folders to the
                            Windows Defender exclusions and disable real-time
                            protection temporarily, <b>BEFORE</b> downloading
                            anything. <br />
                            <Link
                                href="https://imgur.com/a/7Mg4fjo"
                                className="text-blue-400"
                            >
                                Follow this
                            </Link>
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Anomaly 1.5.1"
                        >
                            Anomaly 1.5.1 - <b>DO NOT</b> use an already
                            installed and modded Anomaly, you need a clean
                            Anomaly folder. This is the official Moddb link for
                            it: <br />
                            <h2 className="text-2xl">
                                <Link
                                    href={
                                        "https://www.moddb.com/mods/stalker-anomaly/downloads/stalker-anomaly-151"
                                    }
                                    className="text-blue-400"
                                >
                                    https://www.moddb.com/mods/stalker-anomaly/downloads/stalker-anomaly-151
                                </Link>
                            </h2>
                            An official torrent is available via this magnet
                            link: <br />
                            <textarea
                                name=""
                                id=""
                                className="w-full p-2 bg-[#333] text-white"
                                readOnly={true}
                            >
                                magnet:?xt=urn:btih:c307c208636d1fd98ca4fe70ca0c692035659855&dn=Anomaly-1.5.1.7z&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://bt1.archive.org:6969/announce&tr=udp://bt2.archive.org:6969/announce&tr=udp://tracker.torrent.eu.org:451/announce
                            </textarea>
                            And we also suggest to use QBittorrent if you
                            don&apos;t have a program yet:{" "}
                            <Link
                                href="https://www.qbittorrent.org/download"
                                className="text-blue-400"
                            >
                                QBittorrent
                            </Link>
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Update 1.5.2 for Anomaly (REQUIRED)"
                        >
                            This is the official Moddb link for it:
                            <h2 className="text-2xl">
                                <Link
                                    href={
                                        "https://www.moddb.com/mods/stalker-anomaly/downloads/stalker-anomaly-151-to-152"
                                    }
                                    className="text-blue-400"
                                >
                                    https://www.moddb.com/mods/stalker-anomaly/downloads/stalker-anomaly-151-to-152
                                </Link>
                            </h2>
                            An official torrent is available via this magnet
                            link:
                            <textarea
                                name=""
                                id=""
                                className="w-full p-2 bg-[#333] text-white"
                                readOnly={true}
                            >
                                magnet:?xt=urn:btih:06580e9c871086d5b847a84940bd89b6d97c975f&dn=Anomaly-1.5.1-to-1.5.2-Update.7z&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://bt1.archive.org:6969/announce&tr=udp://bt2.archive.org:6969/announce&tr=udp://tracker.torrent.eu.org:451/announce
                            </textarea>
                            And we also suggest to use QBittorrent if you
                            don&apos;t have a program yet:{" "}
                            <Link
                                href="https://www.qbittorrent.org/download"
                                className="text-blue-400"
                            >
                                QBittorrent
                            </Link>
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="GAMMA RC3.7z"
                        >
                            Download the G.A.M.M.A. client GAMMA RC3.7z from
                            this link:
                            <h2 className="text-2xl">
                                <Link
                                    href={"https://gofile.io/d/ccbnSP"}
                                    className="text-blue-400"
                                >
                                    https://gofile.io/d/ccbnSP
                                </Link>
                            </h2>
                            <br />
                            <h2 className="text-xl">
                                We have mirrors down below if this one
                                doesn&apos;t work or is too slow.
                            </h2>
                            GAMMA RC3: Mirror 1:
                            <h2 className="text-2xl">
                                <Link
                                    href={
                                        "https://www.mediafire.com/file/y9e4fg4qbi7m6et/GAMMA_RC3.7z/file"
                                    }
                                    className="text-blue-400"
                                >
                                    https://www.mediafire.com/file/y9e4fg4qbi7m6et/GAMMA_RC3.7z/file
                                </Link>
                            </h2>
                            Mirror 2: Soon™️ in theory
                            <br />
                            <br />
                            <p className="text-xl">
                                Before moving on to the Part 2 of the guide,
                                check and be sure you have these files:{" "}
                                <Link
                                    href={"https://imgur.com/Rmt9vYg"}
                                    className="text-blue-400"
                                >
                                    https://imgur.com/Rmt9vYg
                                </Link>
                                <br />
                                If you&apos;re following the video guide you
                                won&apos;t have the
                                {' "downloads.zip"'} file, do&apos;t worry about
                                it because it&apos;s an optional file.
                            </p>
                        </AcordionComponent>
                    </div>

                    <div className="p-4 border-2 border-white/20 border-dotted w-11/12 md:w-8/12 rounded-md flex flex-col items-center justify-center my-2">
                        <h1 className="text-center my-2 mb-[-20px] text-2xl">
                            INSTALLATION AND DOWNLOADS
                        </h1>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Extract Anomaly"
                        >
                            <b>Remember to use 7Zip to extract Anomaly</b>
                            <br />
                            <p>
                                Using 7Zip, extract{" "}
                                <code>S.T.A.L.K.E.R. Anomaly 1.5.1.2.7z</code>{" "}
                                into your Anomaly folder you created in the
                                previous section.
                                <br />
                                <br />
                                <img
                                    src="https://i.imgur.com/Zu0e0Et.png"
                                    alt=""
                                />
                                <p className="text-sm text-white/80">
                                    You can extract files by right-clicking the
                                    file → 7-Zip → Extract files… then selecting
                                    C:/Anomaly. DO NOT copy-paste or drag and
                                    drop - this may lead to{" "}
                                    <b>extraction errors.</b>
                                </p>
                                <img
                                    src="https://i.imgur.com/PBAjy2i.png"
                                    alt=""
                                />
                            </p>
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Update Anomaly to version 1.5.2"
                        >
                            <p>
                                <b>Using 7Zip</b>, extract{" "}
                                <code>
                                    S.T.A.L.K.E.R.
                                    Anomaly-1.5.1-to-1.5.2-Update.7z
                                </code>{" "}
                                into the same Anomaly folder. Use the same
                                method as in step 1.{" "}
                            </p>
                            <br />
                            <p>
                                <b>WARNING:</b> You should need to overwrite
                                files and you should see{" "}
                                <code>changes151to152.txt</code> in your Anomaly
                                folder if the patching is successful.
                            </p>
                            <img src="https://i.imgur.com/wN79fQq.png" alt="" />

                            <br />

                            <p>
                                Launch Anomaly <b>ONCE</b> by using the
                                AnomalyLauncher.exe file and reach the in-game
                                menu. Then, exit the game.
                                <img
                                    src="https://i.imgur.com/j0zbFFg.png"
                                    alt=""
                                />
                            </p>
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Extract GAMMA RC3.7z"
                        >
                            <b>Using 7Zip</b>, extract GAMMA RC3.7z into the
                            GAMMA folder you made in the previous section. Use
                            the same method as in step 1 but choose your GAMMA
                            folder this
                            time.​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
                            <img src="https://i.imgur.com/ELAkI8f.png" alt="" />
                        </AcordionComponent>

                        <AcordionComponent defaultOpen={false} title="Warning">
                            <p className="text-2xl font-bold">
                                YOU MUST BE UNBLOCKED ON MODDB.COM TO PROCEED
                            </p>
                            <p>
                                &quot;how do I know if I am unblocked or not? I
                                don&apos;t even have an account&quot;, you
                                won&apos;t be able to browse the website,
                                that&apos;s it, you&apos;ll see it clearly,
                                it&apos;s a giant warning on a red screen.
                            </p>

                            <br />

                            <p>
                                In the eventual case you find out that you are
                                indeed blocked, read the message you&apos;ll get
                                to see how long the block will be <br />
                                Wait for that amount of time and add 40 minutes
                                more. When you&apos;re unblocked, proceed with
                                instructions below.
                            </p>
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Initialize the launcher"
                        >
                            Go inside C:\GAMMA\Grok&apos;s Modpack Installer and
                            right click on the{" "}
                            <code>G.A.M.M.A. Launcher.exe</code>, then click on
                            &quot;<b className="text-xl">Launch as Admin</b>
                            &quot;. Once the launcher is opened, click the
                            &quot;
                            <b>First Install Initialization</b>&quot; button.
                            <img src="https://i.imgur.com/y27FbfN.png" alt="" />
                            <br />
                            <p>
                                {" "}
                                An error should pop up stating &quot;Cannot open
                                instance &apos;Portable&apos;(...).&quot; Hit
                                OK.
                            </p>
                            <img src="https://i.imgur.com/Rc7urd1.png" alt="" />
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Configure Mod Organizer 2"
                        >
                            <p>
                                A new window will pop up asking you to{" "}
                                <b>browse for an instance</b>. Browse to the{" "}
                                <b>Anomaly</b> folder on the C:/ drive and{" "}
                                <b>
                                    SELECT the folder itself by clicking it
                                    ONCE, DON&apos;T open the folder.
                                </b>
                            </p>
                            <img src="https://i.imgur.com/NZqOl3j.png" alt="" />
                            <br />
                            <p>Afterwards, MO2 will open</p>
                            <img src="https://i.imgur.com/pBe8YAy.png" alt="" />
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Install Mods"
                        >
                            Close MO2 and go back to the launcher.{" "}
                            <b>Make sure every box is CHECKED/ENABLED</b>. Hit
                            the <b>“Install / Update”</b> button and let it run.
                            <img src="https://i.imgur.com/jyfAQ8T.png" alt="" />
                            <br />
                            <p>
                                The launcher may freeze or take a long while to
                                install,{" "}
                                <b>
                                    THIS IS NORMAL, DON&apos;T CLOSE THE WINDOW
                                    UNTIL THE PROCEDURE IS DONE
                                </b>
                                .
                            </p>
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Launch MO2"
                        >
                            <p>
                                When it&apos;s done, hit the play button and MO2
                                will launch. You will get another error that
                                will {'"warn"'} you that you&apos;ll have to use
                                another profile, don&apos;t worry about it,{" "}
                                <b>it&apos;s harmless</b>.
                            </p>
                            <img src="https://i.imgur.com/OO1sOKw.png" alt="" />

                            <br />

                            <p>
                                MO2 should launch with the correct number of
                                mods
                                <Link
                                    className="px-2 py-1 bg-blue-500/20 text-white rounded font-bold hover:bg-blue-600/50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                    href={
                                        "https://discord.com/channels/912320241713958912/922555488665743391"
                                    }
                                >
                                    (📍xxx-mods-in-mo2)
                                </Link>{" "}
                                , with no X icons (
                                <code>No valid game data</code>) in the{" "}
                                <b>Flags</b> column, sorted by <b>Priority</b>.
                                (<b>the image below is an EXAMPLE</b>, the mods
                                number <b>WILL CHANGE</b> in the future)
                                <img
                                    src="https://i.imgur.com/faJDKZ2.png"
                                    alt=""
                                />
                                <br />
                                If this is true, then hit Run. The Anomaly
                                launcher should show again. Hit play. The GAMMA
                                splash screen should appear and then you should
                                see the main menu.
                                <p className="flex items-center justify-center text-center">
                                    <img
                                        src="https://i.imgur.com/CnFkCZW.png"
                                        alt=""
                                    />
                                </p>
                            </p>

                            <br />

                            <div className="flex items-center justify-center">
                                <Link
                                    href="https://discord.gg/stalker-gamma"
                                    target="_blank"
                                    className="block text-center w-11/12 md:w-3/12 my-2 md:mx-2 p-4 border-2 border-blue-400/20 text-white rounded-md text-2xl font-bold bg-blue-400/20 transition-all hover:bg-blue-400/40"
                                >
                                    <FontAwesomeIcon
                                        icon={faDiscord}
                                        className="mr-2 text-blue-300"
                                    />
                                    Join Discord
                                </Link>
                            </div>
                        </AcordionComponent>
                    </div>

                    <div className="p-4 border-2 border-white/20 border-dotted w-11/12 md:w-8/12 rounded-md flex flex-col items-center justify-center my-2">
                        <h1 className="text-center my-2 mb-[-20px] text-2xl">
                            Ending, credits, thank you, etc.
                        </h1>

                        <AcordionComponent defaultOpen={false} title="Ending">
                            At this point you should be able to traverse the
                            Zone. <br />
                            <p>
                                REMEMBER TO JOIN THE DISCORD SERVER FOR
                                IMPORTANT PATCHES AND UPATES
                            </p>
                            <div className="flex items-center justify-center">
                                <Link
                                    href="https://discord.gg/stalker-gamma"
                                    target="_blank"
                                    className="block text-center w-11/12 md:w-3/12 my-2 md:mx-2 p-4 border-2 border-blue-400/20 text-white rounded-md text-2xl font-bold bg-blue-400/20 transition-all hover:bg-blue-400/40"
                                >
                                    <FontAwesomeIcon
                                        icon={faDiscord}
                                        className="mr-2 text-blue-300"
                                    />
                                    Join Discord
                                </Link>
                            </div>
                            A huge thanks to @Srgtofdeath for making 95% of this
                            new installation guide and to @S5yn3T for helping
                            behind the scene 🤝 <br />
                            Srgtofdeath did the whole guide + pics, I did the
                            format, which is nothing in comparison.
                            <br />
                            And now...
                            <br />
                            <p className="text-2xl">
                                Get out of here, stalker!
                            </p>
                        </AcordionComponent>

                        <AcordionComponent
                            defaultOpen={false}
                            title="Further Steps"
                        >
                            <div className="flex flex-col items-center w-full justify-center ">
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
                        </AcordionComponent>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default InstallIndex;
