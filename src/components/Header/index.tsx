import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

type HeaderProps = {
  handleToggleModal: () => void;
};

export function Header({ handleToggleModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleToggleModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
