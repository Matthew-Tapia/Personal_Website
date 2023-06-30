import Image from "next/image";

const page = () => {
  return (
    <div className="h-screen overflow-auto">
      <div className="flex lg:flex-row space-x-6 flex-col mx-6 lg:mx-24 mt-6 lg:mt-20">
        <div className="portrait-section flex justify-center lg:basis-1/3 ">
          <div className="rounded-full lg:pt-20">
            <Image
              className="rounded-full border w-64 h-64 lg:w-80 lg:h-80 border-sky-800 drop-shadow-2xl"
              src="/avatar.png"
              width={350}
              height={350}
              alt="avatar"
            />
          </div>
        </div>
        <div className="text-section text-center lg:text-left lg:pt-0 pt-10 lg:basis-2/3">
          <div className="border border-sky-900 bg-sky-950 drop-shadow-2xl rounded-2xl p-6 lg:px-16 lg:py-12 lg:space-y-6">
            <h1 className="lg:text-6xl text-5xl font-medium mb-10 text-sky-300">
              Personal Statement
            </h1>
            <p className="lg:text-xl text-lg my-10 font-light text-sky-200">
              Through my experiences as a school orientation leader, a STEM
              tutor, and customer service worker, I have developed a unique
              combination of leadership, time management, and technical skills
              which I believe make me a well-rounded and adaptable individual. I
              am very passionate about computer science and mathematics, and I
              am excited to pursue new opportunities and challenges to further
              my personal and professional growth.
              <br />
              <br />
              My passion for computer science has driven me to pursue
              opportunities that have further developed my skills and knowledge.
              For instance, I have taken courses in data structures and
              algorithms and logic based design and engaged in independent
              research projects in web, mobile, and general software
              development. These experiences have broadened my perspective and
              helped me develop a deeper understanding of computer science. I am
              excited to continue exploring this field as I start on my journey
              into internships and work experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
