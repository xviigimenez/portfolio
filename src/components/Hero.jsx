export default function Hero({ onVerCurriculo }) {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center md:gap-4 gap-8 p-6"
    >
      <h1 className="md:text-4xl text-3xl text-center font-bold text-black">
        Gustavo Gimenez Correa
      </h1>
      <h2 className="md:text-2xl text-lg text-center text-gray-500">
        Programação, design, Linux e café
      </h2>
      <div className="flex gap-8">
        <a
          href="https://github.com/xviigimenez"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-gray-500 p-2 hover:text-gray-500 hover:bg-gray-200 transition-color duration-150"
        >
          GitHub
        </a>
        <a
          onClick={onVerCurriculo}
          className="border-b-2 border-gray-500 p-2 hover:text-gray-500 hover:bg-gray-200 transition-color duration-150 cursor-pointer"
        >
          Currículo
        </a>
      </div>
    </section>
  );
}
