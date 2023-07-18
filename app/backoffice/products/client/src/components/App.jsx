import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/App.css';
import SquaredProductCard from './SquaredProductCard';

function App() {
  const [catalog, setCatalog] = React.useState(null);

  React.useEffect(() => {
    fetch("/products/catalog")
      .then((res) => res.json())
      .then((catalog) => setCatalog(catalog.response));
  });

  return (
    <div className="App">

      <Container fluid className="App-main">
        <h1 className="App-section-title"> Discounts </h1>

        <Row>
          {!catalog ?
            <p>"Loading..."</p> :
            catalog.map((product) => (
              <Col >

                <SquaredProductCard
                  title={product.name}
                  description={product.description}
                />

              </Col>
            ))
          }
        </Row>

      </Container>

    </div>
  );
}

export default App;
