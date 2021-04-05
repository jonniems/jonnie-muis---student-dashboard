const getStudentRatings = (database, assignmentTitle, metric) => {
    const ratings = [];
    database.forEach(student => {
        if (student.isActive) {
            const assignment = student.scores.find(ass => ass.title === assignmentTitle);
            const metricScore = assignment[metric];
            ratings.push(metricScore);
        } else {
            ratings.push('');
        }
    });
    return ratings;
}

export default getStudentRatings;