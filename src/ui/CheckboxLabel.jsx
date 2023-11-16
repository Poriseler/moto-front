function CheckboxLabel({ labelName, register }) {
  return (
    <>
      <label htmlFor={labelName} className=" pe-3">
        {labelName}
      </label>
      <input
        className="mx-2"
        type="checkbox"
        {...register('istniejace-tagi', { setValueAs: () => 'bill' })}
        id={labelName}
      />
    </>
  );
}

export default CheckboxLabel;
