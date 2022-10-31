import React, {useRef} from 'react'
import { useTreeState } from '../../contexts'
import { FolderNode } from '../FolderNode'
import { LayoutHeader } from '../LayoutHeader'
import { Modal } from '@mui/material'
import { FamilyDetailsForm } from '../FamilyDetailsForm'

export const FolderStructure = () => {

    const depth = useRef(0)

    const [treeState] = useTreeState()

    return (
        <div 
            style={{
                    borderBottom: '2px solid black',
                    width: '100%',
                    flexGrow: 1,
                    overflowY : 'auto'
                }}
        >
            <LayoutHeader header={'Family Tree'} />
            {Object.keys(treeState).length > 0 && (
                <ul>
                    <FolderNode node = {treeState} key={treeState.id} depth={depth.current} />
                </ul>
            )}

            {Object.keys(treeState).length < 1 && (
                <>
                    <Modal open={true} >
                        <FamilyDetailsForm  />
                    </Modal>
                </>
            )}
        </div>
    )
}
