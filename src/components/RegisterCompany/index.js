import React, { useState } from "react"; //importacion de la libreria
import { Row, Container} from "reactstrap"; //importar elementos
import Formulario from "../formulario/formulario";
import { useHistory } from "react-router-dom";



const RegisterCompany = (props) => {
  
  //Se almacena la cantidad de compañias
  const [company, setCompany] = useState(props.cantCompanies);
 //contador para mostrar dinamicamente el numero de compañia
  const [cont, setContador] = useState(1)
  // state donde se almacena los datos de la compañia
  const[datos , setDatos]= useState([])

//const dataCompanies=(data)=>{
//  setDatos([
//    ...datos,
//    {data}
 // ]);
//}


//send Data to component phader and redirect a sucursales
let history = useHistory();
const setData=(data)=>{
  props.dataCompany(data);
  if(company > 0){
    history.push("/numbersucursales");
  }
  
}

const Contador = () => {  
  setCompany(
        company - 1,
    )
    setContador(
      cont + 1,
    )
}

//function that redirect to end
const nextpage=()=>{
  history.push("/numbersucursales")
}

  //Funcion que renderiza el componente visual jsx
  return (
    <Container>
      {company > 0 ? (
        <div>
          <Row>
            <Formulario cantCompanies ={cont} Contador={Contador} dataCompanies={setData} cant={company}/>
          </Row>
          ):()        
        </div>
      ) : (nextpage())
        
      }
    </Container>
  );
};
export default RegisterCompany;
