const getAverage = (numbersArray) => {
    const filteredArr = numbersArray.filter(score => score !== '');
    if (filteredArr.length !== 0) {
        const total = filteredArr.reduce((acc, val) => acc + val);
        const average = total / filteredArr.length;
        return Math.floor(average * 100) / 100;
    }
};

export default getAverage;