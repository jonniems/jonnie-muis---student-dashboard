const sorter = (param, state) => {

    const sortDown = (itemA, itemB) => {
        if (itemA < itemB) {
            return -1;
        }
        if (itemA > itemB) {
            return 1;
        }
        return 0;
    };

    const sortUp = (itemA, itemB) => {
        if (itemA > itemB) {
            return -1;
        }
        if (itemA < itemB) {
            return 1;
        }
        return 0;
    };

    const sortedObjects = [];

    state.labels.forEach(label => {
        const index = state.labels.indexOf(label);
        const obj = {
            label,
            diffiScore: state.diffiScore[index],
            satisScore: state.satisScore[index]
        };
        sortedObjects.push(obj);
    });
    
    sortedObjects.sort((a, b) => {
        const itemA = a[param];
        const itemB = b[param];
        if (state.sortDirection) {
            return sortDown(itemA, itemB);
        } else {
            return sortUp(itemA, itemB);
        }
    });

    const sortedLabels = [];
    const sortedDiffScores = [];
    const sortedSatScores = [];

    sortedObjects.forEach(obj => {
        sortedLabels.push(obj.label);
        sortedDiffScores.push(obj.diffiScore);
        sortedSatScores.push(obj.satisScore)
    });

    return {
        labels: sortedLabels,
        diffiScore: sortedDiffScores,
        satisScore: sortedSatScores,
        sortDirection: !state.sortDirection
    };
};

export default sorter;
