class Stack {

    constructor() {
        this.items = []; 
        this.count = 0; 
    }

    push(element) {
        this.items[this.count] = element;
        this.count += 1; 
        console.log(`${element} count  ${this.count}`) 
        return this.count - 1; 
    }
    
    print() {
        let str = '';
        for(let i=0;i<this.count;i++) {
            str += this.items[i] + ' ';
        }

        return str; 
    }

}

export default Stack;