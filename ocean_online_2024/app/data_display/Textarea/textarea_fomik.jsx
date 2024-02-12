
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.description  });
    };

    const formik = useFormik({
        initialValues: {
            description: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.description) {
                errors.description = 'Description is required.';
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
        <>
        <h2 className="">Formik</h2>
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <label htmlFor="description">Description</label>
                <Toast ref={toast} />
                <InputTextarea
                    inputid="description"
                    name="description"
                    rows={4}
                    cols={30}
                    className={classNames({ 'p-invalid': isFormFieldInvalid('description') })}
                    value={formik.values.description}
                    onChange={(e) => {
                        formik.setFieldValue('description', e.target.value);
                    }}
                />
                {getFormErrorMessage('description')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
        </>

    )
}
        