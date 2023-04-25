export enum TokenType {
    AND, OR,
    CLASS, EXTENDS, FUNC,
    IMPORT, AS
}

export let Keywords = Object.keys(TokenType);

export enum TokenType {
    PLUS = 18, MINUS, NUL, DIV, MOD, CARET, 
    PLUSEQUAL
}

export let LSTypeArrays = ["Any"] as const; 

export type LSType = typeof LSTypeArrays[number] | LSType[];