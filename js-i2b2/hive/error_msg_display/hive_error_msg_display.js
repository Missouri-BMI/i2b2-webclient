$('.toast').toast();

i2b2.hive.errorMsgDisplay = {
    show: (msg) => {
        if(msg.msgRecv.msg?.length > 0){
            try {
                const parsedMsg = i2b2.h.parseXml(msg.msgRecv.msg);
                const statusElems = parsedMsg.getElementsByTagName('status');
                for(let s=0;s<statusElems.length;s++){
                    const GLOBAL_ERROR_MESSAGE_PARAM_NAME = "Global Error Message";

                    if(i2b2.h.checkXmlResponseForErrors(msg.msgRecv.msg)){

                        if(i2b2.hive.model.globalParams[GLOBAL_ERROR_MESSAGE_PARAM_NAME]
                            && i2b2.hive.model.globalParams[GLOBAL_ERROR_MESSAGE_PARAM_NAME].attributes["status"]
                        ){
                            $(".toast-body")[0].innerHTML = i2b2.h.Unescape(
                                i2b2.hive.model.globalParams[GLOBAL_ERROR_MESSAGE_PARAM_NAME].innerHTML);
                        }

                        let i2b2Url = window.location;
                        i2b2Url = i2b2Url.length > 31 ? i2b2Url.slice(0, 30) + "..." : i2b2Url;

                        $(".toast-header .header-title").text("[" + i2b2Url + "] says: ");
                        $(".toast-time").text(msg.msgRecv.when);
                        $('.toast').toast('show');
                    }
                }
            }catch(e){
                console.error("Error parsing i2b2 response for errors. ", e);
            }
        }
    }
}