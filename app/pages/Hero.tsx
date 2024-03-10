const Hero = () => {
  return (
    <div className="mt-8 px-4 h-screen relative">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(400px circle at center, rgba(0,97,145,0.8) 33%, rgba(22,22,22,0.5) 100%);",
          backgroundSize: "cover",
          opacity: 0.5,
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-[0px_0px_15px_rgba(100,155,255,0.95)]">
            Hey 👋, I'm Kent Daniel!
          </h1>
          <p className="text-lg text-gray-300">
            I'm a proactive software engineer who's always learning and
            passionate about building quality, scalable code for outstanding
            software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
