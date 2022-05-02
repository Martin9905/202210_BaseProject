export class Cafe {
  id: number;
  nombre: string;
  tipo: string;
  region: string;

  public constructor(id: number, nombre: string, tipo: string, region: string) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
  }

}
