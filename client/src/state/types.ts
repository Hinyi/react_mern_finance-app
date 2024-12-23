export interface ExpensesByCategory{
    salaries: number;
    supplies: number;
    services: number;

}

export interface Month{
    id:string;
    month: string;

    revenue: string;
    expenses: number;
    nonOperationalExpenses: number;
    operationalExpenses: number;
}

export interface Day{
    id:string;
    date: string;

    revenue: string;
    expenses: number;
}


export interface GetKpisResponse{
    id: string;
    _id: string;
    __v: number;
    totalProfit: number;
    totalExpenses: number;
    expensesByCategory: ExpensesByCategory;
    monthlyData: Array<Month>
    dailyData: Array<Day>
}