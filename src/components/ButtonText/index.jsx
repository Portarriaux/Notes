import { Container } from "./styles";

export function ButtonText({title, isActive=false,...rest}){
    return(
        <Container type="button" Isactive={isActive.toString()}{...rest}>
            {title}
        </Container>
    );
};