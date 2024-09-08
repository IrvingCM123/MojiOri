import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { enumRol } from "src/shared/enums/rol.enum";
import { enumEstadoCuenta } from "src/shared/enums/estado-cuenta.enum";
import { UsuarioEntity } from "./usuario.entity.schema";

@Entity('cuenta')
export class CuentaEntity {

    @PrimaryGeneratedColumn()
    cuentaID: number;

    @Column()
    @OneToOne(type => UsuarioEntity, usuario => usuario.usuarioID, { eager: true})
    @JoinColumn({name: 'usuarioID'})
    usuarioID: number;

    @Column({ nullable: false, type: 'varchar', length: 30, unique: true })
    cuentaTelefono: string;

    @Column({ nullable: false, type: 'varchar', length: 255 })
    cuentaContrasena: string;

    @Column({ nullable: false, enum: enumRol, type: 'enum', default: enumRol.USUARIO })
    cuentaRol: enumRol;

    @Column({ nullable: true, type: 'bigint', default: 0 })
    cuentaNumeroActivacion: number;

    @Column({ nullable: true, type: 'bigint', default: 0 })
    cuentaCodigoRecuperacion: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    cuentaFechaRegistro: Date;

    @Column({ nullable: true, enum: enumEstadoCuenta, type: 'enum', default: enumEstadoCuenta.PENDIENTE })
    cuentaEstado: enumEstadoCuenta;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    cuentaVerificacionFecha: Date;

}