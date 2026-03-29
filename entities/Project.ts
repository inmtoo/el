export class Project {

    id: number;
    title: string;
    text: string = "";
    image: string;
    link?: string;

    static createFromWP(obj: any): Project {
        const project = new Project(
            obj.id,
            obj.title.rendered,
            obj._embedded?.["wp:featuredmedia"]?.[0]?.source_url || ""
        );
        if (obj.slug) {
            project.link = `/portfolio/${obj.slug}`;
        }
        return project;
    }

    constructor(id: number, title: string, image: string) {
        this.id = id;
        this.title = title;
        this.image = image;
    }

}