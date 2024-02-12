
import React, { useRef } from "react";
import { useFormik } from 'formik';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

export default function FormikDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.year });
    };

    const formik = useFormik({
        initialValues: {
            year: null
        },
        validate: (data) => {
            let errors = {};

            if (!data.year) {
                errors.year = 'Year is required.';
            }

            if (data.year < 1960) {
                errors.year = `Enter a valid year.`;
            }

            if (data.year > 2050) {
                errors.year = `Enter a valid year.`;
            }

            return errors;
        },
        onSubmit: (data) => {
            data && show(data);
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
                <label htmlFor="year">Enter a year between 1960-2050.</label>
                <Toast ref={toast} />
                <InputNumber
                    inputId="in_year"
                    name="year"
                    value={formik.values.year}
                    onValueChange={(e) => {
                        formik.setFieldValue('year', e.value);
                    }}
                    useGrouping={false}
                    inputClassName={classNames({ 'p-invalid': isFormFieldInvalid('year') })}
                    pt={{
                        input: {
                            root: { autoComplete: 'off' }
                        }
                    }}
                />
                {getFormErrorMessage('year')}
                <Button label="Submit" type="submit" icon="pi pi-check" />
            </form>
        </div>
    )
}
        