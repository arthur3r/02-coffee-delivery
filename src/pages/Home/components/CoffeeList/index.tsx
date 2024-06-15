import { useCallback, useEffect, useState } from 'react'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, CoffeeListContent } from './styles'
import { api } from '../../../../lib/axios'
import { Spinner } from '../../../../components/Spinner'

export interface Coffee {
  id: number
  name: string
  description: string
  imageUrl: string
  tags: string[]
  price: string
}

export function CoffeeList() {
  const [isLoading, setIsLoading] = useState(true)
  const [coffees, setCoffees] = useState<Coffee[]>([])

  const fetchCoffees = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get('/coffees')

      setCoffees(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCoffees()
  }, [fetchCoffees])

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeeListContent>
        {isLoading ? (
          <Spinner />
        ) : (
          coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))
        )}
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}
