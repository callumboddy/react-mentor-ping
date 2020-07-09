import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import * as EmailValidator from 'email-validator';

function App() {

  const [input, setInput] = React.useState("")
  const [isValidEmail, setIsValidEmail] = React.useState(true)

  const validateEmail = (email) => {
    const isValid = EmailValidator.validate(input)
    setIsValidEmail(isValid)
  }

  useEffect(() => {
    setIsValidEmail(true)
  }, [input])

  return (
  <div className="App mx-8 " >
    <div className="flex flex-col min-h-screen mx-auto max-w-md sm:max-w-md md:max-w-lg lg:max-w-xl">
      
      <div className="text-center">
        <img className="mt-20 h-5 m-auto" src="./images/logo.svg" alt="Logo"/>
        <h3 className="mt-8 text-red-700 font-thin text-2xl sm:text-4xl">We are launching <span className="text-blue-dark font-bold">soon!</span></h3>
        <h5 className="mt-4 text-sm text-gray-800 font-light">Subscribe and get notified</h5>
      </div>

      <div className="relative">
      <form>
      <div className="px-6 sm:px-0 flex flex-col sm:flex-row justify-beween mt-8 w-full">
        <div className={"border py-3 rounded-full sm:flex-grow " + (!isValidEmail && "border-red-light")}>
          <input className="w-full px-6 bg-transparent text-sm focus:outline-none" type="email" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Your email address..." />
        </div>
        {!isValidEmail && 
          <p className="sm:hidden text-center ml-6 mt-2 text-red-light font-light italic" style={{fontSize: "10px" }}>Please provide a valid email address</p>
        }
        <button type="submit" onClick={(event) => {
          event.preventDefault()
          validateEmail(input)
        }} 
        className="block mt-4 sm:mt-0 sm:ml-3 py-3 sm:px-10 rounded-full bg-blue-primary shadow-lg text-white font-semibold text-sm hover:bg-blue-dark focus:outline-none">Notify Me</button>
      </div>
      </form>
      {!isValidEmail && 
        <p className="hidden sm:block absolute ml-6 mt-2 text-red-light font-light italic" style={{fontSize: "10px" }}>Please provide a valid email address</p>
      }
      </div>

      <div className="mt-16 flex-grow bg-blue-700">
        <img className="bg-red-700" src='./images/illustration-dashboard.png' />
      </div>

      <footer className="my-8">
        <div className="flex justify-center">
          <button className="block border rounded-full p-3 text-blue-primary hover:bg-blue-primary hover:text-white focus:outline-none"><FaFacebookF /></button>
          <button className="ml-4 block border rounded-full p-3 text-blue-primary hover:bg-blue-primary hover:text-white focus:outline-none"><FaTwitter /></button>
          <button className="ml-4 block border rounded-full p-3 text-blue-primary hover:bg-blue-primary hover:text-white focus:outline-none"><FaInstagram /></button>
        </div>
        <h6 className="mt-6 text-center text-sm text-gray-500">Copyright Ping. All rights reserved</h6>
      </footer>

    </div>
  </div>
  );
}

export default App;
