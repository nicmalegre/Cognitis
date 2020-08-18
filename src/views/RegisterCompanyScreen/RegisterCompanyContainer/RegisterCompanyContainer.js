import React, { useState} from "react"; //importacion de la libreria
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
} from "reactstrap"; //importar elementos
//import Formulario from "../formulario/formulario";
import {Link } from "react-router-dom";
import Logo from '../../../components/WizardComponents/base/logo';
import { BsPlusCircle } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import LayoutSucursal from '../../Layouts/RegisterCompanyLayout/layoutsucursal';
import "./index.css";

const RegisterCompanyContainer = (props) => {
  const companies = [
    { id: 1, name: "fama", cuil: "122555555", pais: "argentina" },
    { id: 2, name: "campany 2", cuil: "23370432896", pais: "paraguay" },
    { id: 3, name: "company 3", cuil: "1212313213212", pais: "urugauay" },
    { id: 4, name: "comapny 4", cuil: "55556568778", pais: "canada" },
  ];
  //Se almacena la cantidad de compañias
  //const [company, setCompany] = useState(props.cantCompanies);
  //contador para mostrar dinamicamente el numero de compañia
  //const [cont, setContador] = useState(1);
  // state donde se almacena los datos de la compañia
  const [data, setData] = useState(companies);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [selectcompany, setCompSelect] = useState({
    id: "",
    name: "",
    cuil: "",
    pais: "",
  });

  const selectComp = (elemento) => {
    setCompSelect(elemento);
    setModalEliminar(true);
  };

  const eliminar = () => {
    setData(data.filter((elemento) => elemento.id !== selectcompany.id));
    setModalEliminar(false);
  };

  //send Data to component phader and redirect a sucursales
  //let history = useHistory();
  //const setData=(data)=>{
  //  props.dataCompany(data);
  //  if(company > 0){
  //   history.push("/numbersucursales");
  // }

  //Funcion que renderiza el componente visual jsx
  return (
    <LayoutSucursal>
      <Container>
      <Row>
        <Col lg="6" md="3" xs="10">
          <Logo />
        </Col>
      </Row>
      <Card id="card" body style={{ marginTop: 100 }}>
        <CardHeader className="bg-dark">
          <Row card>
            <h5 className="text-white ml-2">Manage Companies</h5>
            <Col className="row justify-content-end">
              <Link to="/createcompany">
                <Button color="secondary" size="md">
                <i className="mr-1"><BsPlusCircle/></i>
                  Add New Company
                </Button>
              </Link>
            </Col>
          </Row>
        </CardHeader>
        <Table responsive className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Name</th>
              <th className="text-center">Cuil o Cuit</th>
              <th className="text-center">Pais</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento) => (
              <tr>
                <td className="text-center">{elemento.id}</td>
                <td className="text-center">{elemento.name}</td>
                <td className="text-center">{elemento.cuil}</td>
                <td className="text-center">{elemento.pais}</td>
                <td className="text-center">
                  <Button color="primary" size="sm">
                    <i className="mr-1">< MdModeEdit/></i>
                    Editar
                  </Button>{" "}
                  {"   "}
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => selectComp(elemento)}
                  >
                  <i className="mr-1"><AiTwotoneDelete /></i>
                    Eliminar
                  </Button>{" "}
                  {"   "}
                  <Link to="/registersucursal">
                    <Button color="info" size="sm">
                      <i className="mr-1"><BsPlusCircle/></i>
                      Add Sucursal
                    </Button>{" "}
                    {"   "}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <Row className="row justify-content-end" style={{ marginTop: 10 }}>
        <Col md={3}>
          <Link to="/registersucursal">
            <Button color="primary" type="submit" active>
              Continuar
            </Button>
          </Link>
        </Col>
      </Row>
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
