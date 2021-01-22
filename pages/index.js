//Components
import Navigation from "../src/components/Navigation";
import ComputerScreen from "../src/components/ComputerScreen";

const Home = () => {
  return (
    <div>
      <Navigation />
      {/* Hero */}
      <section>
        <div className="jb-container mt-24">
          <h1 className="text-4xl md:text-6xl font-semibold text-center leading-snug mb-10">
            <span className="text-blue-300"> Hi I'm Joss.</span> I design and
            build full-stack JavaScript websites and applications.
          </h1>
          <div class="flex flex-col space-y-6 space-x-0 md:space-x-6 md:space-y-0 md:flex-row justify-center items-center">
            <button className="cta cta_primary">
              Hire Me Today <i className="fas fa-arrow-right pl-2" />
            </button>
            <button className="cta cta_secondary">
              Find Out More <i className="fas fa-arrow-down pl-2" />
            </button>
          </div>
        </div>
      </section>
      {/* Computer Screen */}
      <ComputerScreen />
    </div>
  );
};

export default Home;
