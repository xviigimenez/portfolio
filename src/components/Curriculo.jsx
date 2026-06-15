export default function Curriculo({ onVerLanding }) {
  return (
    <section id="curriculo" className="h-fit w-full py-24">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-black">Gustavo Gimenez Correa</h1>
        <h2 className="text-2xl text-gray-600">Analista de sistemas</h2>
        <div className="flex flex-col gap-6 p-8">
          <div className="p-4 border border-gray-400 w-64 md:w-128 h-fit rounded-lg hover:bg-gray-100">
            <h3 className="text-2xl">Experiência profissional</h3>
            <div className="py-6">
              <h4 className="text-xl">Porte Desenvolvimento Urbano S.A.</h4>
              <div className="py-2">
                <div className="md:flex md:justify-between">
                  <h5 className="text-lg">Assistente de TI</h5>
                  <p>10/2025 - Atualmente</p>
                </div>
                <div className="md:flex md:justify-between">
                  <h5 className="text-lg">Estagiário</h5>
                  <p>04/2024 - 10/2025</p>
                </div>
              </div>
              <div>
                <h5 className="text-lg underline">Principais atividades</h5>
                <ul className="list-disc list-inside">
                  <li>Manutenção de sistemas de CRM/ERP e integrações</li>
                  <li>Suporte técnico, helpdesk e levantamento de processos</li>
                  <li>
                    Automatização de processos com Python e ferramentas de RPA
                  </li>
                  <li>
                    Configuração de servidores Linux (Debian e Ubuntu Server)
                  </li>
                  <li>
                    Coordenação de implantação de sistemas (Projuris, GoTo
                    Connect)
                  </li>
                  <li>
                    Realização de treinamentos e preparação de materiais
                    instrutivos
                  </li>
                  <li>
                    Desenvolvimento de um website integrado à API do Google Maps
                  </li>
                  <li>Onboarding de TI para novos integrantes da empresa</li>
                  <li>Documentação de procedimentos do departamento</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 border border-gray-400 w-64 md:w-128 h-fit rounded-lg hover:bg-gray-100">
            <h3 className="text-2xl">Formação acadêmica</h3>
            <div className="pt-6 pb-2">
              <h4 className="text-lg">
                Tecnólogo em Análise e Desenvolvimento de Sistemas
              </h4>
              <div className="md:flex md:justify-between">
                <h5>FATEC Antônio Russo</h5>
                <p>01/2023 - 06/2026</p>
              </div>
            </div>
            <div className="py-2">
              <h4 className="text-lg">
                Técnico em Desenvolvimento de Sistemas
              </h4>
              <div className="md:flex md:justify-between">
                <h5>ETEC Jorge Street</h5>
                <p>01/2020 - 12/2022</p>
              </div>
            </div>
          </div>
          <div className="p-4 border border-gray-400 w-64 md:w-128 h-fit rounded-lg hover:bg-gray-100">
            <h3 className="text-2xl">Qualificações e conhecimentos</h3>
            <ul className="pt-6 list-disc list-inside">
              <li>Inglês avançado (C1/TOEIC)</li>
              <li>Gerenciamento de projetos, SCRUM e metodologias ágeis</li>
              <li>Programação em Python, C, C++, C#, Java, JavaScript e Lua</li>
              <li>Desenvolvimento web com Node.js, React e TailwindCSS</li>
              <li>Implantação de servidores Azure, AWS e VMware</li>
              <li>Distribuições GNU/Linux, linha de comando e Bash</li>
              <li>Bancos de dados MySQL e MariaDB</li>
              <li>Aplicação de macros com VBA em produtos Office</li>
            </ul>
          </div>
        </div>
        <a
          onClick={onVerLanding}
          href="#"
          className="border-b-2 border-gray-500 p-2 hover:text-gray-500 hover:bg-gray-200 transition-color duration-150"
        >
          Voltar
        </a>
      </div>
    </section>
  );
}
