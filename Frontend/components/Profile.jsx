function Profile(props) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-[364px] flex-grow items-center gap-4">
        <img
          src={props.Img}
          className="rounded-full  max-w-[150px]   max-h-[150px]"
        ></img>

        <h3 className="h3">{props.Name}</h3>

        <div className="flex flex-col w-full">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-[#989898] dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="Email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your Email Address"
          ></input>
        </div>

        <div className="flex flex-col w-full">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-[#989898] dark:text-white"
          >
            Old Password
          </label>
          <input
            type="password"
            id="OldPassword"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your old password"
          ></input>
        </div>

        <div className="flex flex-col w-full">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-[#989898] dark:text-white"
          >
            New password
          </label>
          <input
            type="password"
            id="Newpassword"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your new password"
          ></input>
        </div>

        <div className="flex flex-col w-full">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-[#989898] dark:text-white"
          >
            Confirm new password
          </label>
          <input
            type="password"
            id="Confirmnewpassword"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your new password"
          ></input>
        </div>

        <button className="rounded-lg pr-2 pl-2 bg-RedPrimary w-full ">
          <p className="text-White text-center p-2  ">CONFIRM</p>
        </button>
      </div>
    </div>
  );
}

export default Profile;
