import React, { useEffect, useState } from 'react';
import useLocalStorage from './components/customHooks/useLocalStorage';
import Editor from './components/editor/Editor';

function App() {
  const [html, setHtml] = useLocalStorage('html', '');
  const [css, setCss] = useLocalStorage('css', '');
  const [js, setJs] = useLocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
        <html>
          <body>${html}</body>
          <style>${css} </style>
          <script>${js}</script>
        </html>
        `
      )
    }, 250)
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml} />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss} />
        <Editor
          language="js"
          displayName="Javascript"
          value={js}
          onChange={setJs} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%" />
      </div>
    </div >
  );
}

export default App;