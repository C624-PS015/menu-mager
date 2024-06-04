import PropTypes from 'prop-types';

export function FilledButton({ children, onClick, className }) {
  return (
    <button
      className={`btn btn-sm bg-accent text-white hover:bg-accent-hover ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

FilledButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
