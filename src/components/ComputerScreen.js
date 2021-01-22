import Image from "next/image";

const ComputerScreen = () => {
  return (
    <div className="jb-container flex items-center pt-10">
      <div className="hidden md:block">
        <Image
          src="/assets/img/MacBookScreen.png"
          alt="Website designs on a MacBook Screen."
          height={650}
          width={1200}
        />
      </div>
      <div className="block md:hidden">
        <Image
          src="/assets/img/iPhoneScreen.png"
          alt="Website designs on an iPhone Screen."
          height={900}
          width={450}
        />
      </div>
    </div>
  );
};

export default ComputerScreen;
