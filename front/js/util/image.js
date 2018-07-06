export function getAttrFromString(str, node, attr) {
  const regex = new RegExp('<' + node + ' .*?' + attr + '="(.*?)"', "gi");
  const res = [];
  let result;
  while ((result = regex.exec(str))) {
    res.push(result[1]);
  }
  return res;
}
