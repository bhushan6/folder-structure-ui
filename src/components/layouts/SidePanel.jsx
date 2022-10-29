import React, { useState } from 'react'
import { ButtonPanel } from './ButtonPanel'
import { FolderStructure } from './FolderStructure'

const initialTreeData = {
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

    const [treeDataState, setTreeDataState] = useState(initialTreeData)

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
            <FolderStructure data={treeDataState} />
            <ButtonPanel setTreeDataState={setTreeDataState} />
        </div>
    )
}
