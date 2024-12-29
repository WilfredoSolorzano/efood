class Pratos {
  description: string
  image: string
  infos: string[]
  nota: string
  title: string
  id: number

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    nota: string,
    title: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.nota = nota
    this.title = title
  }
}

export default Pratos
