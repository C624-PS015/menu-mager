import PropTypes from 'prop-types';
import { ModalDataField } from '../data-fields';
import { BaseModal } from './BaseModal';

export function RecipeDetailModal({ id, data }) {
  const formattedData = data
    ? Object.entries(data)
        .filter(([key]) => key !== 'avatar')
        .map(([key, value]) => value)
    : [];
  return (
    <BaseModal
      id={id}
      title="Recipe Information"
    >
      {data ? (
        <div className="grid grid-cols-[1fr,2fr] gap-10 overflow-hidden">
          <div className="flex flex-col items-center gap-4">
            <div className="avatar">
              <div className="w-2/3 rounded-full mx-auto">
                <img
                  src={data.avatar.value || 'https://i.pravatar.cc/300'}
                  alt="User"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{data.name.value}</h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[45vh]">
            {formattedData.map((field, index) => (
              <ModalDataField
                key={index}
                label={field.label}
                value={field.value}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </BaseModal>
  );
}

RecipeDetailModal.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object,
};
