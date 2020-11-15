import {useState} from 'react'
import Screen00 from './Screen00'

export default function Chapter0(props){
  const [chapterStage,setChapterStage] = useState(0);
  switch(chapterStage){
    case 0:
      return (<Screen00 setChapterStage={setChapterStage}/>);     
    default:
      return null;
  }
}
