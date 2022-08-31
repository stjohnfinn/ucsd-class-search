import { useNavigate } from "react-router-dom"


export default function SelectClasses() {

    const navigate = useNavigate()
    
    return (
        <div className="selectClassesComponent" >
            <h1>Select Major</h1>
            <button onClick={() => navigate("/search-classes")}>Search Classes</button>
        </div>
    )
}