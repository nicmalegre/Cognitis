import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  Button,
  Table,
  CardHeader,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap"; //importar elementos
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import Logo from "../../../components/WizardComponents/base/logo";
import { BsPlusCircle } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import LayoutSucursal from '../../Layouts/RegisterCompanyLayout/layoutsucursal';
import "./index.css";

const RegisterSucursalContainer = (props) => {
  //Se almacena la cantidad de compañias
  //const [company, setCompany] = useState(props.cantCompanies);
  //contador para mostrar dinamicamente el numero de compañia
  //const [cont, setContador] = useState(1);
  // state donde se almacena los datos de la compañia
  const [data, setData] = useState([]);
  const [dataSend , setDataSend] = useState({company_id:props.match.params.id});
  const [modalEliminar, setModalEliminar] = useState(false);
  const [selectsuc, setSucSelect] = useState({
    id: "",
    name: "",
    cuil: "",
  });

/*
  const getBranchOffices=()=>{
    axios
    .post(
      "http://localhost:3000/api/branchofficehouse/branchofficebycompany",dataSend
    )
    .then((res) => {
      setData(res.data); //le tenemos que pasar res para setear el objeto local
    })
    .catch((err) => console.log(err)); //mostrar error
  }*/
    //
    const getBranchOffices = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/branchofficehouse/branchofficebycompany", dataSend
        );
        console.log(res);
        setData(res.data); //le tenemos que pasar res para setear el objeto local
      } catch (e) {
        console.log(e);
      }
    };
    //peticion a la API para traer todas las compañias
    useEffect(() => {
      async function loadBranchOffices() {
        const res = await getBranchOffices()
        return res;
      }
      loadBranchOffices();
    },[]);

  
  const selectSucursal = (elemento) => {
    setSucSelect(elemento);
    setModalEliminar(true);
  };

  const eliminar = () => {
    const dataDelete = {
      id: selectsuc.branch_office_id,
    }
    axios.post("http://localhost:3000/api/branchofficehouse/delete", dataDelete)
    .then((res) => {
      //getBranchOffices();
      setData(data.filter((elemento) => elemento.branch_office_id !== selectsuc.branch_office_id))
    })
    .catch((err) => console.log(err)); //mostrar error
    setModalEliminar(false);
  };

  const toCreateSucursal=()=>{
    props.history.push("/createsucursal/" + props.match.params.id);
  }

  const toEditBranch = (branchoffice_id) => {
    props.history.push("/editbranchoffice/" + branchoffice_id);
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
        <Card id="card" body style={{ marginTop: 50 }}>
          <CardHeader className="bg-dark">
            <Row >
              <h5 className="text-white ml-2">Manage Sucursales</h5>
              <Col className="row justify-content-end">
                  <Button color="secondary" size="md" onClick={()=>toCreateSucursal()} >
                      <i className="mr-1 mt-1">
                        <BsPlusCircle />
                      </i>
                      <span className="align-middle">Add New Sucursal</span>
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
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
            {(data.length > 0)?(
              data.map((elemento) => (
                <tr key={elemento.branch_office_id}>
                  <td className="text-center">{elemento.branch_office_id}</td>
                  <td className="text-center">{elemento.branch_office_name}</td>
                  <td className="text-center">{elemento.branch_office_cuit}</td>
                  <td className="text-center">
                    <Button color="primary"
                            size="sm"
                            onClick={()=> toEditBranch(elemento.branch_office_id)}>
                      <i className="mr-1 mt-1">
                        <MdModeEdit />
                      </i>
                      <span className="align-middle">Editar</span>
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
                      <span className="align-middle">Eliminar</span>
                    </Button>{" "}
                    {"   "}
                  </td>
                </tr>
              ))) :  (
                <tr>
                  <td colSpan={6}> No hay ninguna Sucursal registrada</td>
                </tr> 
             )}
            </tbody>
          </Table>
          <Row className="row justify-content-end" style={{ marginTop: 10 }}>
          <Col md={2}>
            <Link to="/LoginUsers/Login">
              <Button color="primary" type="submit" active>
                Finalizar
              </Button>
            </Link>
          </Col>
        </Row>
        <br/>
        </Card>
        <br/>
        <br/>


        <Modal isOpen={modalEliminar}>
          <ModalBody>
            Estás Seguro que deseas eliminar la sucursal{" "}
            {selectsuc && selectsuc.branch_office_name}
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
export default withRouter(RegisterSucursalContainer);
