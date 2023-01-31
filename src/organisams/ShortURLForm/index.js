import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useFormik } from 'formik';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';


const ShortURLForm = (props) => {

    const { onFormSubmit, isLoading } = props
    // setup validations to form
    const validationSchema = yup.object().shape({
        url: yup.string()
            .required("URL required").url(),
    });

    const formik = useFormik({
        validationSchema,
        initialValues: {
            url: ''
        }
    })

    return (
        <Fragment>
            <div className="d-flex gap-3 justify-content-center flex-md-row mx-lg-5 mx-sm-3">
                <TextInput
                    onChange={formik.handleChange}
                    className="w-50"
                    name="url"
                    value={formik.values.url}
                    placeholder="https://yoursite.com/this-is-a-very-large-url-but-boring"
                />
                <Button
                    text="Shorten URL"
                    loading={isLoading}
                    onClick={() => onFormSubmit(formik)}
                />
            </div>
        </Fragment>
    );
};

// set props and their data types
ShortURLForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

// set props default values
// required props not need default value
ShortURLForm.defaultProps = {
    isLoading: false
};

export default ShortURLForm;
