import React from "react";

function useFormWithValidation() {
    const [value, setValue] = React.useState('');
    const [isDirty, setIsDirty] = React.useState(false);
    const [inputError, setInputError] = React.useState('');
    const [inputValid, setInputValid] = React.useState(false);

    const handleChange = (evt) => {
        setValue(evt.target.value);

        if (!evt.target.validity.valid) {
            setInputValid(false)
            setIsDirty(true);
            setInputError(evt.target.validationMessage);
        } else {
            setInputValid(true)
            setIsDirty(false);
            setInputError('');
        }
    }

    return {value, handleChange, setValue, isDirty, setIsDirty, inputError, setInputError, inputValid, setInputValid};
}

export default useFormWithValidation;