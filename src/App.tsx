import Modal from "react-modal";
import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { TransactionsProvider } from "./contexts/TransactionsContext";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleToggleModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }
  return (
    <TransactionsProvider>
      <Header handleToggleModal={handleToggleModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleToggleModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
