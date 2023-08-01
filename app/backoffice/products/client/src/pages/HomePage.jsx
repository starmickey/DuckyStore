import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ProductTable from '../components/homepage/ProductTable'
import SideBar from "../components/generic/SideBar";
import TopBar from "../components/generic/TopBar";

function HomePage() {
    const [catalog, setCatalog] = React.useState(null);

    React.useEffect(() => {
        fetch("/products/catalog")
            .then((res) => res.json())
            .then((catalog) => setCatalog(catalog.response));
    });

    return (
        <div className='App'>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper" className="p-0">
                        <SideBar />
                    </Col>
                    <Col className="p-0">
                        <TopBar />
                        <Container id="page-content-wrapper">
                            {!catalog ?
                                <p>"Loading..."</p> :
                                <>
                                    <h1>Overview</h1>
                                    <ProductTable products={catalog} />
                                </>
                            }
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;