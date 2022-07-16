declare module productModel {

    export interface Datum {
        id: number;
        name: string;
    }

    export interface RootObject {
        pageSize: number;
        current: number;
        total: number;
        data: Datum[];
    }

}

