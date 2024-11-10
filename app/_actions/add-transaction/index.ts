'use server'

import { auth } from '@clerk/nextjs/server'
import type {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from '@prisma/client'
import { revalidatePath } from 'next/cache'

import { db } from '@/app/_lib/prisma'

import { addTransactionSchema } from './schema'

interface AddTransactionParams {
  name: string
  amount: number
  type: TransactionType
  category: TransactionCategory
  paymentMethod: TransactionPaymentMethod
  date: Date
}

export const addTransaction = async (params: AddTransactionParams) => {
  addTransactionSchema.parse(params)
  const { userId } = await auth()
  if (!userId) {
    throw new Error('Unauthorized')
  }
  await db.transaction.create({
    data: { ...params, userId },
  })
  revalidatePath('/transactions')
}
