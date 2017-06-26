export class DbCache {
    getTables(dbName: string) {
        return [
            {
                type: "table",
                name: dbName + "t1"
            },
            {
                type: "table",
                name: dbName + "t2"
            },
            {
                type: "table",
                name: dbName + "t3"
            }
        ]
    }

    getDbs() {
        return [
            {
                type: "db",
                name: "d1"
            },
            {
                type: "db",
                name: "d2"
            }
        ]
    }
}