import {useState} from 'react'
import Screen10 from './Screen10'
import Screen11 from './Screen11'
import Screen12 from './Screen12'
export default function Chapter1(props){
  const {setStage} = props;
  const [chapterStage,setChapterStage] = useState(0);
  switch(chapterStage){
    case 0:
      return (<Screen10 setChapterStage={setChapterStage}/>);     
    case 1:
      return (<Screen11 setChapterStage={setChapterStage}/>);     
    case 2:
      return (<Screen12 setChapterStage={setChapterStage}/>);     
    default:
      setStage(2);
      return null;
  }
}
