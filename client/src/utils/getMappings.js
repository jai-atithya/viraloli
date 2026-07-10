import mappings from "./keyMappings";

const getMappings = (sentence) => {
    const units = [];
    let cur = "";
    for (const ch of sentence) {
        if (mappings[cur + ch]) {
            cur += ch;
        } else {
            if (cur) {
                units.push({
                    text: cur,
                    keys: mappings[cur][0]
                });
            }
            cur = ch;
        }
    }
    // Last unit
    if (cur) {
        units.push({
            text: cur,
            keys: mappings[cur][0]
        });
    }
    return {
        sentence: sentence,
        units: units
    };
};

export { getMappings };