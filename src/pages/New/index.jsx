import { useState } from "react";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";

export function New() {
  // Estado para armazenar a lista de links adicionados
  const [links, setLinks] = useState([]);
  // Estado para armazenar o valor temporário do novo link que está sendo digitado no campo de input
  const [newLink, setNewLink] = useState("");

  function handleAddLink() {
    setLinks((preveState) => [...preveState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((preveState) => preveState.filter((link) => link !== deleted));
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}

            <NoteItem
              isNew //todo: Indica que este é um novo item (link ainda não adicionado)
              placeholder="Novo link" //todo: O texto exibido no campo de input
              value={newLink} //todo: O valor atual digitado pelo usuário no campo
              onChange={(e) => setNewLink(e.target.value)} //todo: Atualiza o estado "newLink" com o texto digitado
              onClick={handleAddLink} //todo: Quando clicado, chama a função "handleAddLink" para adicionar o link à lista
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova Tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
