import Head from "next/head";

import NavbarComponent from "@/components/navbar";

const GuideIndex = () => {
    return (
        <div className="bg-[#171717] min-h-screen w-full text-white">
            <Head>
                <title>Stalker G.A.M.M.A. | Install</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full">
                <NavbarComponent page="guide" />
                <section className="flex items-center justify-center w-full">
                    <h1 className="max-h-56 lg:max-h-[8rem] bg-neutral-700/20 text-white w-full mt-8 py-6 px-10 md:px-56 text-center shadow-lg text-lg ">
                        Gameplay Guide
                    </h1>
                </section>
            </main>
        </div>
    );
};

export default GuideIndex;
