import json5 from 'json5';

export default (json5String: string): boolean => {
  try{
    json5.stringify(json5.parse(json5String), undefined, 2);
  } catch{
    return false;
  }
  return true;
};