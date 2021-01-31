import MonacoEditor, {
  EditorProps,
  OnChange,
  OnMount,
} from '@monaco-editor/react';

const CodeEditor: React.FC<EditorProps> = ({ defaultValue }) => {
  const onEditorDidMount: OnMount = editor => {
    editor.getModel()?.updateOptions({ tabSize: 2 });
  };

  const handleEditorChange: OnChange = (value, event) => {
    console.log('here is the current model value:', value, event);
  };

  return (
    <>
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
