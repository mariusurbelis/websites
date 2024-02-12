"use server";
export default async function PageAbout() {
    return (
        <div className="container text-start mt-3">
            <div className="row">
                <div style={{ fontSize: "2em" }} className="col-12 mb-2 mt-2">
                    ABOUT
                </div>

                <div className="col-12">
                    <p>
                        The Insight Scoop is a podcast focused on discussing
                        topics about self-improvement, sharing interesting
                        findings in the world of tech, or just a pleasant
                        evening chat. We are also not afraid to go controversial
                        and explore sensitive topics. Silence is not the answer.
                    </p>

                    <p>
                        We are always open for new ideas, suggestions, or
                        guests. Contact us at
                        <a href="mailto:squadrantco@gmail.com">
                            squadrantco@gmail.com
                        </a>
                    </p>

                    <p>
                        The podcast is on every Friday. (currently on a break)
                    </p>
                </div>
            </div>
        </div>
    );
}
