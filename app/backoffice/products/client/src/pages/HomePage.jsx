import React from "react";
import ProductTable from '../components/homepage/ProductTable'
import SearchBar from '../components/generic/SearchBar';
import Container from 'react-bootstrap/Container';

function HomePage() {
    const [catalog, setCatalog] = React.useState(null);

    React.useEffect(() => {
        fetch("/products/catalog")
            .then((res) => res.json())
            .then((catalog) => setCatalog(catalog.response));
    });

    return (
        <div className='App'>
            <Container>
                {!catalog ?
                    <p>"Loading..."</p> :
                    <>
                        <h1 className='App-big-header'>Welcome</h1>
                        <SearchBar />
                        <ProductTable products={catalog}/>
                    </>
                }
            </Container>
        </div>
    );
}

export default HomePage;