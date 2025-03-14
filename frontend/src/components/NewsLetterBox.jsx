import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center py-10 px-4">
      <p className="text-2xl sm:text-3xl font-semibold text-gray-800">
        Subscribe & Get 20% Off!
      </p>
      <p className="text-gray-500 mt-3 max-w-lg mx-auto">
        Sign up for our newsletter and be the first to know about exclusive deals, new arrivals, and special discounts.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center border border-gray-300 rounded-md overflow-hidden mx-auto mt-6"
      >
        <input
          className="w-full px-4 py-3 outline-none text-gray-700"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-900 transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
