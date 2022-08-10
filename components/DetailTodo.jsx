import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const DetailTodo = () => {
  const router = useRouter();
  return (
    <>
      <p className="text-4xl bg-red-200 text-center p-6 font-sans">todoの詳細</p>
      <div className="text-center">
        <div className=" p-8 mt-10 border-solid border-gray-300 border-4 rounded-xl inline-block lg:p-16">
          <p className="text-xl mr-36 ">固有ID</p>
          <input
            className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            type="text"
            label="固有IDの番号"
            value={router.query.id}
          />
          <p className="text-xl mr-32 mt-4">タイトル</p>
          <input
            className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            type="text"
            label="titleの名前"
            value={router.query.title}
          />
          <p className="text-xl mr-36 mt-4">期限日</p>
          <input
            className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            type="text"
            label="期限日"
            value={router.query.date}
          />
          <p className="text-xl mr-40 mt-4">状況</p>
          <input
            className="px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            type="text"
            label="状況"
            value={router.query.status}
          />
          <Link href="/">
            <button 
              className="block mt-4 px-4 py-2 ml-36 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                戻る
            </button>
          </Link>
        </div>
      </div> 
    </>
  );
};