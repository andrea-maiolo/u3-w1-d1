const ButtonComponent = function (props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.textBtn}
    </button>
  );
};

export default ButtonComponent;
