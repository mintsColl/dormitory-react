export const DOMAIN = "http://localhost";
export const PORT = "80";
export const LOGIN_API = `${DOMAIN}:${PORT}/Myphp/login`;
export const SERVICE_API = `${DOMAIN}:${PORT}/Myphp/service`;
export const FILE_API = `${DOMAIN}:${PORT}/Myphp/fileService`
// 文件下载api
export const DOWNLOAD_API = `${DOMAIN}:${PORT}/Myphp/fileService`;
// 宿管信息批量上传模板下载
export const DORADMIN_MUBAN =  `${DOWNLOAD_API}/fileDownload.php`;
