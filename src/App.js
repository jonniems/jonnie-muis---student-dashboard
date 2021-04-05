/* -------------- Fetches Data and sets state for Charts -------------- */
import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from './components/pages/Dashboard';
import getStudentRatings from './functions/getStudentRatings';
import getAverage from './functions/getAverage';
import { setDatabase, setStudents, setChartData, setAssignmentChartData } from './actions';
import resultsData from './databases/resultsData'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    const getData = () => {

      const results = resultsData;

      const studentNames = [];
      const tempStudentNames = [];
      for (let i = 0; i < results.length; i++) {
        if (tempStudentNames[results[i].firstName]) continue;
        tempStudentNames[results[i].firstName] = true;
        studentNames.push(results[i].firstName);
      }

      const assigmentTitles = [];
      const tempArray = [];
      for (let i = 0; i < results.length; i++) {
        if (tempArray[results[i].assignment]) continue;
        tempArray[results[i].assignment] = true;
        assigmentTitles.push(results[i].assignment);
      }

      //declare and initialise empty arrays to hold data info
      const database = [];

      //get columns by splitting row values by comma
      results.forEach(student => {
        const studentName = student.firstName;
        const assignmentTitle = student.assignment;
        const difficultyScore = parseInt(student.difficultyRate);
        const satisfactionScore = parseInt(student.funRate);
        const studentObj = {
          name: studentName, //bijv: Evelyn
          isActive: true, //student checkbox is checked
          scores: [{ //array of opdrachten and scores
            title: assignmentTitle, //bijv: SCRUM
            diffiScore: difficultyScore, //bijv: 2
            satisScore: satisfactionScore //bijv: 3
          }],
          id: database.length + 1 //set student id 
        };

        //if database already includes studentObject
        if (database.find(student => student.name === studentName)) {
          //find student object
          const foundStudent = database.find(student => student.name === studentName);

          //make copy of student project scores 
          const scoresCopy = foundStudent.scores;

          //add new opdracht object to students opdrachtenLijst
          const newAssignment = { title: assignmentTitle, diffiScore: difficultyScore, satisScore: satisfactionScore };
          foundStudent.scores = [...scoresCopy, newAssignment];

        } else {
          //if database doesn't include student yet, add student
          database.push(studentObj);
        }

        //make array of studentNames for Nav bar
        if (!studentNames.includes(studentName)) {
          studentNames.push(studentName);
        }

        //make array of opdracht titles for chart labels
        if (!assigmentTitles.includes(assignmentTitle)) {
          assigmentTitles.push(assignmentTitle);
        }
      });

      //create initial chartData object with available data
      const chartData = { labels: assigmentTitles };
      const metrics = ['diffiScore', 'satisScore'];

      metrics.forEach(metric => {
        //will hold average difficultyScores | satisfactionScores for each opdracht 
        const scoresArray = [];

        //get average difficultyScore | satisfactionScore for each opdracht
        assigmentTitles.forEach(assignment => {
          //get all studentRatings for the opdracht, then get average of studentRatings
          const averageScore = getAverage(getStudentRatings(database, assignment, metric));
          scoresArray.push(averageScore);
        });

        //bijv: chartData.difficultyScores = [2, 2, 5, 3]
        chartData[metric] = scoresArray;
      });
      //send data to reducers and set state(s)
      dispatch(setDatabase(database)); //database of all students and projectScores
      dispatch(setChartData(chartData)); //labels and data for charts
      // dispatch(setStudents(studentNames)); //array of studentnames for Nav
      dispatch(setAssignmentChartData({ labels: studentNames })); //labels for opdrachtCharts 

    }

    //call getData function
    getData();

    //leave dependency array empty, so useEffect only runs once
  }, []);

  return (
    <Dashboard />
  );
}

export default App;