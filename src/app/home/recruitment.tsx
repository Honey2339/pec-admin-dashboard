import React from "react";

export default function RecruitmentFeedCard() {
  return (
    <div className="flex flex-col justify-center items-center">
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
            <p className="text-base font-medium text-navy-700 text-green-400 dark:text-white">
              Recruitment
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Recruiter</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Recruiter Name
            </p>
          </div>

          <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Date</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              DD/MM/YYYY
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <p className="text-sm text-gray-600">Role</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Candidate Role
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
