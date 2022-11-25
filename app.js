// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuZgq1PGmzBOtP6y5__yDgFCnzKYxyjOA",
  authDomain: "quiz-application-56924.firebaseapp.com",
  databaseURL: "https://quiz-application-56924-default-rtdb.firebaseio.com",
  projectId: "quiz-application-56924",
  storageBucket: "quiz-application-56924.appspot.com",
  messagingSenderId: "864467289117",
  appId: "1:864467289117:web:549e9275aed574ceeab2f4",
  measurementId: "G-8LFCWEEVQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function loadQuiz() {
    const quizContainer = document.querySelector('#quiz-container');
    const questions = getQuestions();
    questions.forEach((question, index) => {
      quizContainer.append(questionElement(question, index));
    });
  }
  
  function loadQuiz() {
    const quizContainer = document.querySelector('#quiz-container');
    const questions = getQuestions();
    questions.forEach((question, index) => {
      quizContainer.append(questionElement(question, index));
    });
  }
  
  function questionElement(questionItem, questionIndex) {
    const div = document.createElement('div');
    div.classList.add('p-3', 'm-3', 'card');
  
    const h3 = document.createElement('h3');
    h3.innerText = questionItem.question;
  
    div.append(h3);
  
    questionItem.options.forEach((option, optionIndex) => {
      const optionItem = optionElement(option, questionIndex);
      const answerTextLabel = optionItem.querySelector('label');
  
      answerTextLabel.addEventListener('click', () => {
        if (optionIndex === questionItem.answerIndex) {
          div.classList.remove('bg-danger');
          div.classList.add('bg-success', 'text-light');
        } else {
          div.classList.remove('bg-success');
          div.classList.add('bg-danger', 'text-light');
        }
      });
  
      div.append(optionItem);
    });
  
    return div;
  }
  
  function optionElement(option, questionIndex) {
    const div = document.createElement('div');
    div.insertAdjacentHTML(
      'afterbegin',
      `<label>
        <input type='radio' name='question_${questionIndex}' />
        ${option}
      </label>
    `
    );
  
    return div;
  }
  
  function getQuestions() {
    return [
      {
        question: 'Js Stands For ___?',
        options: ['javastyle', 'javascript', 'script', 'Script Src'],
        answerIndex: 1,
      },
      {
        question: 'Html Stands For ___',
        options: ['Hyper Text Makeup Language', 'html', 'Case Cading Style Sheet', 'Hypertext markup language'],
        answerIndex: 3,
      },
      {
        question: 'Css Stands For ___',
        options: ['Casecading Style Sheet', 'Java', 'Ram','Hypertext markup language'],
        answerIndex: 0,
      },
      {
        question: 'Dom Stands For ___',
        options: ['Document Object Model' ,'html', 'Css', 'Java'],
        answerIndex: 0,
      },
      {
        question: 'Ram Stands For ___',
        options: ['Read Only Memory', 'Dom','Random Acccess Memory', 'For Pc'],
        answerIndex: 2,
      },
      {
        question: 'Rom Stands For ___',
        options: ['Hyper Text Markup Language', 'html','HTml', 'Read Only Memory'],
        answerIndex: 3,
      },
    ];
  }