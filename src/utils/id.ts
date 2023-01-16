import { v1, v4 } from 'uuid';

export class Generate {
    snowflake() {
        return `${Date.now()}${Math.floor(100000 + Math.random() * 900000)}`;
    }
    v1() {
        return v1().toString()
    }
    v4() {
        return v4().toString()
    }
}