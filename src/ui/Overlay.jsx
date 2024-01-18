import { createPortal } from 'react-dom';

function Overlay({ children }) {
  return createPortal(
    <div className="backdrop-blur-sm absolute top-0 left-0 w-full h-full z-10  flex justify-center overflow-block">{children}</div>,
    document.getElementById('root')
  );
}

export default Overlay;
