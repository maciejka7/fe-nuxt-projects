import { beforeEach, describe, expect, it, vi } from "vitest";
import { Quiz, type QuizParam } from "./quiz";
import { questionMock } from "../question/questionMock";

vi.stubGlobal("localStorage", {
  getItem: vi.fn().mockReturnValue("mockValue"),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
});

const quizParam: QuizParam = {
  description: 'Simple JavaScript Quiz',
  title: "JS Quiz",
  questions: questionMock,

}

describe('quiz create object test', async () => {

  it('should quiz exists', async () => {

    const quiz = new Quiz(quizParam)
    expect(quiz).toBeTruthy()

  })

  it('should had required property', async () => {

    const quiz = new Quiz(quizParam)

    expect('id' in quiz).toBeTruthy()
    expect(quiz.id).to.not.toBeFalsy()
    expect('title' in quiz).toBeTruthy()
    expect(quiz.title).to.not.toBeFalsy()
    expect('description' in quiz).toBeTruthy()
    expect(quiz.description).to.not.toBeFalsy()
    expect('questions' in quiz).toBeTruthy()
    expect(quiz.questions).to.not.toBeFalsy()
  })

  it("should had at least one question", async () => {

    const quizParam: QuizParam = {
      description: 'Simple JavaScript Quiz',
      title: "JS Quiz",
      questions: [],
    }

    expect(() => new Quiz(quizParam)).toThrowError(/at least 1 questions required/i)

  })


  it.todo("should", async () => { })
})

describe('quiz behavior tests', async () => {

  beforeEach(() => {
    vi.resetAllMocks()
  })



  it("should be able to go to next questions", async () => {

    const quiz = new Quiz(quizParam)

    expect(quiz.currentQuestionIndex).toEqual(0)
    expect(quiz.currentQuestion.label).toMatch(/how to create a function /i)

    quiz.goToNextQuestion()

    expect(quiz.currentQuestionIndex).toEqual(1)
    expect(quiz.currentQuestion.label).toMatch(/how do you round the number/i)

  })

  it("should save quiz current state to localStorage with initial data", async () => {

    const quiz = new Quiz(quizParam)

    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(localStorage.setItem).toHaveBeenCalledWith('quiz-storage-key', JSON.stringify(quiz))

  })

  it("should quiz state save after go to next question", async () => {

    const quiz = new Quiz(quizParam)

    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(localStorage.setItem).toHaveBeenCalledWith('quiz-storage-key', JSON.stringify(quiz))

    quiz.goToNextQuestion()
    expect(localStorage.setItem).toHaveBeenCalledTimes(2)

  })
  it.todo("should restore quiz state from localstorage", async () => { })

  it.todo("should be not able to not to go to next question when its on last question", async () => { })
  it.todo("should quiz be in QUESTION state when you are swiching between questions", async () => { })
  it.todo("should be in SUMMARY state when quiz has ended", async () => { })
  it.todo("should display a summary after quiz end - complete all answers", async () => { })

  it.todo("should store quiz order in linked list", async () => { })
  it.todo("should change quiz state to next question`", async () => { })
  it.todo("should change quiz state to previous question it is possible", async () => { })
  it.todo("should can configure option to back in quiz", async () => { })

  it.todo("should can confgiure a save strategy", async () => { })


  it.todo("should quit quiz any time", async () => { })
  it.todo("should can configure if quiz should be manually ended", async () => { })
  it.todo("should save quiz state in any state change in case of unexpected quiz quit ", async () => { })

  it.todo("should can configure when summary should be display", async () => { })
  it.todo("should see summary after quiting quiz before all question are checked ", async () => { })

  it.todo("should restart state after quiz was ended", async () => { })
  it.todo("should", async () => { })
  it.todo("should", async () => { })
})








