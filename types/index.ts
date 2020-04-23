export interface Question {
    q?: string;
    a?: string;
    date: Date;
}

export function mlqa(q: Question) : number {
    return 9;
}
