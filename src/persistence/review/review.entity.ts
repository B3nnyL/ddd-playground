import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Product } from '../product/product.entity';

@Entity()
export class Review {
    
    @PrimaryGeneratedColumn("uuid")
    id: string =""

    @Column('int')
    rate: number

    @Column('text')
    desciption: string

    @ManyToOne(type => Product, product => product.id, { onDelete: 'CASCADE' })
    product_id: string;

}