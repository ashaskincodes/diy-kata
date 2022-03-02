const booleanToWord = boolean => {
    if (boolean) {
        return 'Yes';
    }
    if (!boolean) {
        return 'No';
    }
};

module.exports = booleanToWord;
