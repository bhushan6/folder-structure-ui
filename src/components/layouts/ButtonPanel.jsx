import React from 'react'
import { PrintFamilyTreeBtn } from '..'
import { AddFamilyBtn } from '../AddFamilyBtn'

export const ButtonPanel = ({setTreeDataState}) => {
  return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}
    >
        <AddFamilyBtn setTreeDataState={setTreeDataState}/>
        <PrintFamilyTreeBtn/>
    </div>
  )
}