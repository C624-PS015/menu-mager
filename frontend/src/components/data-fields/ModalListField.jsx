import PropTypes from 'prop-types';

export function ModalListField({ label, data, valueKey }) {
  return (
    <div className="flex flex-col align-start align-start gap-1">
      <p className="font-semibold text-md lg:text-lg capitalize">{label}</p>
      <ul className="list-decimal list-inside">
        {data?.map((item) => (
          <li
            key={item.id}
            className="text-xs lg:text-md capitalize"
          >
            {item[valueKey]}
          </li>
        ))}
        {data?.length === 0 && <li className="text-xs lg:text-md">No Recipe available</li>}
      </ul>
    </div>
  );
}

ModalListField.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
  valueKey: PropTypes.string,
};
