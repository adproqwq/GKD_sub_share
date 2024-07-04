import upload from './upload';
import link from './link';
import json5 from 'json5';

export default async () => {
  let policiesAsset;
  try{
    policiesAsset = await upload(
      new File(
        [new Blob([JSON.stringify(json5.parse((document.getElementById('gkd-sub') as HTMLTextAreaElement).value))])],
        'sub.json'
      )
    );
  } catch{
    alert('上传失败。请确认已正确安装油猴脚本并已向本网站注入GM_XHR。');
    return;
  }
  link(policiesAsset);
};