export interface PointPackage {
    package_id: number;
    point: number;
    price: number;
    currency: string;
}

export interface IListPointRespone {
    point_package: PointPackage[];
    [key: string]: any;
}
  