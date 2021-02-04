import React, { useEffect, useState } from 'react';
import { ICodeCellProps } from '../interfaces';
import CodeEditor from './CodeEditor';
import Preview from './Preview';
import bundle from '../bundler';
import Resizable from './Resizable';
import { useActions } from '../hooks/useActions';

const CodeCell: React.FC<ICodeCellProps> = ({ cell }): JSX.Element => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const { updateCell } = useActions();

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setError(output.error);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={value => updateCell(cell.id, value)}
          />
        </Resizable>

        <Preview code={code} error={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
