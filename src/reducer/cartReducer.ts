export interface item {
    id: number;
    image?: string;
    title?:string;
}

interface addTask{
    type: 'ADD'
    item: item
}

interface deleteTask{
    type: 'DELETE'
    itemId: number
}

export type TaskAction = addTask | deleteTask;

const cartReducer = (items:item[], action:TaskAction): item[] => {
    switch(action.type){
        case "ADD":
            return [action.item, ...items];
        case "DELETE":
            return items.filter(t => t.id !== action.itemId);
    }
}

export default cartReducer;