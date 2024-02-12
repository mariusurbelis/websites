"use server";
export const getEpisodes = async () => {
    const Parser = require("rss-parser");
    const parser = new Parser();

    return (async () => {
        const feed = await parser.parseURL(
            "https://anchor.fm/s/43d5938/podcast/rss"
        );

        return feed.items;
    })();
};
