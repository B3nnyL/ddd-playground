import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm'
import { Product } from '../product/product.entity';

@Entity()
export class Review {
    
    @PrimaryGeneratedColumn("uuid")
    id: string = ""

    @Column('int')
    rate: number

    @Column('text')
    desciption: string

    @OneToMany(type => Product, product => product.id)
    product_id: string;

}