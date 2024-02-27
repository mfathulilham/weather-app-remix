import type { MetaFunction } from "@remix-run/node";
import HomePage from "./Home";
import Navbar from "~/components/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Weather App" },
    { name: "description", content: "Welcome to Weather App!" },
  ];
};

export default function Index() {
  return (
    <div className="font-mono bg-gray-200">
      <Navbar />
      <HomePage />
      {/* <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul> */}
    </div>
  );
}
