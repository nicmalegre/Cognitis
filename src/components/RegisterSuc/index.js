import React, { useState } from "react"; //importacion de la libreria
import { useHistory } from "react-router-dom";
import { Row, Container} from "reactstrap"; //importar elementos
import FormSuc from "../formulario/formSuc";

const RegisterSuc = (props) => {
  
  //Se almacena la cantidad de compañias
  const [suc, setSuc] = useState(props.cantSuc);
 //contador para mostrar dinamicamente el numero de compañia
  const [cont, setContador] = useState(1)
  // state donde se almacena los datos de la compañia
  const[datos , setDatos]= useState([])


const setData=(data)=>{
  props.dataSuc(data)
}




const contador = () => {  
  setSuc(
        suc - 1,
    )
    setContador(
      cont + 1,
    )
}

//function that redirect to end
  let history = useHistory();
  const nextpage=()=>{
    console.log(props.cantCompanies)
    if (props.cantCompanies > 0){
      history.push("/registercompany")
    }
    else{
    history.push("/fin")
    }
  }

  //Funcion que renderiza el componente visual jsx
  return (
    <Container>
      {(suc > 0) ? (
        <div>
          <Row>
            <FormSuc cantSuc ={cont} contador={contador} dataSucur={setData} />
          </Row>
        
        </div>
      ) : (nextpage())
      }
    </Container>
  );
};
export default RegisterSuc;
