import { District } from './district';

export class Province {
    id: number;
    name: string;
    districts: District[];
    country: {
        id: number;
        code: string;
        name: string;
    };
}
