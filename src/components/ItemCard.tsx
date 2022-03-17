import React from 'react'
import { Item } from '../Types'

type Props = {
    item: Item
}

export default function ItemCard({ item }: Props) {
    return (
        <div className='item-card'>
            <img src={item.image} alt="" />
            <div className='title-price'>
                <h2>{item.title}</h2>
                <span>{`$${item.price}`}</span>
            </div>

        </div>
    )
}
