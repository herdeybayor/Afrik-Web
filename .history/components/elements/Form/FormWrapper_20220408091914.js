import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikController from "FormikController.js";

function FormikWrapper() {
  const choices = [
    { key: "choice a", value: "choicea" },
    { key: "choice b", value: "choiceb" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectChoice: "",
    radioChoice: "",
    checkBoxChoice: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectChoice: Yup.string().required("Required"),
    radioChoice: Yup.string().required("Required"),
    checkBoxChoice: Yup.array().required("Required"),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikController
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikController
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikController
            control="select"
            label="Select your choice"
            name="selectChoice"
            option={choices}
          />
          <FormikController
            control="radio"
            label="Click your choice"
            name="radioChoice"
            option={choices}
          />
          <FormikController
            control="checkbox"
            label="select your choices"
            name="checkBoxChoice"
            option={choices}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
export default FormikContainer;
