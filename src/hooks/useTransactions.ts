import { useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionsContext'

export function useTransactions() {
  const context = useContext(TransactionContext)
  return context
}
