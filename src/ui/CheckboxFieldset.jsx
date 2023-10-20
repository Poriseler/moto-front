import CheckboxLabel from "./CheckboxLabel"

function CheckboxFieldset({name, labels}) {
    return (
        <fieldset className="flex flex-col max-h-[6rem] overflow-auto">
            {labels.map(label=><CheckboxLabel labelName={label} name={name} key={label}/>)}
        </fieldset>
    )
}

export default CheckboxFieldset
