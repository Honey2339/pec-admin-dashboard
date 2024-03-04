import React from "react";

export default function IndustryVisitCard() {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <div className="relative shadow-xl flex flex-col items-center rounded-[20px] w-[600px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
        <div className="mt-2 mb-8 w-full">
          <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
            Company Name
          </h4>
          <p className="mt-2 px-2 text-base text-gray-600">Company Address</p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-2 w-full">
          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Motive</p>
            <p className="text-base font-medium text-navy-700 text-yellow-600 dark:text-white">
              Industry Visit
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Industry Visit Name</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              IV Name
            </p>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Date</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              DD/MM/YYYY
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Place</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Place that we have to visit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
