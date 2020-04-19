import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {

    @PrimaryGeneratedColumn('increment') id: number;
    @Column({ length: 25 }) fullName : string;
    @Column() email: string;
    @Column() salt: string;
    @Column() password: string;
    @Column() createdAt : Date;
    @Column() confirmationToken : string;
    @Column() isVerified : boolean;
    @Column() isAdmin : boolean;
    @Column() isActive : boolean;
}
