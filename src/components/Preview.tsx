import { useEffect, useRef } from 'react';
import './Preview.css';

interface PreviewProps {
  code: string;
}

const html = `
    <html>
      <head>
      <style>html { background-color: white; }</style>
      </head>
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
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        title="Local HTML Doc"
        sandbox="allow-scripts"
        srcDoc={html}
      />
    </div>
  );
};

export default Preview;
