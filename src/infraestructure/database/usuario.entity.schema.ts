import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    usuarioID: number;

    @Column( {unique: true, nullable: false, type: 'varchar', length: 30} )
    usuarioUsuario: string;

    @Column({ nullable: false, type: 'date' })
    usuarioFechaNacimiento: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    usuarioFechaCreacion: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    usuarioFechaActualizacion: Date;

}