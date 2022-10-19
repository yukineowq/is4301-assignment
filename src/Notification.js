import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";

export default function Notification({ show, error }) {
  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-10"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={true}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-red-300 shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex w-0 flex-1 justify-between">
                    <p className="w-0 flex-1 text-sm font-bold text-white">
                      Password wrong!
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0"></div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
