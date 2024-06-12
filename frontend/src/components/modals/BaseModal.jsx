import PropTypes from 'prop-types';

export function BaseModal({ id, ref = null, title, children }) {
  return (
    <dialog
      id={id}
      ref={ref}
      className="modal"
    >
      <div className="modal-box flex flex-col p-6 max-w-lg lg:max-w-2xl rounded-md shadow-md gap-10">
        <div className="modal-header flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">✕</button>
          </form>
        </div>
        <div className="modal-body overflow-y py-4">{children}</div>
      </div>
      <form
        method="dialog"
        className="modal-backdrop"
      >
        <button>close</button>
      </form>
    </dialog>
  );
}

BaseModal.propTypes = {
  id: PropTypes.string.isRequired,
  ref: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
