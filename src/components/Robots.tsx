import { useEffect } from 'react';

export default function Robots() {
  useEffect(() => {
    const text = `User-agent: *
Allow: /

Sitemap: https://digitalworkforce.one/sitemap.xml`;

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    window.location.href = url;
  }, []);

  return null;
}
