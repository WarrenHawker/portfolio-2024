import { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  header?: ReactNode;
}

const Overlay = ({ children, isOpen, setIsOpen, header }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: MouseEvent) => {
    const clicked = e.target as HTMLElement;
    if (
      clicked.classList.contains('overlay') ||
      clicked.classList.contains('overlay-inner')
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    let overlay: HTMLDivElement | null;
    if (overlayRef.current) {
      overlay = overlayRef.current;
      overlay.addEventListener('click', handleOverlayClick);
    }
    return () => {
      if (overlay) {
        overlay.removeEventListener('click', handleOverlayClick);
      }
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isOpen]);
  return (
    <div className={isOpen ? 'overlay open' : 'overlay'} ref={overlayRef}>
      <div className="overlay-inner">
        <div className="overlay-content">
          <div className="overlay-header">{header}</div>
          <button id="overlay-close" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className="overlay-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
