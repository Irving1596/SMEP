import { Component, OnInit } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { HelperService } from '../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../models/index';
import { CalificacionService } from 'src/app/services/calificacion.service';
import { Calftema} from 'src/app/class/calftema.class';
import { Estudcalif} from 'src/app/class/estudcalif.class';
import { Usuario} from 'src/app/class/user.class';

@Component({
  selector: 'app-quiz10',
  templateUrl: './quiz10.component.html',
  styleUrls: ['./quiz10.component.css'],
  providers: [QuizService]
})
export class Quiz10Component implements OnInit {
  bloq :boolean =false; //variable que permite que pase una sola vez por el submit
  usuarios: Usuario;
  calftemas:Calftema;
  estudcalifs:Estudcalif;
  sum:number =0;
  calif:number;
  diffs='';
  puntuacion_max:number;
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 300,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  constructor(private quizService: QuizService,private regcal: CalificacionService) {
    if (localStorage.getItem('usuarios')) {
        this.usuarios = JSON.parse(localStorage.getItem('usuarios'));
      }
  }
  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[9].id;
    this.loadQuiz(this.quizName);
  }

  loadQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'quiz';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration&& this.bloq==false||this.pager.index==this.pager.count) {
  this.bloq=true;
  this.diffs=this.ellapsedTime;
  this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    } else {
      this.onSubmit();
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'Correcta' : 'Incorrecta';
  };

  onSubmit() {
      this.diffs=this.ellapsedTime;
    this.bloq=true;
    let max;
  var hol=this.quiz.questions.map(x => { if(x.options.every(y =>y.selected === y.isAnswer)===true){
  ++this.sum;
  }
   return this.sum;
  });
  max=this.quiz.cant;
  this.puntuacion_max=max*10;
  this.calif=(this.sum/max)*5;
  if(this.calif<1){
    this.calif=1;
  }
  let now= new Date();
  this.calftemas= new Calftema( this.quiz.id, max, this.sum,this.calif);
    //this.calftemas.push(nuevaCalif);
    const cal = this.regcal.postCalif(this.calftemas).subscribe(
      (data: Calftema) => {
        console.log("data",data);
        this.estudcalifs = new Estudcalif( data.insertId, this.usuarios.id_estudiante,now);
         // this.estudcalifs.push(nuevaCalifEst);
        const calest = this.regcal.postCalifEst(this.estudcalifs).subscribe(
          (data: Estudcalif) => {
            console.log("data2",data);
      });
  });
    this.mode = 'result';
  }
  }
