import json5 from 'json5';
import check from './check';

export default async (file: File) => {
  if(!check(await file.text())) alert('JSON解析失败');
  else (document.getElementById('gkd-sub') as HTMLTextAreaElement).value = json5.stringify(json5.parse(await file.text()), undefined, 2);
};