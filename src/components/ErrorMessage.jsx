const ErrorMessage = ({ message, onClose }) => (
  <div className="error">
    <p>{message}</p>
    <button onClick={onClose}>Dismiss</button>
  </div>
);

export default ErrorMessage;
