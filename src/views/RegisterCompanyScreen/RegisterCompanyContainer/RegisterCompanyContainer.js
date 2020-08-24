import React, { useState, useContext, useEffect } from "react"; //importacion de la libreria
import { CompanyContext } from "../../../store/CompanyContext";
import { withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Card,
  Button,
  Table,
  CardHeader,
  ModalFooter,
  ModalBody,
  Modal,
  Label,
} from "reactstrap"; //importar elementos
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../../components/WizardComponents/base/logo";
import { BsPlusCircle } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import LayoutSucursal from "../../Layouts/RegisterCompanyLayout/layoutsucursal";
import "./index.css";
import RegisterSucursalContainer from "../RegisterSucursalContainer/RegisterSucursalContanier";

const RegisterCompanyContainer = (props) => {
  /*const companies = [
    { id: 1, name: "fama", cuil: "122555555", pais: "argentina" },
    { id: 2, name: "campany 2", cuil: "23370432896", pais: "paraguay" },
    { id: 3, name: "company 3", cuil: "1212313213212", pais: "urugauay" },
    { id: 4, name: "comapny 4", cuil: "55556568778", pais: "canada" },
    { id: 4, name: "comapny 4", cuil: "55556568778", pais: "canada" },
    { id: 4, name: "comapny 4", cuil: "55556568778", pais: "canada" },
    { id: 4, name: "comapny 4", cuil: "55556568778", pais: "canada" },
  ];*/

  //DATA FROM CONTEXT
  const [dataCompany, setDataCompany] = useContext(CompanyContext);
  
  //Se almacena la cantidad de compañias
  //const [company, setCompany] = useState(props.cantCompanies);
  //contador para mostrar dinamicamente el numero de compañia
  //const [cont, setContador] = useState(1);
  // state donde se almacena los datos de la compañia
  const [data, setData] = useState([]);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [selectcompany, setCompSelect] = useState({
    id: "",
    name: "",
    cuil: "",
    pais: "",
  });

  //peticion a la API para traer todas las compañias
  useEffect(() => {
    console.log(props);
    axios
      .get(
        "https://cognitis-360.herokuapp.com/api/company/headhouse/"+ props.match.params.id
      )
      .then((res) => {
        console.log(res)
        setData(res.data.companies_house); //le tenemos que pasar res para setear el objeto local
      })
      .catch((err) => console.log(err)); //mostrar error
  }, []);

  const selectComp = (elemento) => {
    setCompSelect(elemento);
    setModalEliminar(true);
  };

  const eliminar = () => {
    setData(data.filter((elemento) => elemento.id !== selectcompany.id));
    setModalEliminar(false);
  };

  // SET COMPANY_ID EN CONTEXT
  const enviarIdSuc = (elemento_id) => {
    setDataCompany({ ...setDataCompany, company_id: elemento_id });
    props.history.push("/registersucursal");
  };

  const toCreateCompany=()=>{
    console.log(dataCompany.head_house_id)
    props.history.push("/createcompany/" + props.match.params.id);
  }


  //Funcion que renderiza el componente visual jsx
  return (
    <LayoutSucursal>
      <Container>
        <Row>
          <Col lg="6" md="3" xs="10">
            <Logo />
          </Col>
        </Row>
        <Card id="card" body style={{ marginTop: 50 }}>
          <CardHeader className="bg-dark">
            <Row card>
              <h5 className="text-white ml-2">Manage Companies</h5>
              <Col className="row justify-content-end">
                  <Button color="secondary" size="md" onClick={()=> toCreateCompany()}>
                    <i className="mr-1">
                      <BsPlusCircle />
                    </i>
                    <span className="align-middle">Add New Company</span>
                  </Button>
              </Col>
            </Row>
          </CardHeader>

          <Table responsive className="table table-bordered">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">Name</th>
                <th className="text-center">Cuil o Cuit</th>
                <th className="text-center">Country</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(data.length > 0)?(
               data.map(elemento => (
                <tr key={elemento.company_id}>
                  <td className="text-center">{elemento.company_id}</td>
                  <td className="text-center">{elemento.company_name}</td>
                  <td className="text-center">{elemento.company_cuit}</td>
                  <td className="text-center">{elemento.company_country}</td>
                  <td className="text-center">
                    <Button color="primary" size="sm">
                      <i className="mr-1">
                        <MdModeEdit />
                      </i>
                      <span className="align-middle">Editar</span>
                    </Button>{" "}
                    {"   "}
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => selectComp(elemento)}
                    >
                      <i className="mr-1">
                        <AiTwotoneDelete />
                      </i>
                      <span className="align-middle">Eliminar</span>
                    </Button>{" "}
                    {"   "}
                    <Button
                      color="info"
                      size="sm"
                      onClick={() => enviarIdSuc(elemento.id)}
                    >
                      <i className="mr-1">
                        <BsPlusCircle />
                      </i>
                      <span className="align-middle">Add Sucursal</span>
                    </Button>{" "}
                    {"   "}
                  </td>
                </tr>
              ))): (
                 <tr>
                   <td colSpan={6}> No hay ninguna compañia registrada</td>
                 </tr> 
              )}
            </tbody>
          </Table>

          <Row className="row justify-content-end" style={{ marginTop: 10 }}>
            <Col md={2}>
              <Link to="/registersucursal">
                <Button color="primary" type="submit" active>
                  Continuar
                </Button>
              </Link>
            </Col>
          </Row>
          <br />
        </Card>

        <br />
        <br />

        <Modal isOpen={modalEliminar}>
          <ModalBody>
            Estás Seguro que deseas eliminar la compañia{" "}
            {selectcompany && selectcompany.name}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => eliminar()}>
              Yes
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setModalEliminar(false)}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
      </Container>
    </LayoutSucursal>
  );
};
export default RegisterCompanyContainer;
