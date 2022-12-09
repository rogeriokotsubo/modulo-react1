
import React, { CSSProperties, Dispatch, SetStateAction } from 'react';


interface IModalProps {
    opened: boolean;
    msg: string;
    handleCloseModal: Dispatch<boolean>;
}

export function Modal({opened, msg, handleCloseModal} : IModalProps)
{
   
    const backStyle : CSSProperties = {
        display: "flex",
        flexDirection: "column",
        zIndex: 10,
        position: "absolute",
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    }

    const innerStyle : CSSProperties = {
        display: "flex",
        position: "absolute",
        width: "40%",
        height: "40%",
        background: "#f0f0f0",
        justifyContent: "center",
        flexDirection: "column"
    }

    const topStyle : CSSProperties = {
        display: "flex",
        width: "100%",
        height: "10%",
        background: "rgb(92,92,92)",
        justifyContent: "right",
        alignItems: "center"
    }

    const bodyStyle : CSSProperties = {
        display: "flex",
        width: "100%",
        height: "90%",
        background: "#f0f0f0",
        color: "#282828",
        justifyContent: "center",
        alignItems: "center"
    }

    const closeStyle : CSSProperties = {
        background: "none"
    }

    if (!opened) return <></>
    return (
        <div style={backStyle}>
            <div style={innerStyle}>
                <div style={topStyle}>
                    <button style={closeStyle} onClick={() => handleCloseModal(false)}>X</button>
                </div> 
                <div style={bodyStyle}>
                    <p>{msg}</p>
                </div>
            </div>    
        </div>
    )
}