export class Project {

    id: number;
    title: string;
    text: string = "";
    image: string;

    static createFromWP(obj: any): Project {
        return new Project(
           obj.id,
            obj.title.rendered,
            obj._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""
        );
    }

    constructor(id: number, title: string, image: string) {
        this.id = id;
        this.title = title;
        this.image = image;
    }

}