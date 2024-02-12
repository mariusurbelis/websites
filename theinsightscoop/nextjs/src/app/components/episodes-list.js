"use server";
import EpisodeCard from "./episode-card";

import { getEpisodes } from "../actions";

export default async function EpisodesList() {
    const episodeCards = async () => {
        const episodes = await getEpisodes();

        return episodes.map((episode) => {
            return (
                <div
                    key={episode.title}
                    className="col-12 col-md-6 col-lg-4 mb-2"
                >
                    <EpisodeCard
                        title={episode.title}
                        link={episode.link}
                        image={episode.itunes.image}
                    />
                </div>
            );
        });
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div
                    style={{ fontSize: "2em" }}
                    className="col-12 mb-2 mt-2 text-start"
                >
                    EPISODES
                </div>

                {await episodeCards()}
            </div>
        </div>
    );
}
