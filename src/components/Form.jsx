import React, { useState } from "react";
import { dataForm } from "../data";
import {app} from '../firebase/config';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'




const Form = () => {
  //console.log(dataForm, "datos del formulario");
  const db= getFirestore(app);
 

  const initialValue = {
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "argentina",
    terms_and_conditions: true,
  };

  const [user, setUser] = useState(initialValue);
 

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db,'users'), {
        ...user,
      })
    } catch (error) {
      console.log(error)
    }
    console.log(user)
    setUser({ ...initialValue }); // reset the form
  };

  return (
    <form onSubmit={handleSubmit}>
      {dataForm.items.map((item, index) => {
        return item.type === "text" ? (
          <label key={index}>
            {item.label}:
            <input
              type="text"
              name={item.name}
              required={item.required}
              onChange={handleInputChange}
              value={user.full_name}
            />
          </label>
        ) : item.type === "email" ? (
          <label key={index}>
            {item.label}:
            <input
              type="email"
              name={item.name}
              required={item.required}
              onChange={handleInputChange}
              value={user.email}
            />
          </label>
        ) : item.type === "date" ? (
          <label key={index}>
            {item.label}:
            <input
              type="date"
              name={item.name}
              required={item.required}
              onChange={handleInputChange}
              value={user.birth_date}
            />
          </label>
        ) : item.type === "select" ? (
          <label key={index}>
            {item.label}:
            <select
              name={item.name}
              required={item.required}
              onChange={handleInputChange}
              value={user.country_of_origin}
            >
              {item.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        ) : item.type === "checkbox" ? (
          <label key={index}>
            <input
              type="checkbox"
              name={item.name}
              required={item.required}
              onChange={handleInputChange}
              value={user.terms_and_conditions}
            />
            {item.label}
          </label>
        ) : item.type === "submit" ? (
          <button key={index} type="submit">
            {item.label}
          </button>
        ) : null;
      })}
    </form>
  );
};

export default Form;
