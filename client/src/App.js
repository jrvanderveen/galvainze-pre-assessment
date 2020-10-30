import React, { useState, useEffect } from "react";

function App() {
    const [clickedCount, setClickedCount] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (clickedCount === 0) {
            setIsActive(true);
        }
        setClickedCount(clickedCount + 1);
    };

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
                <h1 style={{ marginRight: "10px" }}>How fast can you click:</h1>
                <h1 style={{ color: "grey" }}>{clickedCount}</h1>
                <button
                    style={{
                        backgroundColor: "#4CAF50",
                        border: "none",
                        color: "white",
                        padding: "15px 32px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        fontSize: "16px",
                        margin: "4px 2px",
                        cursor: "pointer",
                        marginLeft: "10px",
                    }}
                    onClick={() => handleClick()}
                >
                    CLICK ME
                </button>
            </div>
            <div style={{ display: "flex" }}>
                <h2>
                    Time Elapsed: <span style={{ color: "grey" }}>{seconds}s</span>
                </h2>
            </div>
            <div style={{ display: "flex" }}>
                <h2>
                    Click Per Second: <span style={{ color: "grey" }}>{seconds === 0 ? 0 : Math.floor(clickedCount / seconds)}</span>
                </h2>
            </div>
        </div>
    );
}

export default App;
