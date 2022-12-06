import React from "react";
import Skill from "../../../../model/Skill";
import "./SkillEditForm.scss";
import * as Yup from "yup";
import TextField from "../../../../components/UI/TextField";
import { useRef, useState } from "react";
import { Form, Formik } from "formik";

interface skillEditProps {
  skill: Skill;
}

const SkillEditForm: React.FC<skillEditProps> = (props) => {
  const validate = Yup.object({
    subject: Yup.string()
      .max(45, "Must be up to 45 characters")
      .required("Subject is required"),
    name: Yup.string()
      .max(25, "Must be up to 25 characters")
      .required("Name is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="skillform">
          <Form className="skillform__content">
            <h3>Content</h3>
            <div className="skillform__content--fields">
              <TextField
                name={props.skill.name}
                type="text"
                value={props.skill.name}
                className=" "
                isLarge={false}
              />
              <TextField
                name={props.skill.desc}
                type="text"
                value={props.skill.desc}
                className=" "
                isLarge={true}
              />
            </div>
            <h3>Experience</h3>
            <div className="skillform__content--fields">
              <div className="vert">
                <span>Type: </span>
                <TextField
                  name={props.skill.experience.info}
                  type="text"
                  value={props.skill.experience.info}
                  className=" "
                  isLarge={false}
                />
              </div>
              <div className="vert">
                <span>Years: </span>
                <TextField
                  name={props.skill.experience.info}
                  type="text"
                  value={props.skill.experience.years.toString()}
                  className=" "
                  isLarge={false}
                />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Save
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SkillEditForm;
