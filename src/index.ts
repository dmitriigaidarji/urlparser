function parsePart(key: string, value: string, result: IReturnType) {
  const decoded = decodeURIComponent(value);
  try {
    result[key] = JSON.parse(decoded)
  } catch (e) {
    result[key] = decoded
  }
}

interface IReturnType {
  [key: string]: string | Array<string | number | object>
}

export function parseURLParams(inputStr: string) {
  console.log('input', inputStr);
  const result: IReturnType = {};
  const strLength = inputStr.length;
  if (strLength === 0) {
    return result
  }
  try {
    return JSON.parse(inputStr)
  } catch (e) {

  }
  const eqSignIndex = inputStr.indexOf('=');
  if (eqSignIndex !== -1) {
    const splitSignIndex = inputStr.indexOf('&', eqSignIndex);
    if (splitSignIndex !== -1) {
      parsePart(
        inputStr.substring(0, eqSignIndex),
        inputStr.substring(eqSignIndex + 1, splitSignIndex),
        result
      );
    } else {
      parsePart(
        inputStr.substring(0, eqSignIndex),
        inputStr.substring(eqSignIndex + 1, strLength),
        result
      );
    }
  }
  console.log(result);
  return result;
}

export function parseHash(inputStr: string) {
  if (inputStr.length === 0) {
    throw new Error('Empty string was passed');
  }
  if (inputStr[0] !== '#') {
    throw new Error('String is not a valid hash. Expected it to start with #');
  }
  return parseURLParams(
    inputStr.substr(1, inputStr.length)
  )
}
