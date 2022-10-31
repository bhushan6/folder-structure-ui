import { useState } from "react";
import { useSelectedNodeState, useTreeState } from "../contexts";

export function uid() {
    return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
};

export const initialFamilyInfoState = {
    "Name" : "",
    "Spouse" : "",
    "Location" : "",
    "Birth Year" : "",
    "Present Address" : "",
    "Family Photo" : null
}

export const useAddFamily = ({initialFamilyInfoState, afterAdding = () => {}, }) => {

    const [familyInfo, setFamilyInfo] = useState(initialFamilyInfoState)
  
    const [selectedNode] = useSelectedNodeState()
    const [treeState, setTreeDataState] = useTreeState()
  
    const addFamily = (e) => {
      e.preventDefault()
      selectedNode && setTreeDataState(prevTree => {
        const clone = {...prevTree}
        const uId = uid()
        let currentNode = clone
        selectedNode.ancentors.forEach((node, i)=> {
          if(i !== 0){
            currentNode = currentNode.children[node]
          }
        })
        currentNode.children = currentNode.children ?  {...currentNode.children, [uId] : {id: uId, ...familyInfo}} : {[uId] : {id: uId, ...familyInfo}}
        return clone
      })
  
      !selectedNode && Object.keys(treeState).length === 0 && setTreeDataState(() => {
        return{
          id : uid(),
          ...familyInfo
        }
      })
  
      // handleClose()
      afterAdding()
      setFamilyInfo(initialFamilyInfoState)
    }
  
    const setFamilyInfoState = e => {
      const {name, value} = e.target
      setFamilyInfo(prevState => {
        return {
          ...prevState,
          [name] : value
        }
      })
    }
  
    const onPicUpload = e => {
      // const picUrls = e.target.files.map(file => URL.createObjectURL(file))
      const picUrls = []
  
      const allSelectedImgs =  e.target.files
  
      for (let index = 0; index < allSelectedImgs.length; index++) {
        const currentImg = allSelectedImgs[index];
        picUrls.push(URL.createObjectURL(currentImg))
      }
  
      picUrls.length > 0 && setFamilyInfo(prevState => {
        return{
          ...prevState,
          "Family Photo" : picUrls
        }
      })
    }
  
    return {familyInfo, setFamilyInfoState, addFamily, onPicUpload}
  }