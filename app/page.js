import Project from "@components/Project";

const projects = [
  {
    text: {
      title: "Leaf and Spine LLC",
      description:
        "Landing page website built for Los Angeles plant shop, Leaf and Spine",
      tech: "HTML, JavaScript, CSS, Bootstrap 5",
    },
    url: "https://matthew-tapia.github.io/Leaf_and_Spine/",
    img: "/Leaf_and_Spine.png",
  },
  {
    text: {
      title: "Poker Analysis",
      description: "Monte Carlo Poker Simulation Visualizer",
      tech: "C++, OOP, SFML",
    },
    url: "https://github.com/Matthew-Tapia/SFML_Poker_Analysis",
    img: "/Poker_Analysis.png",
  },
];

const Home = () => {
  return (
    <div className="overflow-scroll">
      <div className="mx-24 mt-14 lg:mt-24">
        <div className="welcome-section mb-20 text-sky-950">
          <h1 className="lg:text-6xl text-5xl font-medium">
            Hello, I&apos;m Matthew. <br /> I&apos;m a Software Engineer.
          </h1>

          <h2 className="lg:text-2xl text-xl my-10 font-light">
            Computer Science Student @ UCLA
          </h2>
        </div>

        <div className="project-section">
          {projects.map((item, index) => (
            <Project
              key={"${item.text.title}${index}"}
              url={item.url}
              text={item.text}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
