import type { PoliciesAsset } from 'user-attachments';

export default (returnObj: PoliciesAsset) => {
  alert(
    `该订阅的下载链接是：https://share.adproqwq.top/share/${returnObj.id}
    该订阅的导入链接是：${returnObj.href}`
  );
};