import { FaApple, FaReact } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const ReactIcons = () => {
  return (
      <IconContext.Provider value={{
        color: 'purple',
        size: '5rem'
      }}>
        <FaReact/>
        <FaApple/>
      </IconContext.Provider>
  );
}

export default ReactIcons