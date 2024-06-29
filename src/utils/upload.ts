import { uploadPoliciesAssets } from 'user-attachments';
import type { PoliciesAsset } from 'user-attachments';
import { enhanceFetch } from './fetch';

export default async (file: File): Promise<PoliciesAsset> => {
  return await uploadPoliciesAssets({
    file: file,
    url: 'https://github.com/Adpro-Team/GKD_sub_share/issues/1',
    fetch: enhanceFetch,
  });
};