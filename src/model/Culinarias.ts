class Culinarias {
  description: string
  image: string
  infos: string[]
  title: string
  nota: string
  id: number
  detailsRoute: string
  static detailsRoute: string

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    nota: string,
    title: string,
    detailsRoute: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.nota = nota
    this.title = title
    this.detailsRoute = detailsRoute
  }
}

export default Culinarias
