import { Link, useNavigate } from "react-router-dom";

interface NavigationProps {
    linkAddress: string
    text: string
}

export default function NavigationButton({linkAddress, text}: NavigationProps) {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(linkAddress)}>{text}</button>
    )
}