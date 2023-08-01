import ProductTable from '../components/homepage/ProductTable'
import SearchBar from '../components/generic/SearchBar';
import Container from 'react-bootstrap/Container';
import '../styles/App.css'

function HomePage() {
    return (
        <div className='App'>
            <Container>
                <h1 className='App-big-header'>Welcome</h1>
                <SearchBar />
                <ProductTable />
            </Container>
        </div>
    );
}

export default HomePage;