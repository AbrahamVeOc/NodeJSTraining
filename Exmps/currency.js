function convert(amount, rate) {
  return amount * rate;
}

console.log(convert(10, 1.1));
console.log(convert(250, 0.04));
document.write(convert(250, 0.04));

//document.write doesnt works on nodejs bcs its part of the browser ecosistem xd
