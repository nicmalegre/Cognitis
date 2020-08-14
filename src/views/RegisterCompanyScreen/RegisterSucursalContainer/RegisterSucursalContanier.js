import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  Button,
  Table,
  CardTitle,
  CardHeader,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap"; //importar elementos
import { Link } from "react-router-dom";
import Logo from "../../../components/WizardComponents/base/logo";
import { BsPlusCircle } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import LayoutSucursal from '../../Layouts/RegisterCompanyLayout/layoutsucursal';
import "./index.css";

const RegisterSucursalContainer = (props) => {
  const sucursal = [
    { id: 1, name: "sucursal 1", cuil: "122555555" },
    { id: 2, name: "sucursal 2", cuil: "23370432896" },
    { id: 3, name: "sucursal 3", cuil: "1212313213212" },
    { id: 4, name: "sucursal 4", cuil: "55556568778" },
  ];

  //Se almacena la cantidad de compañias
  //const [company, setCompany] = useState(props.cantCompanies);
  //contador para mostrar dinamicamente el numero de compañia
  //const [cont, setContador] = useState(1);
  // state donde se almacena los datos de la compañia
  const [data, setData] = useState(sucursal);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [selectsuc, setSucSelect] = useState({
    id: "",
    name: "",
    cuil: "",
  });

  const selectSucursal = (elemento) => {
    setSucSelect(elemento);
    setModalEliminar(true);
  };

  const eliminar = () => {
    setData(data.filter((elemento) => elemento.id !== selectsuc.id));
    setModalEliminar(false);
  };

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
              <h5 className="text-white ml-2">Manage Sucursales</h5>
              <Col className="row justify-content-end">
                <Link to="/createsucursal">
                  <Button color="secondary" size="md">
                    <i className="mr-1 mt-1">
                      <BsPlusCircle />
                    </i>
                    Add New Sucursal
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
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elemento) => (
                <tr>
                  <td className="text-center">{elemento.id}</td>
                  <td className="text-center">{elemento.name}</td>
                  <td className="text-center">{elemento.cuil}</td>
                  <td className="text-center">
                    <Button color="primary" size="sm">
                      <i className="mr-1 mt-1">
                        <MdModeEdit />
                      </i>
                      Editar
                    </Button>{" "}
                    {"   "}
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => selectSucursal(elemento)}
                    >
                      <i className="mr-1 mt-1">
                        <AiTwotoneDelete />
                      </i>
                      Eliminar
                    </Button>{" "}
                    {"   "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
        <Row className="row justify-content-end" style={{ marginTop: 10 }}>
          <Col md={3}>
            <Link to="/dashboard">
              <Button color="primary" type="submit" active>
                Finalizar
              </Button>
            </Link>
          </Col>
        </Row>

        <Modal isOpen={modalEliminar}>
          <ModalBody>
            Estás Seguro que deseas eliminar la sucursal{" "}
            {selectsuc && selectsuc.name}
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
export default RegisterSucursalContainer;
