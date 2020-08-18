import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn("uuid")
    id: string = ""

    @Column({length: 150})
    name: string

    @Column('text')
    desciption: string

    @Column('float')
    price: number
}