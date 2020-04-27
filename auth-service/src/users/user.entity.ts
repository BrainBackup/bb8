import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Users {

    @PrimaryGeneratedColumn('increment') id: number;
    @ApiProperty() @Column({ length: 25 }) fullName : string;
    @ApiProperty() @Column() email: string;
    @ApiProperty() @Column() salt: string;
    @ApiProperty() @Column() password: string;
    @ApiProperty() @Column() createdAt : Date;
    @ApiProperty() @Column() confirmationToken : string;
    @ApiProperty() @Column() isVerified : boolean;
    @ApiProperty() @Column() isAdmin : boolean;
    @ApiProperty() @Column() isActive : boolean;
}
