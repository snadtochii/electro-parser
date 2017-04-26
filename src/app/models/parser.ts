export class Parser {

    parseCaseInfo(textToParse, additional): any {
        let obj = {};
        let pairs = [];
        let key, value;
        let index;
        const patterns = [/Case ID:.+\n/, /Surgery Type:\n.+\n/, /Surgeon Name:\n.+\n/, /Surgery Date:\n.+\n/];

        for (let i = 0; i < patterns.length; i++) {
            pairs[i] = patterns[i].exec(textToParse);
        }
        if (!pairs[0] || !pairs[1]) return false;//для отмены дальнейшего парсинга

        for (let i = 0; i < pairs.length; i++) {
            if (!pairs[i]) continue;
            index = pairs[i].toString().indexOf(":")
            key = pairs[i].toString().substring(0, index);
            value = pairs[i].toString().substring(index + 2, pairs[i].toString().length - 1);
            obj[key] = value;
        }
        if (obj["Surgery Date"]) {
            if (obj["Surgery Date"] == "Surgery date not defined.") {
                obj["Surgery Date"] = "TBD";
            }
            else {
                let surDate = new Date(obj["Surgery Date"]);
                let day = ((surDate.getDate() < 10) ? ("0" + surDate.getDate()) : surDate.getDate())
                let month = ((surDate.getMonth() + 1) < 10) ? ("0" + (surDate.getMonth() + 1)) : (surDate.getMonth() + 1);
                obj["Surgery Date"] = day + "/" + month;
            }
        }
        if (obj["Surgery Type"]) {
            if (obj["Surgery Type"] === "Other") {
                obj["Surgery Type"] = "Anatomical Model";
            }
            else if (obj["Surgery Type"] === "Cranial Vault Reconstruction") {
                obj["Surgery Type"] = "CVR";
            }
        }
        if (additional) {
            for (let el in additional) {
                obj[el] = additional[el];
            }
        }
        return obj;
    }
    parsePatientsInfo(textToParse) {
        let objInfo = {};
        let pairsInfo = [];
        let key, value;
        let index;
        const patternsInfo = [/First Name:\n.+\n/, /Middle Name:\n.+\n/, /Last Name:\n.+\n/, /Gender:\n.+\n/, /Birth Date:\n.+\n/];

        for (let i = 0; i < patternsInfo.length; i++) {
            pairsInfo[i] = patternsInfo[i].exec(textToParse);
        }
        if (!pairsInfo[0]) return false;//для отмены дальнейшего парсинга

        for (let i = 0; i < pairsInfo.length; i++) {
            if (!pairsInfo[i]) continue;
            index = pairsInfo[i].toString().indexOf(":")
            key = pairsInfo[i].toString().substring(0, index);
            value = pairsInfo[i].toString().substring(index + 2, pairsInfo[i].toString().length - 1);
            objInfo[key] = value;
        }
        return objInfo;
    };
}