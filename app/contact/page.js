const page = () => {
  return (
    <div className="h-screen overflow-auto">
      <div className="mt-24 flex justify-center">
        <form className="w-4/5 lg:w-3/5">
          <div className="border border-sky-900 bg-sky-950 drop-shadow-2xl rounded-2xl p-6 lg:px-16 lg:py-12 flex flex-col space-y-5 lg:space-y-6">
            <input
              className="bg-sky-100 border border-sky-800 drop-shadow-2xl rounded-md p-3"
              type="text"
              placeholder="Full Name"
              required
            />
            <input
              className="bg-sky-100 border border-sky-800 drop-shadow-2xl rounded-md p-3"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="bg-sky-100 border border-sky-800 drop-shadow-2xl rounded-md p-3"
              placeholder="Message"
              cols="30"
              rows="10"
              required
            ></textarea>
            <div className="flex justify-end">
              <button
                className="font-medium border border-sky-800 w-2/5 lg:w-1/5 p-3 drop-shadow-2xl text-sky-950 rounded-md bg-sky-400"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
