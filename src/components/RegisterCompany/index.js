import React, { useState } from "react"; //importacion de la libreria
import { Row, Container} from "reactstrap"; //importar elementos
import Formulario from "../formulario/formulario";
import Formsuc from "../formulario/formSuc";
import { useHistory } from "react-router-dom";


const RegisterCompany = (props) => {
  
  //Se almacena la cantidad de compañias
  const [company, setCompany] = useState(4);
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
    console.log("dentro")
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
      ) : (
        <h3>siguiente</h3>
      )}
    </Container>
  );
};
export default RegisterCompany;
