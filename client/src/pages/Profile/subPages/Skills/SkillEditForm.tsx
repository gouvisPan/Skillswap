import React from "react";
import Skill from "../../../../model/Skill";
import "./SkillEditForm.scss";
import * as Yup from "yup";
import TextField from "../../../../components/UI/TextField";
import { useRef, useState } from "react";
import { Form, Formik } from "formik";
import { useAppDispatch } from "../../../../hooks/hooks";

interface skillEditProps {
  skill: Skill | undefined;
}

const SkillEditForm: React.FC<skillEditProps> = (props) => {
  const dispatch = useAppDispatch();

  const validate = Yup.object({
    name: Yup.string().required("Please enter a name"),
    desc: Yup.string()
      .min(15, "Must be up to 15 characters")
      .required("Please enter a description"),
    experienceDesc: Yup.string(),
    experienceYears: Yup.string(),
  });

  const onSubmit = (
    name: string,
    desc: string,
    experienceDesc: string,
    experienceYears: string
  ) => {
    // props.skill ? dispatch((name , desc, experienceDesc, experienceYears));
  };

  return (
    <Formik
      initialValues={{
        name: props.skill?.name || "",
        desc: props.skill?.desc || "",
        experienceDesc: props.skill?.experience.info || "",
        experienceYears: props.skill?.experience.years.toString() || "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        onSubmit(
          values.name,
          values.desc,
          values.experienceDesc,
          values.experienceYears
        );
      }}
    >
      {(formik) => (
        <div className="skillform">
          <Form className="skillform__content">
            <h3>Description</h3>
            <div className="skillform__content--fields">
              <TextField
                name="name"
                type="text"
                pholder={props.skill?.name || "Skill Name"}
                className=" "
                isLarge={false}
              />
              <TextField
                name="desc"
                type="text"
                pholder={props.skill?.desc || "Skill Description"}
                className=" "
                isLarge={true}
              />
            </div>
            <h3>Experience</h3>
            <div className="skillform__content--fields">
              <div className="vert">
                <span>Type: </span>
                <TextField
                  name="experienceDesc"
                  type="text"
                  pholder={
                    props.skill?.experience.info || "Experience description"
                  }
                  className=" "
                  isLarge={false}
                />
              </div>
              <div className="vert">
                <span>Years: </span>
                <TextField
                  name="experienceYears"
                  type="text"
                  pholder={
                    props.skill?.experience.years.toString() ||
                    "Years of experience"
                  }
                  className=" "
                  isLarge={false}
                />
              </div>
            </div>
            <button type="submit">Save</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SkillEditForm;
