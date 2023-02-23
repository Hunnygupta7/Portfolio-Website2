import React from "react";

import android_studio from "../assets/android_studio.png";
import dsa from "../assets/dsa.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import kotlin from "../assets/kotlin.png";
import mysql from "../assets/mysql.png";
import python from "../assets/python.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-purple-600",
    },
    {
      id: 3,
      src: mysql,
      title: "My SQL",
      style: "shadow-sky-500",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: dsa,
      title: "Data Structures & Algorithms",
      style: "shadow-red-400",
    },
    {
      id: 6,
      src: android_studio,
      title: "Android Studio",
      style: "shadow-green-400  ",
    },
    {
      id: 7,
      src: firebase,
      style: "shadow-orange-400",
      title: "Firebase",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="skills" className=" bg-gradient-to-b from-gray-800 to-black ">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">

        <div style={{ top: "-50px" }}>


          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>


        </div>



        <div className="w-full flex flex-col  justify-between md:grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4" style={{fontWeight:'bold'}}>{title}</p>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Skills;
