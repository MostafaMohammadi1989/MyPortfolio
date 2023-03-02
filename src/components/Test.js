import styled from "styled-components";
import Typography from "../common/Typography";
export default function Text() {
  return (
    <Container>
      <Typography variant="h1" component="p">
        Meisam
      </Typography>
      <Typography variant="h2">Meisam</Typography>
      <Typography variant="h3">Meisam</Typography>
      <Typography variant="h4">Meisam</Typography>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
