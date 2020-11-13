import { useEffect, useState } from "react"
import { breakpoints } from "../styles/theme"
import elementResizeEvent, {unbind} from 'element-resize-event'

const useSectionResize = (sectionId, initialOffset) => {
  const [sectionHeight, setSectionHeight] = useState(undefined)
  const [nextOffset, setNextOffset] = useState(initialOffset)



  useEffect(() => {
    const section = document.getElementById(sectionId);

      elementResizeEvent(section, function() {
        console.log("resized!");
        console.log(section.offsetHeight);
        

      });

    return () => {
      unbind(section)
    }
  }, [])

  return [sectionHeight, nextOffset] 
}

export default useSectionResize