import React, {useRef} from 'react'
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

export const FolderStructure = ({data}) => {

    const depth = useRef(0)

    return (
        <div 
            style={{
                    border: '2px solid red',
                    borderRadius: '4px',
                    width: '100%',
                    flexGrow: 1,
                    overflowY : 'auto'
                }}
        >
            <h1 style={{fontSize: '0.9rem', textAlign: 'center'}} >Family Tree</h1>
            <ul>
                <FolderNode node = {data} key={data.id} depth={depth.current}/>
            </ul>
        </div>
    )
}
