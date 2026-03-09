import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
}

const usePageSEO = ({ title, description }: PageSEOProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';

    document.title = `${title} | MamaAlert`;
    metaDesc?.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      metaDesc?.setAttribute('content', prevDesc);
    };
  }, [title, description]);
};

export default usePageSEO;
