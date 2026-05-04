export function Projeto({ imagem, nome, descricao }) {
  return (
    <div className="p-4 border border-gray-400 w-64 h-64 rounded-lg hover:bg-gray-100">
      <div className="flex items-center justify-center h-1/2">
        <img src={imagem} className="w-full h-20"></img>
      </div>
      <div className="h-1/2">
        <h4 className="text-lg">{nome}</h4>
        <p className="text-gray-600">{descricao}</p>
      </div>
    </div>
  );
}

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="px-8 grayscale hover:grayscale-0 active:grayscale-0 transition-color md:duration-900 duration-300"
    >
      <h2 className="text-3xl text-center font-bold py-16">Projetos</h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-8">
        <Projeto
          imagem="/advice-generator.png"
          nome="Advice Generator"
          descricao="Desafio do Frontend Mentor com conexão à Advice Slip API."
        />
        <Projeto
          imagem="/trampe.png"
          nome="trampe"
          descricao="Plataforma de anúncios de serviços para trabalhadores autônomos."
        />
        <Projeto
          imagem="/visus.png"
          nome="Visus"
          descricao="Plataforma de comunicação com foco em acessibilidade visual."
        />
      </div>
    </section>
  );
}
