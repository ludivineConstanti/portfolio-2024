import { useState, useEffect } from "react";

const useResizeObserver = (
  refElement: Element | null,
  callback: (target: { clientHeight: number; clientWidth: number }) => void,
) => {
  const [observer, setObserver] = useState<ResizeObserver | null>(null);

  // set resize observer on component mount
  useEffect(() => {
    const resizeObserver = new ResizeObserver(
      (entries: ResizeObserverEntry[]) => {
        callback(entries[0].target);
      },
    );
    setObserver(resizeObserver);
  }, []);

  // observer wrapper when available
  useEffect(() => {
    if (refElement && observer) {
      observer.observe(refElement);
    }
    return () => {
      if (refElement && observer) {
        observer.unobserve(refElement);
      }
    };
  }, [refElement]);
};
export default useResizeObserver;
