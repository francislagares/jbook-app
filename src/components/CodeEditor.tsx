import MonacoEditor, {
  EditorProps,
  OnChange,
  OnMount,
} from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import { useRef } from 'react';

const CodeEditor: React.FC<EditorProps> = ({ defaultValue }) => {
  const editorRef = useRef<any>();
  const onEditorDidMount: OnMount = editor => {
    editorRef.current = editor;
    editor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const handleEditorChange: OnChange = (value, event) => {
    console.log('here is the current model value:', value, event);
  };

  const prettierFormat = () => {
    // Get current value from editor
    const unformatted = editorRef.current.getModel().getValue();
    // Format the value
    const formatted = prettier.format(unformatted, {
      parser: 'babel',
      plugins: [parser],
      useTabs: false,
      semi: true,
      singleQuote: true,
    });
    // Set the formated value back to the editor
    editorRef.current.setValue(formatted);
  };

  return (
    <>
      <button onClick={prettierFormat}>Format</button>
      <MonacoEditor
        onMount={onEditorDidMount}
        onChange={handleEditorChange}
        value={defaultValue}
        theme="vs-dark"
        language="javascript"
        height="500px"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </>
  );
};

export default CodeEditor;
