import React from "react";
import { dataForm } from "../data";
import { app } from "../firebase/config";
import { TextInput } from "./TextInput";
import { EmailInput } from "./EmailInput";
import { DateInput } from "./DateInput";
import { SelectInput } from "./SelectInput";
import { CheckboxInput } from "./CheckboxInput";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import * as Yup from "yup";
import { Formik } from "formik";
import s from "../assets/1.png";
import Swal from "sweetalert2";

const Form = () => {
  const db = getFirestore(app);

  const initialValue = {
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
    terms_and_conditions: false,
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={Yup.object({
        full_name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        birth_date: Yup.string().required("Required"),
        country_of_origin: Yup.string().required("Required"),
        terms_and_conditions: Yup.boolean()
          .required("Required")
          .oneOf([true], "Required"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await addDoc(collection(db, "users"), {
            ...values});
            Swal.fire({
              icon: "success",
              title: "Datos enviados con exito!",
              showConfirmButton: false,
              color: '#716add',
              html: `<a href="/information"> ¡Conoce nuestra lista de usuarios!</a>`,
              footer: `<a href="/">  ¡Permanecer en esta pagina! </a>`,
          });
        } catch (error) {
          console.log(error);
        }
        values(" ")
        setSubmitting(false);
        
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <div className="bg-violet-400 overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">
          <div className="login-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">
            {/* product side */}

            <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">
              <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">
                <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-violet-400 opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">
                  {" "}
                  Grey Dive Form
                </span>
              </div>

              <div class="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">
                <img
                  src={s}
                  alt="product"
                  className="-mb-5 lg:mb-0 -ml-12 -mr-24 lg:ml-0 product h-[500px] xl:h-[600px] 2xl:h-[900px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out"
                />

                <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>
              </div>

              
              </div>
              {/* product end */}

              {/*Login  */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className=" flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
                  <div className="w-full space-y-1">
                    {/* <div className="form-caption flex items-end justify-center text-center space-x-3">
                      <span className="text-3xl mb-6 font-semibold text-gray-700"> Form</span>
                    </div> */}


                    <form onSubmit={handleSubmit}>
                      {dataForm.items.map((item, index) => {
                        return item.type === "text" ? (

                          <TextInput
                            key={index}
                            label={item.label}
                            name={item.name}
                            value={values.full_name}
                            handleChange={handleChange}
                            errors={errors}
                            touched={touched}
                            

                          />
                        ) : item.type === "email" ? (
                          <EmailInput
                            key={index}
                            label={item.label}
                            name={item.name}
                            value={values.email}
                            handleChange={handleChange}
                            errors={errors}
                            touched={touched}
                          />
                        ) : item.type === "date" ? (
                          <DateInput
                            key={index}
                            label={item.label}
                            name={item.name}
                            value={values.birth_date}
                            handleChange={handleChange}
                            errors={errors}
                            touched={touched}
                          />
                        ) : item.type === "select" ? (
                          <SelectInput
                            key={index}
                            label={item.label}
                            name={item.name}
                            value={values.country_of_origin}
                            options={item.options}
                            handleChange={handleChange}
                            errors={errors}
                            touched={touched}
                          />
                        ) : item.type === "checkbox" ? (
                          <CheckboxInput
                            key={index}
                            label={item.label}
                            name={item.name}
                            handleChange={handleChange}
                            value={values[item.name]}
                            errors={errors}
                            touched={touched}
                          />
                        ) : 
                        
                        item.type === "submit" ? (
                          <label className="w-full lg:w-4/5 block mx-auto">
                              <button className="cursor-pointer border-2 border-yellow-200 w-full mt-4 p-2 bg-yellow-200 focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow transition-all"
                              key={index} type="submit">
                            {item.label}
                          </button>
                            </label>
                        ) : null;
                      })}
                    </form>

                  </div>
                </div>
              </div>
            
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Form;
