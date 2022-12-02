// Clase que guarda los atributos de un Heroe
export class Videojuego{

    /** 
    * Atributo privado que lleva el identificador único del videojuego.
    */
    private _id : number = 0;

    /*
    * Atributo contador del ID del Videojuego. Su función se asingará en el constructor
    * y se autoincrementará automáticamente por cada objeto videojuego que se cree.
    */
    private static contadorId : number = 1;

    //OJO! Al poner en el constructor los parametros de entrada, se crean automáticamente 
    //los atributos nombre y universo en la clase. Es decir, esta clase tendrá 3 atributos
    //dinamicos y 1 estatico en total.
    constructor(public titulo : string, public company : string, public valMedia : number,
        public img: string){
        this._id = Videojuego.contadorId++;
        this.titulo = titulo
        this.company = company
        this.valMedia = valMedia
        this.img = img
    }

    public get id() : number{
        return this._id;
    }

    public toString() : string {
        return `ID: ${this._id}, Título: ${this.titulo}, Compañía: ${this.company}`
    }

}