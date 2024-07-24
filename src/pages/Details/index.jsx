import { Container, Links } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag} from "../../components/Tags";

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.gitHub.Portarriaux.com.br</a></li>
          <li><a href="#">https://www.gitHub.Portarriaux.com.br</a></li>
          
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="NodeJs"/>
        <Tag title="Javascript"/>
      </Section>

      <Button title="Login" loading />
     
    </Container>
  );
}
