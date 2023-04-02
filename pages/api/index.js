import axios from "axios";
const https = require('https');
//import getConfig from "next/config";
const BASE_URL ="https://implapi.ifadgroup.com";
// const BASE_URL ="http://implapi.ifadgroup.com:8000";


//const { serverRuntimeConfig,publicRuntimeConfig } = getConfig()
//const BASE_URL = serverRuntimeConfig.API_BASE_URL;

// export const getProductListUsingAuth = async ()=> {
    // Using Authorization Header
    //     let EndPoint=`${BASE_URL}/products`;
    //     return axios({
    //         method: "get",
    //         url: EndPoint,
    //         headers: {
    //           Authorization: `Bearer ${process.env.TOKEN}`,
    //         },
    //       }).then((res)=>{
    //         if(res.status===200){
    //             return res.data;
    //         }
    //         else{
    //             return false;
    //         }
    //         }).catch((err)=>{
    //             console.log(err);
    //             return false;
    //     });
// }


export const getProductList = async ()=> {
    let EndPoint=`${BASE_URL}/products`;
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false, 
    })
    return axios.get(EndPoint,{ httpsAgent }).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

export const getProductDetails = async (id)=> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false, 
    })
    let EndPoint=`${BASE_URL}/products/${id}`;
    return axios.get(EndPoint,{httpsAgent}).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

export const getCatagoryList = async ()=> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false, 
    })
    let EndPoint=`${BASE_URL}/categories_with_subcategory`;
    return axios.get(EndPoint,{httpsAgent}).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

export const getcotentModule = async (mId)=> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false, 
    })
    let EndPoint=`${BASE_URL}/content-module/${mId}`;
    return axios.get(EndPoint,{httpsAgent}).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

export const getBlog = async ()=> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false, 
    })
    let EndPoint=`${BASE_URL}/blogs`;
    return axios.get(EndPoint,{httpsAgent}).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

export const getBlogDetails = async (id)=> {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false, 
    })
    let EndPoint=`${BASE_URL}/blogs/${id}`;
    return axios.get(EndPoint,{httpsAgent}).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

export const getMailDepartments = async ()=> {
    let EndPoint=`${BASE_URL}/mail-departments`;
    return axios.get(EndPoint).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

export const getDocuments = async ()=> {
    let EndPoint=`${BASE_URL}/documents`;
    return axios.get(EndPoint).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

export const getAddress = async ()=> {
    let EndPoint=`${BASE_URL}/contacts`;
    return axios.get(EndPoint).then((res)=>{
        if(res.status===200){
            return res.data;
        }
        else{
            return false;
        }
        }).catch((err)=>{
            console.log(err);
            return false;
    });
}

/*============== Contact form ================*/ 
export const sendContact = async(postData)=>{
    // let EndPoint=`https://reqres.in/api/users`;
    let EndPoint=`${BASE_URL}/send-email`;
    const {DptName,FullName,Subject,Email, ContactNum,Massage} = postData
    let PostBody={
        DptName,
        FullName,
        Subject,
        Email,
        ContactNum,
        Massage
    }
    const headers = {
		'Accept': 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        crossDomain: true
    };
   return axios.post(EndPoint,PostBody,headers).then((res)=>{
    console.log(res)
        if(res.status===200){
           return true;
        }
        else{
           return  false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    });
}

