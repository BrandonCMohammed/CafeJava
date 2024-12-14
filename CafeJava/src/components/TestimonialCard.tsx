import Card from "react-bootstrap/Card";
import CafeJavaLogo from "../assets/CafeJava Logo.png";

function TestimonialCard() {
  return (
    <>
      <Card style={{ width: "400px" }}>
        <Card.Body>
          <div className="row ">
            <div className="col">
              <Card.Text>
                CafeJava is an amazing company that has changed the way that I
                use and get my coffee
              </Card.Text>
            </div>
          </div>

          <hr />

          <div className="row align-items-center">
            <div className="col">
              <Card.Img variant="top" src={CafeJavaLogo} />
            </div>

            <div className="col">
              <Card.Text>This is a description of the person who has given their testimony</Card.Text>
            </div>
          </div>

          {/* <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            This is going to be the description of the person
          </Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default TestimonialCard;
