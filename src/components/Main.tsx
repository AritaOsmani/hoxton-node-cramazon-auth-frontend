import React, { useEffect, useState } from 'react'
import { Item } from '../Types'
import ItemsContainer from './ItemsContainer'

export default function Main() {
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        fetch(`http://localhost:4000/items`).then(res => res.json()).then(item => setItems(item))
    }, [])
    return (
        <div className='main-container'>
            <ItemsContainer items={items} />
        </div>
    )
}
