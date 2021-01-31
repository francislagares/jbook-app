import { useEffect, useRef } from 'react';

interface PreviewProps {
  code: string;
}

const html = `
    <html>
      <head></head>
      <body>
        <div id='root'></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
              eval(event.data)
            } catch(error) {
              const root = document.querySelector('#root');
              root.innerHTML = '<div>' + error + '</div>';
              console.error(error);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, '*');
  }, [code]);

  return (
    <iframe
      ref={iframe}
      title="Local HTML Doc"
      sandbox="allow-scripts"
      srcDoc={html}
    />
  );
};

export default Preview;
