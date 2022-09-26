import "./Buscador.css"

const Filtro = ({setFilterWord}) => {



  return <input type="text" id="search" className="filtro" onChange={() => 
    
    setFilterWord(search.value.toLowerCase())} placeholder="Search by name, brand or description"/>;
};

export default Filtro