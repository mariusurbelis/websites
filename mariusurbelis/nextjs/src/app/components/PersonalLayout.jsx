// components/PersonalLayout.jsx

import React from "react";
import Image from "next/image";

const PersonalLayout = () => {
  return (
    <div
      id="app"
      className="bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center px-4"
    >
      <h1 className="text-dark fw-bold mt-5 mb-4">Marius Urbelis</h1>

      <div className="mx-auto px-0 px-md-5 my-auto text-center">
        <Image
          src="/marius.jpeg"
          alt="Marius Urbelis"
          width={200}
          height={200}
          className="rounded-circle mb-4"
        />

        <div className="text-secondary">
          Welcome to my personal website! I&apos;m passionate about engineering
          creative software solutions, self-hosting, and learning new
          technologies.
        </div>
        <div className="text-secondary mt-3">
          Connect with me on social media:
          <br />
          <div className="d-flex justify-content-center align-items-center gap-3">
            <a
              href="https://www.instagram.com/mariusurbelis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              href="https://twitter.com/marius_urbelis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com/in/mariusurbelis"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="text-secondary mt-3">
          Explore more on:
          <br />
          <div className="d-flex justify-content-center align-items-center gap-2 flex-wrap">
            <a
              href="https://www.youtube.com/mariusurbelis"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/mariusurbelis"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://urbelis.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer Website
            </a>{" "}
            |{" "}
            <a
              href="https://www.theinsightscoop.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Podcast
            </a>{" "}
            |{" "}
            <a
              href="https://soundcloud.com/mariusurbelis"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoundCloud
            </a>
          </div>
        </div>
        <div className="text-secondary mt-3">
          Contact me via email:
          <br />
          <div className="d-flex justify-content-center align-items-center gap-3">
            <a
              href="mailto:marius@urbelis.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              marius@urbelis.dev
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-auto py-4 text-secondary">
        &copy; {new Date().getFullYear()} Marius Urbelis
      </footer>
    </div>
  );
};

export default PersonalLayout;
