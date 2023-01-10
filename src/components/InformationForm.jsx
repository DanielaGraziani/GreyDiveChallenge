import React, { useState, useEffect } from "react";
import { app } from "../firebase/config";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const InformationForm = () => {
  const db = getFirestore(app);

  const [getInfo, setGetInfo] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const docs = [];

        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setGetInfo(docs);
        console.log(docs);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(getInfo);
    getUserInfo();
  }, []);

  return (
    <div>
      <h2>Users Information</h2>
      <div className="container card">
        <div className="card-body">
          {getInfo.map((list) => (
            <div key={list.id}>
              <p>Name: {list.full_name}</p>
              <p>Email: {list.email}</p>
              <p>country: {list.country_of_origin}</p>
              <p>Birthday: {new Date(list.birth_date).toLocaleDateString()}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformationForm;
