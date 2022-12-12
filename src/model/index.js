export { Message }

class Message{
    constructor(order, id, text, didISent) {
        this.order = order;
        this.id = id;
        this.text = text;
        this.didISent = didISent;
        this.date = "";
        this.dateNum = 0;
    }

    static getDateString() {
        let dayTime = new Date();

        let year = dayTime.getFullYear();
        let month = dayTime.getMonth() + 1;
        let date = dayTime.getDate();
        let hours = dayTime.getHours();
        let minutes = dayTime.getMinutes();
        // let seconds = dayTime.getSeconds();

        let dateString = `${year}/${month}/${date}/ ${hours}:${minutes}`;
        // :${seconds}

        return dateString;
    }
}
