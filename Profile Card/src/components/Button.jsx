import React from "react";

function Button(props) {
    return (
        <a href={props.link} target="_blank">
            <button className="bg-blue-600 text-white px-5 py-2 mt-2 ml-2 rounded-lg hover:bg-blue-700 transition duration-300">{props.text}</button>
        </a>
    );
}

export default Button;
