import { assert } from "vitest";
import { Question } from "../question/question";
import { uuid, type UUID } from "../utils/uuid";
import { DefaultQuizValidationPolicy, type QuizValidationParams, type QuizValidationPolicy } from "./quizValidationPolicy";
import { SaveService, type SaveStrategy } from "../service/saveService";


export interface QuizParam {
  title: string
  description: string
  questions: Question[]
}

export interface QuizConfig {
  validation?: QuizValidationPolicy,
  minNumberOfQuestions?: number,
  maxNumberOfQuestions?: number,
}

interface QuizSaveStorage<T> {
  storage: SaveStrategy<T>
}



export class Quiz {

  public id: UUID
  public title: string
  public description: string
  public questions: Question[]

  public currentQuestionIndex: number = 0;

  private validation: QuizValidationPolicy
  private storage: SaveStrategy<Quiz>;
  private storageKey = 'quiz-storage-key'


  private defaultConfig: QuizConfig & QuizSaveStorage<Quiz> = {
    minNumberOfQuestions: 1,
    maxNumberOfQuestions: 5,
    validation: new DefaultQuizValidationPolicy(),
    storage: new SaveService(this.storageKey),
  }

  constructor(param: QuizParam, config?: QuizConfig & QuizSaveStorage<Quiz>) {

    assert(this.defaultConfig.validation)
    assert(this.defaultConfig.minNumberOfQuestions)
    assert(this.defaultConfig.maxNumberOfQuestions)
    assert(this.defaultConfig.storage)

    this.validation = config?.validation || this.defaultConfig.validation
    this.storage = config?.storage || this.defaultConfig.storage

    const { title, description, questions } = param

    const validationParams: QuizValidationParams = {
      max: config?.maxNumberOfQuestions || this.defaultConfig.maxNumberOfQuestions,
      min: config?.minNumberOfQuestions || this.defaultConfig.minNumberOfQuestions,
      questions
    }

    const { message, error } = this.validation.validate(validationParams)

    if (error) {
      throw new Error(message)
    }

    this.id = uuid()
    this.title = title
    this.description = description
    this.questions = questions
    this.saveState()
  }


  public get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex]
  }

  public goToNextQuestion() {
    this.currentQuestionIndex += 1
    this.saveState()
  }

  public toString(): string {
    return JSON.stringify(this)
  }

  private saveState() {
    this.storage.save(this)
  }

}
