import { Link } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  registerWithEmailAndPassword,
} from "../firebase";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Notification from "../Notification";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationError, setNotificationError] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function displaySignUp() {
    setShowSignUp(!showSignUp);
  }

  const register = async () => {
    if (!name) {
      setShowNotification(true);
      setNotificationError("Please enter name");
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    } else if (!email) {
      setShowNotification(true);
      setNotificationError("Please enter email");
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    } else if (!password) {
      setShowNotification(true);
      setNotificationError("Please enter password");
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    } else {
      const response = await registerWithEmailAndPassword(
        name,
        email,
        password
      );
      console.log(response);
      if (response.error) {
        setShowNotification(true);
        setNotificationError(response.error);
        setTimeout(() => {
          setShowNotification(false);
        }, 2000);
      }
    }
  };

  function loginPage() {
    return (
      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900 text-center"
        >
          Login
        </Dialog.Title>
        <div className="mt-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm "
            placeholder="example@google.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            htmlFor="password"
            className="block text-xs font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={normalSignIn}
          >
            Login with email & password
          </button>
        </div>

        <div className="mt-2">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            onClick={googleSignIn}
          >
            Login with Google
          </button>
        </div>

        <div className="text-center mt-2 flex justify-center">
          Don't have an account?{" "}
          <button className="text-blue-900 ml-2" onClick={displaySignUp}>
            {" "}
            Register now!
          </button>
        </div>
      </Dialog.Panel>
    );
  }

  function signUpPage() {
    return (
      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900 text-center"
        >
          Sign Up
        </Dialog.Title>
        <div className="mt-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm "
            placeholder="John"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm "
            placeholder="example@google.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            htmlFor="password"
            className="block text-xs font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={register}
          >
            Sign Up
          </button>
        </div>

        <div className="mt-2">
          <button
            type="button"
            className="w-full inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={googleSignIn}
          >
            Login with Google
          </button>
        </div>

        <div className="text-center mt-2 flex justify-center">
          Already have an account?{" "}
          <button className="text-blue-900 ml-2" onClick={displaySignUp}>
            {" "}
            Login now!
          </button>
        </div>
      </Dialog.Panel>
    );
  }

  async function normalSignIn() {
    const response = await logInWithEmailAndPassword(email, password);
    console.log(response);
    if (response.error) {
      setShowNotification(true);
      setNotificationError(response.error);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  }

  async function googleSignIn() {
    const response = await signInWithGoogle();
    console.log(response);

    if (response.success) {
      setShowNotification(true);
      setNotificationError(response.error);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }

    if (response.error) {
      setShowNotification(true);
      setNotificationError(response.error);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  }

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/images/nus-logo.jpg" height="30" width="100" />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a class="mr-5 hover:text-gray-900">Home</a> */}
          <Link to="/" className="mr-5">
            Home
          </Link>
          <Link to="/academic" className="mr-5">
            Academics
          </Link>
          <Link to="/admission" className="mr-5">
            Admissions
          </Link>
          <button
            className="inline-flex items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0"
            onClick={openModal}
          >
            Sign In
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </nav>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {showSignUp ? signUpPage() : loginPage()}
              </Transition.Child>
            </div>
          </div>

          <div className="relative z-20">
            <Notification show={showNotification} error={notificationError} />
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Header;
