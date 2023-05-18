class DynamicArray {
    constructor() {
        this.array = [];
        this.length = 0;
    }

    // Добавление элемента в конец массива
    push(element) {
        this.array[this.length] = element;
        this.length++;
        return this.length;
    }

    // Получение элемента по индексу
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        return this.array[index];
    }

    // Удаление последнего элемента массива
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        let removedElement = this.array[this.length];
        delete this.array[this.length];
        return removedElement;
    }

    // Получение длины массива
    size() {
        return this.length;
    }

}


class DynamicArray {
    constructor(capacity = 16) {
      this.array = new Array(capacity);
      this.length = 0;
      this.capacity = capacity;
    }
  
    // Добавление элемента в конец массива
    add(data) {
      if (this.length === this.capacity) {
        this.growSize();
      }
      this.array[this.length] = data;
      this.length++;
    }
  
    // Удаление последнего элемента массива
    remove() {
      if (this.length === 0) {
        return undefined;
      }
      this.length--;
      const removedElement = this.array[this.length];
      delete this.array[this.length];
      return removedElement;
    }
  
    // Удаление элемента по индексу
    removeAt(index) {
      if (index < 0 || index >= this.length) {
        return undefined;
      }
      const removedElement = this.array[index];
      for (let i = index; i < this.length - 1; i++) {
        this.array[i] = this.array[i + 1];
      }
      delete this.array[this.length - 1];
      this.length--;
      return removedElement;
    }
  
    // Увеличение размера массива
    growSize() {
      this.capacity *= 2;
      const newArray = new Array(this.capacity);
      for (let i = 0; i < this.length; i++) {
        newArray[i] = this.array[i];
      }
      this.array = newArray;
    }
  
    // Изменение элемента по индексу
    set(index, data) {
      if (index < 0 || index >= this.length) {
        return undefined;
      }
      this.array[index] = data;
    }
  
    // Очистка массива
    clean() {
      for (let i = 0; i < this.length; i++) {
        delete this.array[i];
      }
      this.length = 0;
    }
  
    // Проверка, содержится ли элемент в массиве
    contains(data) {
      for (let i = 0; i < this.length; i++) {
        if (this.array[i] === data) {
          return true;
        }
      }
      return false;
    }
  
    // Проверка, пустой ли массив
    isEmpty() {
      return this.length === 0;
    }
  }