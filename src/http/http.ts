import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const ResponseCode = {
  success: 200,
};

export const HttpConfig: AxiosRequestConfig = {
  baseURL: BASE_URL as string,
};

export const http = axios.create(HttpConfig);
/// 全局loading http
export const loadingHttp = axios.create(HttpConfig);

/// loading请求中http
const httpArr: Array<any> = [];


function showLoading(url: string) {
  if (httpArr.length <= 0) {
    // open global loading
  }
  httpArr.push(url);
}

function hideLoading() {
  httpArr.pop();
  if (httpArr.length <= 0) {
    // close global loading
  }
}

function dealResponse(response: AxiosResponse) {
  if (response.status != ResponseCode.success) {
    throw new Error("response status != 200");
  }
  const resdata: {
    code: number;
    data: any;
    msg: string;
  } = response.data;
  if (resdata.code != ResponseCode.success) {
    throw new Error("code != 200");
  }
  return resdata.data;
}

function dealError(error: AxiosError) {
  const response = error.response;
  throw error;
}

// 请求拦截器
http.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // 处理请求错误
    return Promise.reject(error);
  },
);

// 响应拦截器
http.interceptors.response.use(
  function (response) {
    return dealResponse(response);
  },
  function (error) {
    dealError(error);
    //  处理相应错误
  },
);

//  loadingHttp请求拦截器
loadingHttp.interceptors.request.use(
  function (config) {
    showLoading(config.url!);
    return config;
  },
  function (error) {
    // 处理请求错误
    return Promise.reject(error);
  },
);

// 响应拦截器
loadingHttp.interceptors.response.use(
  function (response) {
    hideLoading();
    return dealResponse(response);
  },
  function (error) {
    hideLoading();
    dealError(error);
  },
);
