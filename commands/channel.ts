export class Channel {
        formatChannelString(ping : string, status : string) {
                const p = new Promise((resolve : any, reject : any) => {
                        if (ping != "" || ping != null) {
                                resolve(`Ping: ${ping}\nStatus: ${status}`);
                        }
                        else {
                                reject("Channel info not available");
                        }
                });
                
                return p;
        }
}