import React from 'react'
import ItemsList from './ItemsList'

const Content = ({items,handleCheck,handleDelete})=>{


return (
    <main>
        {(items.length )?(
        <ItemsList
        items={items}
       handleCheck={handleCheck}
       handleDelete={handleDelete}
       />
        ):(
    <h1 style={{marginTop:'2rem'}}>Your list is Empty!..</h1>
)
}
    </main>
  )
}

export default Content