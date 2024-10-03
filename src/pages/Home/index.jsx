import { FiPlus } from "react-icons/fi";
import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Note } from "../../components/Note";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    if (tagName == "all") {
      return setTagsSelected([]);
    }
    
    const alreadySelected = tagSelected.includes(tagName);

    if (alreadySelected) {
      const filteredTags = tagSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fecthTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fecthTags();
  }, []);

  useEffect(() => {
    async function fecthNote() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagSelected}`
      );
      setNotes(response.data);
    }

    fecthNote();
  }, [tagSelected, search]);

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            $isactive={tagSelected.length === 0} // Ativo quando nenhuma tag está selecionada
          />
        </li>

        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                $isactive={tagSelected.includes(tag.name)} // Ativo se a tag estiver no array
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        {/*Revisar  */}
        <Section title="Minhas notas">
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
