import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen overflow-auto">
      <div className="flex lg:flex-row space-x-6 flex-col mx-14 lg:mx-24 mt-6 lg:mt-20">
        <div className="portrait-section flex justify-center lg:basis-1/3 ">
          <div className="rounded-full border border-sky-800 bg-gradient-to-br from-gray-500 from-30% to-amber-400">
            <Image
              className="rounded-full mix-blend-overlay drop-shadow-2xl"
              src="/avatar.jpeg"
              width={300}
              height={300}
              alt="avatar"
            />
          </div>
        </div>
        <div className="text-section text-center lg:text-left lg:pt-8 pt-14 lg:basis-2/3">
          <h1 className="lg:text-6xl text-5xl font-medium mb-10 text-sky-950">
            Who Am I?
          </h1>
          <p className="lg:text-2xl text-xl my-10 font-light text-sky-200">
            This is my text about me
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
