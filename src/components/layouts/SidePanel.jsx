import React, { useRef } from 'react'
import { FolderNode } from '../FolderNode'

const treeData = {
    id : "Great Grand Parent",
    children : [
      {
        id : "Son 1"
      },
      {
        id : "Son 2",
        children : [
          {
            id : "Daughter 1"
          }
        ]
      }
    ]
  }

export const SidePanel = () => {
    const depth = useRef(0)

    return (
        <div 
            className='tree' 
            style={{
                border: '2px solid black',
                height: '100vh',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                flexDirection: 'column',
                flexWrap: 'nowrap'
            }}
        >
            <ul>
                <FolderNode node = {treeData} key={treeData.id} depth={depth.current}/>
            </ul>
        </div>
    )
}
