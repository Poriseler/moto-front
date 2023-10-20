function CheckboxLabel({labelName, name}) {
    return (
        <label className=" pe-3">
            <input className="mx-2" type="checkbox" id={labelName} name={name} value={labelName}/>
            {labelName}
        </label>
    )
}

export default CheckboxLabel
