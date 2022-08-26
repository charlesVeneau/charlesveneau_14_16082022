function Input(type) {
  switch (type) {
    case 'text': {
      return <input type={type} />;
    }
  }
}

export default Input;
