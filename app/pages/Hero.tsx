const Hero = () => {
  return (
    <section className="relative mt-10 mb-8 w-[min(96%,1100px)] mx-auto h-[68vh] sm:h-[60vh] flex items-center">
      <div className="relative z-10 w-full px-6 sm:px-0">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl leading-tight font-extrabold mb-4">
            Hey 👋 — I&apos;m Kent Daniel.
          </h1>
          <p className="text-lg sm:text-xl text-[rgb(var(--color-muted))] mb-6">
            Proactive software engineer focused on scalable systems, delightful UX,
            and shipping production-ready products.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/Kent_Daniel_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Kent_Daniel_Resume.pdf"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold transition-all"
              style={{
                background: "rgb(var(--color-primary))",
                color: "rgb(10, 10, 15)",
              }}
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 border font-medium text-[rgb(var(--color-text))] bg-transparent transition-colors"
              style={{
                borderColor: "rgba(var(--color-muted),0.3)",
              }}
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
