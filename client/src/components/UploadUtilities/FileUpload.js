import axios from './AxiosWrapper';

export default function useFileUpload(key, file, uploadProgressHandler) {
  const formData = new FormData();
  formData.append(key, file);
  const axiosConfig = {
    url: 'v1/uploads',
    method: 'post',
    headers: {

    },
    data: formData,
    onUploadProgress: uploadProgressHandler,
  };
  return axios(axiosConfig);
}
