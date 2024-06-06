import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { HiEye, HiPencil, HiTrash } from 'react-icons/hi';
import { LayoutSection } from '@/layouts';
import { getPreferences, resetGetPreferencesState, selectPreferences } from '@/slices';
import { BaseTable, IconButton } from '@/components';
import { useFilterData } from '../../hooks';

export function PreferencesPage() {
  const dispatch = useDispatch();
  const { status, message, data } = useSelector(selectPreferences);
  const tableData = useFilterData(data);

  useEffect(() => {
    dispatch(getPreferences());

    return () => {
      dispatch(resetGetPreferencesState());
    };
  }, [dispatch]);

  return (
    <LayoutSection>
      <BaseTable
        heads={['No.', 'Name', 'Type', 'Action']}
        columnWidths={[null, null, null, null]}
        addButtonProps={{ show: true, text: 'Add Preference', onClick: () => {} }}
      >
        {tableData &&
          tableData.map((preference, index) => (
            <tr key={preference.id}>
              <td>{index + 1}</td>
              <td>{preference.name}</td>
              <td>{preference.type}</td>
              <td className="flex justify-center gap-1">
                <IconButton
                  label="View"
                  icon={<HiEye className="text-gray-500" />}
                />
                <IconButton
                  label="Edit"
                  icon={<HiPencil className="text-blue-500" />}
                  onClick={() => {}}
                />
                <IconButton
                  label="Delete"
                  icon={<HiTrash className="text-red-500" />}
                  onClick={() => {}}
                />
              </td>
            </tr>
          ))}
        {status === 'success' && tableData.length === 0 && (
          <tr>
            <td
              colSpan={5}
              className="text-center py-4"
            >
              No data available
            </td>
          </tr>
        )}
      </BaseTable>
    </LayoutSection>
  );
}
