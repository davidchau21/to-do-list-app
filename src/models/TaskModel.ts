export interface TaskModel {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    start: Date;
    end: Date;
    uids: string[];
    color?: string;
    flieUrl?: string[];
    progress?: string;
}