import { DataSource } from 'typeorm';

export type Context = {
    db: DataSource;
};
