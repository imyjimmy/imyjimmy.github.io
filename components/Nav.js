import { useState, useRef, useEffect } from 'react'
import Menu from './Menu'
import Burger from './Burger'

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useOnClickOutside(node, () => setOpen(false))
  
  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen} />
    </div>
  )
}

export default Nav