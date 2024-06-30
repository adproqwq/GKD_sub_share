import json5 from 'json5';

export default async (file: File) => {
  (document.getElementById('gkd-sub') as HTMLTextAreaElement).value = json5.stringify(json5.parse(await file.text()), undefined, 2);
};