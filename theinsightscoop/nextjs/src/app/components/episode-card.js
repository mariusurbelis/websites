"use client";
import Image from "next/image";
import { Suspense } from "react";
export default function EpisodeCard({ link, image, title }) {
    const openLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div
            style={{ cursor: "pointer" }}
            onClick={() => openLink(link)}
            className="container shadow-sm rounded p-3"
        >
            <div className="row justify-content-center align-items-center">
                <div className="col-2">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Image
                            src={image}
                            alt={title}
                            className="img-fluid"
                            width={100}
                            height={100}
                        />
                    </Suspense>
                </div>
                <div className="col-10 text-start">{title}</div>
            </div>
        </div>
    );
}
