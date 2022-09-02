import { useState } from "react"
import "../style/MajorSection.css"

interface SectionProps {
    title: string
    classes: string[]
}

export default function MajorSection({title, classes}: SectionProps) {

    let [open, setOpen] = useState(false)

    const toggleOpen = () => {
        setOpen(open => !open)
    }

    let classElements = []

    for (const c of classes) {
        const element = (
            <div className="classCheckbox collapsibleContent" key={c}>
                <input 
                    type="checkbox" 
                    id={c + "Checkbox"} 
                    name={c + "Checkbox"} 
                    value={c}
                />
                <label htmlFor={c + "Checkbox"}>{c}</label>
            </div>
        )
        classElements.push(element)
    }

    console.log(classElements)

    const openStyle = {
        height: 'min-content'
    }

    const closedStyle = {
        height: '0px'
    }

    const collapsibleClass = "majorSectionClassesContainer " + open ? "collapsibleOpen" : "collapsibleClosed"

    return (
        <div className="majorSectionComponent">
            <button type="button" className="collapsibleButton" onClick={toggleOpen}>{title}</button>
            <div style={ open ? openStyle : closedStyle } className="majorSectionClassesComponent">
                {classElements}
            </div>
        </div>
    )
    
}