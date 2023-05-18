class SpecialStack {
    constructor() {
      this.MAX = 1000;
      this.top = -1;
      this.stack = new Array(this.MAX);
      this.minStack = new Array(this.MAX);
      this.minTop = -1;
    }
  
    push(val) {
      if (this.top === this.MAX - 1) {
        console.log("Stack Overflow");
        return;
      }
  
      this.top++;
      this.stack[this.top] = val;
  
      if (this.minTop === -1 || val <= this.minStack[this.minTop]) {
        this.minTop++;
        this.minStack[this.minTop] = val;
      }
    }
  
    pop() {
      if (this.top === -1) {
        console.log("Stack Underflow");
        return;
      }
  
      if (this.stack[this.top] === this.minStack[this.minTop]) {
        this.minTop--;
      }
  
      this.top--;
    }
  
    isEmpty() {
      return this.top === -1;
    }
  
    getMin() {
      if (this.minTop === -1) {
        console.log("Stack is empty");
        return;
      }
  
      return this.minStack[this.minTop];
    }
  }

  /*
  Реализовать структуру данных SpecialStack, которая поддерживает все операции со стеком, такие как push(), pop(), isEmpty(), … и дополнительную операцию getMin(), которая должна возвращать минимальный элемент из SpecialStack. 
Все эти операции SpecialStack должны быть O(1). Пространство O(n)
Чтобы реализовать SpecialStack, используйте структуру данных Stack, реализованную ранее в классе.
*/