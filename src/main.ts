type ButtonSize = 'small' | 'medium' | 'large';

function getButtonStyle(size: ButtonSize) {
  switch (size) {
    case 'small':
      return { fontSize: '10px', padding: '5px' };
    case 'medium':
      return { fontSize: '14px', padding: '10px' };
    case 'large':
      return { fontSize: '18px', padding: '15px' };
    default:
      return { fontSize: '14px', padding: '10px' };
  }
}

// let myButtonStyle = getButtonStyle('medium');
let myButtonStyle = getButtonStyle('small')// OK
console.log(myButtonStyle);
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.

export {};
