let Cypher = {
    cypher: function (text) {
        return text.replace(/a/ig, '4')
            .replace(/e/ig, '3')
            .replace(/i/ig, '1')
            .replace(/o/ig, '0');
    }
};

export default Cypher;
