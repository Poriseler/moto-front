
import CheckboxLabel from "./CheckboxLabel"

function CheckboxFieldset({labels, registerData}) {
    
    return (
        <div className="flex flex-col max-h-[6rem] overflow-auto">
            {labels.map(label=><CheckboxLabel register={registerData} labelName={label} key={label} />)}
        </div>
    )
}

export default CheckboxFieldset
