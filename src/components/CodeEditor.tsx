/* eslint-disable @typescript-eslint/no-empty-function */
import './CodeEditor.css';
import './syntax.css';
import MonacoEditor, {
  EditorProps,
  OnChange,
  OnMount,
} from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import codeShift from 'jscodeshift';
import Highlighter from 'monaco-jsx-highlighter';
import { useRef } from 'react';

const CodeEditor: React.FC<EditorProps> = ({ defaultValue }) => {
  const editorRef = useRef<any>();
  const onEditorDidMount: OnMount = editor => {
    editorRef.current = editor;
    editor.getModel()?.updateOptions({ tabSize: 2 });

    const highlighter = new Highlighter(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.monaco,
      codeShift,
      editor,
    );
    highlighter.highLightOnDidChangeModelContent(
      () => {},
      () => {},
      undefined,
      () => {},
    );
  };

  const handleEditorChange: OnChange = (value, event) => {
    console.log('here is the current model value:', value, event);
  };

  const prettierFormat = () => {
    // Get current value from editor
    const unformatted = editorRef.current.getModel().getValue();
    // Format the value
    const formatted = prettier
      .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');
    // Set the formated value back to the editor
    editorRef.current.setValue(formatted);
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        onClick={prettierFormat}
      >
        Format
      </button>
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
    </div>
  );
};

export default CodeEditor;
