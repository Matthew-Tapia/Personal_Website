import Image from "next/image";

const Project = ({ url, img, text }) => {
  return (
    <div className="project">
      <hr className="my-14 border-sky-200" />
      <div className="grid lg:grid-cols-8 lg:grid-rows-1 grid-rows-8">
        <div className="lg:col-span-3 md:px-14 row-span-3">
          <a target="_blank" href={url}>
            <div className="h-full">
              <Image
                className="rounded-lg border border-sky-950 drop-shadow-2xl"
                height={500}
                width={500}
                src={img}
                alt="Project Image"
              />
            </div>
          </a>
        </div>

        <div className="lg:col-span-5 row-span-5 my-8 text-sky-200">
          <div className="lg:text-6xl text-5xl mb-6">{text.title}</div>
          <div className="lg:text-xl text-lg font-light">
            <div className="my-5">{text.description}</div>
            <div>
              Technologies: <br />
              {text.tech}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
