import {useState} from 'react'
import Screen00 from './Screen00'
import Screen01 from './Screen01'
import Screen02 from './Screen02'
export default function Chapter0(props){
  const {setStage} = props;
  const [chapterStage,setChapterStage] = useState(0);
  switch(chapterStage){
    case 0:
      return (<Screen00 setChapterStage={setChapterStage}/>);     
    case 1:
      return (<Screen01 setChapterStage={setChapterStage}/>);     
    case 2:
      return (<Screen02 setChapterStage={setChapterStage}/>);     
    default:
      setStage(1);
      return null;
  }
}
