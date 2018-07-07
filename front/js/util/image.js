/* eslint-disable no-constant-condition */

export function getAttrFromString(str, node, attr) {
  const regex = new RegExp(`<${node} .*?${attr}="(.*?)"`, 'gi');
  const res = [];
  let result;
  while (true) {
    result = regex.exec(str);
    if (!result) break;
    res.push(result[1]);
  }
  return res;
}
