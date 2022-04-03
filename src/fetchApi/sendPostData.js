import axios from 'axios';

export const sendPostData = (url,data={},then)=>{
    axios({
        method: 'post',
        url: url,
        data: data
      }).then((res)=>{
        const res_back = JSON.parse(res);
        then(res);
      });
}
export const sendGetData = (url,data={},then)=>{
    axios({
        method: 'get',
        url: url,
        data: data
      }).then((res)=>{
        res = JSON.parse(res);
        then(res);
      });
}