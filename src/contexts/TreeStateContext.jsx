import React, { createContext, useContext, useState } from 'react'

const TreeStateCTX = createContext(null)

export const TreeStateContext = ({children}) => {

    const treeState = useState({})

    return (
        <TreeStateCTX.Provider value={treeState} >
            {children}
        </TreeStateCTX.Provider>
    )
}

export const useTreeState = () => useContext(TreeStateCTX)
