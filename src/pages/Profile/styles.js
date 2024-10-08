import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }

    button {
      background: none;
      border: none;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;
`;

export const Avatar = styled.div`
  position: relative;
  margin: -90px auto 32px;

  width: 186px;
  height: 186px; /* Corrigido para incluir a unidade de medida */

  > img {
    border-radius: 50%;
    width: 100%; /* Preenche o contêiner sem distorcer */
    height: 100%; /* Preenche o contêiner sem distorcer */
    object-fit: cover; /* Ajusta a imagem para cobrir o contêiner mantendo o aspecto */
  }

  > label {
    width: 48px;
    height: 48px;
    position: absolute;

    bottom: 7px;
    right: 7px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    > input {
      display: none;
    }

    > svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;
