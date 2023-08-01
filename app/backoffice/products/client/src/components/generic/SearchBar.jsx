import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar(params) {
    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
        </Form>
    )
}

export default SearchBar;