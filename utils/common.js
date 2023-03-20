export const limitTxt = (txt,number) => {
    return txt.toString().slice(0,number)
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

export const linkBreak = (txt,splitChar="[BR]")=>{
    return txt?.split(splitChar).map(function (text, index) {
        return <p key={index}>{ text }</p>; 
    });
}

