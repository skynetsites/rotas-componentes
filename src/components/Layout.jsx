// Importações de hooks, componentes e estilos do PrimeReact e PrimeFlex
import "primereact/resources/themes/lara-light-blue/theme.css"
import "primeflex/themes/primeone-light.css"
import "primereact/resources/primereact.min.css" 
import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      {/* Layout */}
      <div className="flex flex-column px-20 h-screen"> 
          <Header /> {/* Cabeçalho fixo */}
            <main className="flex-1 xl:px-4 xl:py-6 p-4 pt-1 pb-5 bg-gray-50"> {/* Conteúdo principal */}
              {children} {/* Renderiza o conteúdo */}
            </main>
          <Footer /> {/* Rodapé */}
      </div>
    </>
  )
}

export default Layout

