import Card from 'react-bootstrap/Card';

function SquaredProductCard(props) {
  let title = props.title
  let description = props.description

  if (props.description) {
    if (props.description.length > 16)
      description = description.slice(0, 16) + '...'
  }

  return (
    <Card className='SquaredProductCard'>
      <Card.Img variant="top" src='./logo192.png' className='SquaredProductCard-img' />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> {description} </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SquaredProductCard;