export interface Configuracion_Base_Datos {
    getHostBaseDatos(): string;
    getPuertoBaseDatos(): number;
    getUsuarioBaseDatos(): string;
    getContraseñaBaseDatos(): string;
    getNombreBaseDatos(): string;
}