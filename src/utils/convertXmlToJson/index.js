import xml2js from "xml-js";

const convertXmlToJson = (xml) => {
    const options = { compact: true, ignoreComment: true, spaces: 4 };

    const result = xml2js.xml2json(xml, options);

    return JSON.parse(result);
}

export default convertXmlToJson