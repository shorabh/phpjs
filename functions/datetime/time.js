function time () {
    // http://kevin.vanzonneveld.net
    // +   original by: GeekFG (http://geekfg.blogspot.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: metjay
    // *     example 1: timeStamp = time();
    // *     results 1: timeStamp > 1000000000 && timeStamp < 2000000000
    
    return Math.round(new Date().getTime()/1000);
}