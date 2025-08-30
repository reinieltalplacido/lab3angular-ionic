import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  
  // Student information form data
  studentInfo = {
    name: '',
    section: '',
    date: ''
  };

  // Quiz answers
  answers = {
    question1: '',
    question2: '',
    question3: ''
  };

  // Quiz state
  showResults = false;
  score = 0;

  // Correct answers
  correctAnswers = {
    question1: 'b', // International Style
    question2: 'b', // Le Corbusier
    question3: 'c'  // Functionalism
  };

  constructor() {}

  // Check if form is complete
  isFormComplete(): boolean {
    return this.studentInfo.name.trim() !== '' && 
           this.studentInfo.section.trim() !== '' && 
           this.studentInfo.date !== '' &&
           this.answers.question1 !== '' &&
           this.answers.question2 !== '' &&
           this.answers.question3 !== '';
  }

  // Submit quiz and calculate score
  submitQuiz() {
    if (!this.isFormComplete()) {
      return;
    }

    this.score = 0;
    
    // Check each answer
    if (this.answers.question1 === this.correctAnswers.question1) {
      this.score++;
    }
    if (this.answers.question2 === this.correctAnswers.question2) {
      this.score++;
    }
    if (this.answers.question3 === this.correctAnswers.question3) {
      this.score++;
    }

    this.showResults = true;
  }

  // Reset quiz to start over
  resetQuiz() {
    this.answers = {
      question1: '',
      question2: '',
      question3: ''
    };
    this.showResults = false;
    this.score = 0;
  }

  // Set today's date as default
  ngOnInit() {
    const today = new Date();
    this.studentInfo.date = today.toISOString().split('T')[0];
  }
}
