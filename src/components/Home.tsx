import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [text1, setText1] = useState('Adoo Darko');
  const [text2, setText2] = useState('Jonathan');
  const [animationClass1, setAnimationClass1] = useState('');
  const [animationClass2, setAnimationClass2] = useState('');

  const texts1 = ['Adoo Darko', 'Build & Code', 'Create Elegant'];
  const texts2 = ['Jonathan', 'Robots', 'Web Pages'];

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;

    const interval = setInterval(() => {
      index1 = (index1 + 1) % texts1.length;
      index2 = (index2 + 1) % texts2.length;

      setAnimationClass1('scroll-out');
      setAnimationClass2('scroll-out');

      setTimeout(() => {
        setText1(texts1[index1]);
        setText2(texts2[index2]);
        setAnimationClass1('scroll-in');
        setAnimationClass2('scroll-in');
      }, 500); // Duration of the scroll-out animation
    }, 5000); // Interval time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen relative bg-[url('src/assets/tarmo5-2.jpg')]">
      <h1 className={`text-9xl font-light absolute bottom-60 left-8 text-white ${animationClass1}`}>
        <span className="text-sky-700">{text1}</span>
      </h1>
      <h1 className={`text-9xl font-light text-white absolute bottom-8 right-8 ${animationClass2}`}>
        <span className="text-white">{text2}</span>
      </h1>
      <Link smooth to="/#about">
        <i className="bi bi-arrow-down absolute bottom-8 left-8 text-white text-7xl animate-bounce"></i>
      </Link>
      <div className="absolute bottom-56 right-8 flex items-center bg-white p-2 rounded-3xl bg-opacity-10 backdrop-blur-sm">
        <img className="w-16 h-16 rounded-full object-cover mx-auto" src="src/assets/twitter.jpg" alt="Tweet" />
        <div className="flex-column mx-4">
          <div className="flex gap-1">
            <h2>
              <span className="text-white font-bold">jonathan</span>
              <i className="bi bi-patch-check-fill text-sky-700 ml-1"></i>
            </h2>
            <p className="text-gray-500 font-light">@adoodevv · Apr 5</p>
          </div>
          <p className="text-white font-normal">Soon 🤞🏼</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
