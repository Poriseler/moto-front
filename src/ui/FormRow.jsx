function FormRow({label, children, error}) {
    return (
        <div className="flex flex-row gap-3 justify-between items-center ">
            {label && (<label htmlFor={children?.props?.id}>{label}</label>)}
            {children}
            {error && (<p>{error}</p>)}

        </div>
    )
}

export default FormRow
