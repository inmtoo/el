export class FAQ {

    id: number;
    question: string;
    answer: string;

    static createFromWP(obj: any): FAQ {
        return new FAQ(
            obj.id,
            obj.title.rendered,
            obj.content.rendered
        );
    }

    constructor(id: number, question: string, answer: string) {
        this.id = id;
        this.question = question;
        this.answer = answer;
    }

}