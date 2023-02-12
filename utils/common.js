export const limitTxt = (txt,number) => {
    return txt.slice(0,number)
}

export const youtube_parser = (url)=>{
    try {        
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : "qqBW78xdjyo";
    } catch (error) {
        console.log(error)
    }

}

export const isEmpty = (value)=>{
    if(value.length===0){
        return true;
    }
    else {
        return false
    }
}


// export const isYoutubeUrl = (url)=>{
//     const getUrl = url
//     const { hostname } = new URL(getUrl);
//     if(hostname === 'www.youtube.com'){
//         return true
//     }else {
//         return false
//     }
// }