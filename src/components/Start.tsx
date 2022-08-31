import { Link } from "react-router-dom";

import '../style/Start.css'

export default function Start() {

    return (
        <div className="startComponent">
            <div className="startButton" >
                <Link to="select-major" className="startButtonText" >START</Link>
            </div>
        </div>
    )
}