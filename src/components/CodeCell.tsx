import { ICodeCellProps } from '../interfaces';
import CodeEditor from './CodeEditor';
import Preview from './Preview';
import Resizable from './Resizable';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const CodeCell: React.FC<ICodeCellProps> = ({ cell }): JSX.Element => {
  const { updateCell } = useActions();
  const bundle = useTypedSelector(state => state.bundles[cell.id]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={value => updateCell(cell.id, value)}
          />
        </Resizable>

        <Preview code={bundle.code} error={bundle.error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
