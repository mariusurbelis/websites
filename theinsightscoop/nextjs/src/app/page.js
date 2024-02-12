"use server";
import "./globals.css";

import PageHeader from "./components/page-header";
import PageAbout from "./components/page-about";
import EpisodesList from "./components/episodes-list";
import PageFooter from "./components/page-footer";

export default async function Home() {
    <link rel="icon" href="/favicon.ico" sizes="any" />;
    return (
        <main id="app" className="px-3 p-md-0">
            <PageHeader />
            <PageAbout />
            <EpisodesList />
            <PageFooter />
        </main>
    );
}
