import * as React from "react";
import { NextPage } from "next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

interface ComponentProps {
    message: string;
    type: "success" | "error" | "warning" | "info";
}

const AlertComponent: NextPage<ComponentProps> = ({ message, type }) => {
    if (type == "info") {
        return (
            <div className="items-center justify-center flex w-full">
                <div className="w-11/12 my-2 p-4 border-2 border-blue-400/30 text-white rounded-md text-md bg-blue-400/20 flex items-center">
                    <div className="w-16 h-16 bg-blue-400 flex items-center justify-center rounded-full mr-8">
                        <FontAwesomeIcon
                            icon={faInfo}
                            className="text-2xl   width"
                        />
                    </div>
                    {message}
                </div>
            </div>
        );
    } else if (type == "success") {
        return (
            <div className="items-center justify-center flex w-full">
                <div className="w-11/12 my-2 p-4 border-2 border-green-400/20 text-white rounded-md text-md bg-green-400/20">
                    {message}
                </div>
            </div>
        );
    } else if (type == "warning") {
        return (
            <div className="items-center justify-center flex w-full">
                <div className="w-11/12 my-2 p-4 border-2 border-yellow-400/20 text-white rounded-md text-md bg-yellow-400/20">
                    {message}
                </div>
            </div>
        );
    } else {
        return (
            <div className="items-center justify-center flex w-full">
                <div className="w-11/12 my-2 p-4 border-2 border-red-400/20 text-white rounded-md text-md bg-red-400/20">
                    {message}
                </div>
            </div>
        );
    }
};

export default AlertComponent;
