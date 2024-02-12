
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';


export default function SelectButtonFormikDoc() {
    const toast = useRef(null);
    const options = ['Off', 'On'];

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    };

    const formik = useFormik({
        initialValues: {
            item: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.item) {
                errors.item = 'Engine State is required.';
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show();
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column align-items-center gap-2">
                <Toast ref={toast} />
                <label htmlFor="item" className={classNames('flex justify-content-center', { 'p-error': formik.errors.item })}>
                    Engine State
                </label>
                <SelectButton
                    id="item"
                    name="item"
                    value={formik.values.item}
                    options={options}
                    onChange={(e) => {
                        formik.setFieldValue('item', e.value);
                    }}
                    className={classNames('flex justify-content-center', { 'p-invalid': formik.errors.item })}
                />
                {getFormErrorMessage('item')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        