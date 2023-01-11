import React, { useState, useEffect } from "react";
import { app } from "../firebase/config";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import InformationGrid from "./InformationGrid";
import Loader from "./Lottie/Loader"

const InformationForm = () => {
  const db = getFirestore(app);

  const [getInfo, setGetInfo] = useState([]);
  const [loading, setLoading] = useState(true); //add new state variable


  useEffect(() => {
    const getUserInfo = async () => {
      try {
       
        const querySnapshot = await getDocs(collection(db, "users"));
        const docs = [];

        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setGetInfo(docs);
          setLoading(false);
       
      } catch (error) {
        console.log(error);
      }
    };
    console.log(getInfo);
    getUserInfo();
  }, []);

  return (
    
    <div>
      <h2 className="text-[#580066] font-bold text-3xl mt-10 mb-10"> ¡Lista de usuarios!</h2> 
      {loading && 
        <Loader/>
        }
      <div className="grid grid-cols-1 gap-16 mb-12 sm:grid-cols-2 lg:grid-cols-3 px-36">
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
