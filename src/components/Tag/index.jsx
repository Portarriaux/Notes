import { Container } from "./styls"

export function Tag({ title, ...rest }) {
    return(
        <Container {...rest}>
            { title}
        </Container>
    )
}