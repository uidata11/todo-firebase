export interface TodoProps {
    id: number;
    text: string;
  }
  
  export interface TodoFormProps {
    onAddTodo: (text: string) => void;
  }
  
  export interface TodoItemProps {
    id: number;
    text: string;
    onDelete: (id: number) => void;
    num: number;
  }
  