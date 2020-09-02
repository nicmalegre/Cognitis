import React, { useState, useContext, useEffect } from "react"; //importacion de la libreria
import { CompanyContext } from "../../../store/CompanyContext";
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
import { COMPANIES_URL } from "../../../urls/url";
import "./index.css";

const RegisterCompanyContainer = (props) => {
  //DATA FROM CONTEXT
  const [dataCompany, setDataCompany] = useContext(CompanyContext);

  //Se almacena la cantidad de compañias
  //const [company, setCompany] = useState(props.cantCompanies);
  //contador para mostrar dinamicamente el numero de compañia
  //const [cont, setContador] = useState(1);
  // state donde se almacena los datos de la compañia
  //test
  const [data, setData] = useState([]);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [selectcompany, setCompSelect] = useState({
    id: "",
    name: "",
    cuil: "",
    pais: "",
  });

  //
  const getCompanies = async () => {
    try {
      //http://localhost:3000/api/company
      const res = await axios.get(
        `${COMPANIES_URL}/headhouse/` + props.match.params.id
      );
      setData(res.data.companies_house); //le tenemos que pasar res para setear el objeto local
    } catch (e) {
      console.log(e);
    }
  };
  //peticion a la API para traer todas las compañias
  useEffect(() => {
    async function loadCompanies() {
      const res = await getCompanies();
      return res;
    }
    loadCompanies();
  }, []);

  const selectComp = (elemento) => {
    setCompSelect(elemento);
    setModalEliminar(true);
  };

  const eliminar = () => {
    const dataDelete = {
      company_id: selectcompany.company_id,
    };
    //http://localhost:3000/api/company
    axios
      .post(`${COMPANIES_URL}/deletecompany/`, dataDelete)
      .then((res) => {
        if (res.status == 200) {
          setData(
            data.filter(
              (elemento) => elemento.company_id !== selectcompany.company_id
            )
          );
        } else {
          console.log("error al eliminar la compania," + res.status);
        }
      })
      .catch((err) => console.log(err)); //mostrar error
    //setData(data.filter((elemento) => elemento.id !== selectcompany.id))
    setModalEliminar(false);
  };

  // SET COMPANY_ID EN CONTEXT
  const enviarIdSuc = (company_id) => {
    props.history.push("/registersucursal/" + company_id);
  };

  const toCreateCompany = () => {
    props.history.push("/createcompany/" + props.match.params.id);
  };

  const toEditCompany = (company_id) => {
    props.history.push("/editcompany/" + company_id);
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
            <Row>
              <h5 className="text-white ml-2">Manage Companies</h5>
              <Col className="row justify-content-end">
                <Button
                  color="secondary"
                  size="md"
                  onClick={() => toCreateCompany()}
                >
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
              {data.length > 0 ? (
                data.map((elemento) => (
                  <tr key={elemento.company_id}>
                    <td className="text-center">{elemento.company_id}</td>
                    <td className="text-center">{elemento.company_name}</td>
                    <td className="text-center">{elemento.company_cuit}</td>
                    <td className="text-center">{elemento.company_country}</td>
                    <td className="text-center">
                      <Button
                        color="primary"
                        size="sm"
                        onClick={() => toEditCompany(elemento.company_id)}
                      >
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
                        onClick={() => enviarIdSuc(elemento.company_id)}
                      >
                        <i className="mr-1">
                          <BsPlusCircle />
                        </i>
                        <span className="align-middle">Add Sucursal</span>
                      </Button>{" "}
                      {"   "}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}> No hay ninguna compañia registrada</td>
                </tr>
              )}
            </tbody>
          </Table>

          {/* <Row className="row justify-content-end" style={{ marginTop: 10 }}>
            <Col md={2}>
              <Link to="/registersucursal">
                <Button color="primary" type="submit" active>
                  Continuar
                </Button>
              </Link>
            </Col>
          </Row> */}
          <br />
        </Card>

        <br />
        <br />

        <Modal isOpen={modalEliminar}>
          <ModalBody>
            Estás Seguro que deseas eliminar la compañia{" "}
            {selectcompany && selectcompany.company_name}
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
