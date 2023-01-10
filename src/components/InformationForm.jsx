import React, { useState, useEffect } from "react";
import { app } from "../firebase/config";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import InformationGrid from "./InformationGrid";

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
      <h2 className="text-gray-900 font-medium text-2xl mt-12 mb-10">Users Information</h2> 
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 px-36">
          {getInfo.map((list) => (
            <div key={list.id}>
              <InformationGrid id={list.id} name={list.full_name} email={list.email} country={list.country_of_origin} birth_date={new Date(list.birth_date).toLocaleDateString()}/>
            </div>
          ))}
      </div>
       
    </div>
  );
};

export default InformationForm;
