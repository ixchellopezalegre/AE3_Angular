// Clase que guarda los atributos de un Heroe
export class Videojuego{

    /** 
    * Atributo privado que lleva el identificador único del videojuego.
    */
    private _id: number = 0;
    private _titulo: string = "";
    private _company: string = "";
    private _img: string = "";
    private _valMedia: number = 0;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get titulo(): string {
        return this._titulo;
    }
    public set titulo(value: string) {
        this._titulo = value;
    }

    public get company(): string {
        return this._company;
    }
    public set company(value: string) {
        this._company = value;
    }

    public get img(): string {
        return this._img;
    }
    public set img(value: string) {
        this._img = value;
    }

    public get valMedia(): number {
        return this._valMedia;
    }
    public set valMedia(value: number) {
        this._valMedia = value;
    }

    constructor(){

    }

    public toString() : string {
        return `ID: ${this._id}, Título: ${this.titulo}, Compañía: ${this.company}, , Valoración media: ${this.valMedia}, , Imagen: ${this.img}`
    }

}