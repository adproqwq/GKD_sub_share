import upload from './upload';
import link from './link';
import json5 from 'json5';

export default async () => {
  link(
    await upload(
      new File(
        [new Blob([JSON.stringify(json5.parse((document.getElementById('gkd-sub') as HTMLTextAreaElement).value))])],
        'sub.json'
      )
    )
  );
};