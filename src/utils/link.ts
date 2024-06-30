import type { PoliciesAsset } from 'user-attachments';

export default (returnObj: PoliciesAsset) => {
  (document.getElementById('link') as HTMLParagraphElement)
    .innerHTML = `下载链接：https://share.adproqwq.top/share/${returnObj.id}\r导入链接：${returnObj.href}`;
  (document.getElementById('link') as HTMLParagraphElement).style.display = 'block';
};