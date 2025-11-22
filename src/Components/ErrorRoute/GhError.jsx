import React from "react";
import { Link } from "react-router-dom";

const GhError = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-black px-4"
            style={{ fontFamily: "var(--font-roboto-mono)" }}
        >
            <div className="max-w-xl w-full text-center rounded-2xl border border-red-700/30 p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-red-500 font-page-error ">
                    Sorry — Invalid Path
                </h1>

                <p className="mt-4 text-white">
                    The page you tried to open is an invalid route. This can happen due to a deployment
                    routing issue on GitHub Pages (for example, incorrect <code>base</code> or missing
                    redirect configuration).
                </p>

                <p className="mt-2 text-sm text-white">
                    Try going back to the homepage or check your deployment settings.
                </p>

                <br />

                <Link
                    to="/"
                    className=" mt-6 px-6 py-3 rounded-2xl font-semibold bg-blue-500 text-white hover:bg-blue-700"
                >
                    Go To Home
                </Link>


            </div>
        </div>
    );
};

export default GhError;
