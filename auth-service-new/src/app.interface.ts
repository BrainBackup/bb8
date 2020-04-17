export enum Status {
    UP = `UP`,
    DOWN = `DOWN`
}
export interface Service {
    name: string;
    version: string;
    status: Status;
}
export interface HealthCheck {
    status: Status;
    services: Service[]
}