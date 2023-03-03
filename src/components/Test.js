import styled from "styled-components";
import Typography from "../common/Typography";
import Button from "../common/Button";
export default function Text() {
  return (
    <Container>
      <Typography variant="h1" component="p">
        Meisam
      </Typography>
      <Typography variant="h2">Meisam</Typography>
      <Typography variant="h3">Meisam</Typography>
      <Button variant="primary" size="small">
        Click Me!
      </Button>
      <Button variant="secondary" size="medium">
        Click Me!
      </Button>
      <Button variant="outlinedbtn" size="larg">
        Click Me!
      </Button>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
