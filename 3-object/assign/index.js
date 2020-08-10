export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  // eslint-disable-next-line no-param-reassign
  source.properties.status = 'processed';
  return Object.assign({ serialNumber: '12345' }, source);
}
