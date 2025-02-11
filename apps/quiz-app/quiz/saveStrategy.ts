
export interface SaveStrategy<T> {

  save: (data: T) => void,
  load: () => T | null
  clear: () => void

}

export class SaveLocalStorage<T> implements SaveStrategy<T> {

  constructor(private key: string, private storage = localStorage) { }

  public save(data: T) {
    this.storage.setItem(this.key, this.stringify(data))
  }

  public load() {

    const data = this.storage.getItem(this.key)

    if (data) { return this.parse(data) }
    return null


  }
  public clear() { this.storage.removeItem(this.key) }


  private stringify = (content: T) => JSON.stringify(content)
  private parse = (content: string) => JSON.parse(content) as T

}
