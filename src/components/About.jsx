import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-2xl mt-20">
        Hi, My name is <b>Nishant Gupta</b> and I am a <b>Software Developer</b> with a passion for creating innovative solutions using the latest technologies.

        <p>I have a strong background in programming languages such as <b>Kotlin</b>, <b>Java</b>, and <b>MySQL</b>, and have honed my skills in <b>Data Structures and Algorithms</b>(DSA).</p>

      <p>I am dedicated to staying <b>up-to-date</b> with the latest advancements in technology and always striving to <b>improve my skills</b>.</p>
      <p>With <b>years of experience</b> in software development, I have a deep understanding of <b>Software Development Lifecycle</b>, from conceptualization and design to deployment and maintenance. I am committed to delivering <b>robust</b> and <b>scalable solutions</b> that solve <b>real-world</b> problems and improve the <b>user experience</b>.</p>
      <p>Whether working on a complex project or a simple task, <b>I approach each task with the same level of commitment and attention to detail</b>. I believe in delivering solutions that are not just functional, but also aesthetically pleasing and user-friendly.</p>
      </p>
        
        
      </div>
    </div>
  );
};

export default About;
