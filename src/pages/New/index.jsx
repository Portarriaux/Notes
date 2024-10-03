import { useState } from "react";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/Textarea";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks((preveState) => [...preveState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((preveState) => preveState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((preveState) => [...preveState, newTag]);
    setNewTag("");
  }

  function handleRemovetag(deleted) {
    setTags((preveState) => preveState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota");
    }

    if (newLink) {
      return alert(
        "Você deixou uma link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }
    await api.post("/notes", { title, description, tags, links });
    alert("Nota criada com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="voltar" onClick={handleBack} />
          </header>

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

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
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value="react"
                  onClick={() => {
                    handleRemovetag(tag);
                  }}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Nova Tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
