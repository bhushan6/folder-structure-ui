import React, {useRef, useState} from "react"
import { FaChevronRight, FaChevronDown, FaFolder} from 'react-icons/fa'

export const FolderNode = ({node, depth}) => {

    const depthRef = useRef(depth+1)
  
    const [open, setOpen] = useState(true)
  
    return (
      <>
        <li>
            <div
              className='li-header'
              style={{
                paddingLeft : `${15*depthRef.current}px`
              }}
              onClick = {() => {
                node.children && setOpen(prevState => !prevState)
              }}
            >
              {node.children ? open? <FaChevronDown style={{marginRight: '4px'}} fontSize={'8px'} /> : <FaChevronRight style={{marginRight: '4px'}} fontSize={'8px'} /> : <></>}
              <FaFolder style={{marginLeft : node.children ? 0 : '15px', color: 'yellow'}} />
              {node.id}
            </div>
            {node.children && (
              <ul 
                style={{height: open ? '100%' : 0, overflow: 'hidden'}} 
              >
                {node.children.map((subNode, i) => {
                  return(
                      <FolderNode node = {subNode} key={subNode.id} depth = {depthRef.current}/>
                  )
                })}
              </ul>
            )}
        </li>
      </>
    )
  }