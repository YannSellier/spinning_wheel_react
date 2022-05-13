import React from "react";

const Start = ({handleClick}) => (
    <div>
        <h1>wesh ca roule</h1>
        <button onClick={() => handleClick("form")}>Continuer</button>
    </div>
);

export default Start;