export default function Hero() {
  return (
    <section className="h-[calc(100vh-3.5rem)] flex flex-col justify-center items-center md:gap-4 gap-8 p-6">
      <h1 className="md:text-4xl text-3xl text-center font-bold text-black">
        Gustavo Gimenez Correa
      </h1>
      <h2 className="md:text-2xl text-lg text-center text-gray-500">
        Programação, design, Linux e café
      </h2>
      <div className="flex gap-8">
        <a
          href="#projetos"
          className="border-b-2 border-gray-500 p-2 hover:text-gray-500 hover:bg-gray-200 transition-color duration-150"
        >
          Projetos
        </a>
        <a
          href="#"
          className="border-b-2 border-gray-500 p-2 hover:text-gray-500 hover:bg-gray-200 transition-color duration-150"
        >
          Currículo
        </a>
      </div>
    </section>
  );
}
