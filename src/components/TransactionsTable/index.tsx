import { useTransactions } from "../../hooks/useTransactions";
import { formatDateToPTBR } from "../../utils/formatDateToPTBR";
import { formatNumberToCurrency } from "../../utils/formatNumberToCurrency";

import { Container } from "./styles";

export function TransactionTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {`${transaction.type === "withdraw" ? "-" : ""} ${formatNumberToCurrency(
                    transaction.amount
                  )}`}
                </td>
                <td>{transaction.category}</td>
                <td>{formatDateToPTBR(transaction.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
