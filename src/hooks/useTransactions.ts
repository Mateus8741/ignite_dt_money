import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../contexts/TransactionsContext'

export function useTransactions() {
  const context = useContextSelector(TransactionContext, (context) => {
    return context
  })
  return context
}
