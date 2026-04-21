$('.toast').toast();

i2b2.hive.errorMsgDisplay = {
    show: (msg) => {
        if(msg.msgRecv.msg?.length > 0){
            try {
                const parsedMsg = i2b2.h.parseXml(msg.msgRecv.msg);
                const statusElems = parsedMsg.getElementsByTagName('status');
                for(let s=0;s<statusElems.length;s++){
                    const status = statusElems[s];
                    const condition = i2b2.h.XPath(status, 'descendant::condition');

                    if((status.attributes['type'] && status.attributes['type'].nodeValue.toUpperCase() === "ERROR")
                       || (condition.length > 0 && condition[0].attributes['type']
                            && condition[0].attributes['type'].nodeValue.toUpperCase() === "ERROR")){
                        $('.toast').toast('hide');
                        $(".toast-time").text(msg.msgRecv.when);
                        $('.toast').toast('show');
                    }
                }
            }catch(e){
                console.error("Error parsing i2b2 response for errors.");
            }
        }
    }
}