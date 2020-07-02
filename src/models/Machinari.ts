export interface Machinari {
    id : Number;
    Name: string;
    Error: Boolean;
    produzione: Produzione[]
    Anomalia: Anomalia[]
    
}
export interface Produzione{
    data: Number;
    id_machina: Number;
    Buoni:Number;
    Diffetosi:Number ;

}
export interface Anomalia{
    id : Number;
    date : Number ;
    type : String;
}
