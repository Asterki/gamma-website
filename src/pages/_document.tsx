import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="theme-color" content="#358e56" />

                <meta name="title" content="Stalker G.A.M.M.A." />
                <meta
                    name="description"
                    content="G.A.M.M.A. aims at providing a balanced survival, scavenging, cooking, crafting and repairing focused experience with a long progression and smooth gameplay."
                />
                <meta
                    name="keywords"
                    content="web, game, stalker, gamma, survival, scavenging, cooking, crafting, repairing, progression, smooth, gameplay"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.stalker-gamma.com" />
                <meta property="og:title" content="Stalker G.A.M.M.A." />
                <meta
                    property="og:description"
                    content="G.A.M.M.A. aims at providing a balanced survival, scavenging, cooking, crafting and repairing focused experience with a long progression and smooth gameplay."
                />
                <meta
                    name="og:keywords"
                    content="web, game, stalker, gamma, survival, scavenging, cooking, crafting, repairing, progression, smooth, gameplay"
                />
                <meta property="og:image" content="/images/splash.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.stalker-gamma.com"
                />
                <meta property="twitter:title" content="Stalker G.A.M.M.A." />
                <meta
                    property="twitter:description"
                    content="G.A.M.M.A. aims at providing a balanced survival, scavenging, cooking, crafting and repairing focused experience with a long progression and smooth gameplay."
                />
                <meta
                    name="twitter:keywords"
                    content="web, game, stalker, gamma, survival, scavenging, cooking, crafting, repairing, progression, smooth, gameplay"
                />
                <meta
                    property="twitter:image"
                    content="/images/splash.png"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
