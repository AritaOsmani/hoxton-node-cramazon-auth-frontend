import React from 'react'
import { Item } from '../Types'
import ItemCard from './ItemCard'

type Props = {
    items: Item[]
}

export default function ItemsContainer({ items }: Props) {
    return (
        <ul className='items-container'>
            {items.map(item => <ItemCard item={item} key={item.id} />)}
        </ul>
    )
}
