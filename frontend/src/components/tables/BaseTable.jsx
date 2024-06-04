import PropTypes from 'prop-types';
import { SearchBar } from '../inputs';
import { FilledButton } from '../buttons';

export function BaseTable({ heads = [], children, columnWidths = [], addButtonProps = {} }) {
  return (
    <div className="overflow-x-auto w-full shadow-lg border border-gray-200 p-4 rounded-xl lg:min-h-screen grid grid-rows-[auto,1fr] gap-4 bg-gray-50">
      <div className="table-actions">
        <div className="flex justify-between items-center mb-4">
          <SearchBar className="w-2/3 md:w-1/3" />
          {addButtonProps.show && (
            <FilledButton onClick={addButtonProps.onClick}>{addButtonProps.text}</FilledButton>
          )}
        </div>
      </div>
      <div className="overflow-y-auto max-h-[80vh] lg:max-h-full">
        <table className="table table-zebra table-sm text-center table-pin-rows max-w-full">
          <colgroup>
            {columnWidths.map((width, index) => (
              <col
                key={index}
                className={width ? `w-[${width}]` : 'w-auto'}
              />
            ))}
          </colgroup>
          <thead>
            <tr>
              {heads?.map((head, index) => (
                <th
                  key={index}
                  className="capitalize bg-accent text-white text-md py-4"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

BaseTable.propTypes = {
  heads: PropTypes.array,
  children: PropTypes.node,
  columnWidths: PropTypes.arrayOf(PropTypes.number),
  addButtonProps: PropTypes.shape({
    show: PropTypes.bool,
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
};
