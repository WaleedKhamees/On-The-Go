function SignUp() {
  return (
    <div className="flex justify-center pt-4">
      <div className="flex-col flex items-center gap-4 max-w-[527px] flex-grow">
        <h2 className="h2 text-Headings">Sign Up</h2>

        <input
          type="text"
          id="Name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your Name"
        ></input>

        <input
          type="email"
          id="Email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your Email Address"
        ></input>
        <input
          type="password"
          id="Password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your Password"
        ></input>

        <button className="rounded-lg pr-2 pl-2 bg-RedPrimary w-full ">
          <p className="text-White text-center p-2  ">SIGN IN</p>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
