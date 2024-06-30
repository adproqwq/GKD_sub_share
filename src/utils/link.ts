import type { PoliciesAsset } from 'user-attachments';

export default (returnObj: PoliciesAsset) => {
  (document.getElementById('link') as HTMLParagraphElement).innerHTML = `导入链接：${window.location.origin}/share/${returnObj.id}`;
  (document.getElementById('link') as HTMLParagraphElement).style.display = 'block';
};