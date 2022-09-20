const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", function () {
    test("two items", function () {
        const dataToUpdate = { numEmployees: 100, logoUrl: 'https://www.google.com/' }
        const jsToSql = {
            numEmployees: "num_employees",
            logoUrl: "logo_url",
        }
        const result = sqlForPartialUpdate(dataToUpdate, jsToSql)
        expect(result).toEqual({
            setCols: `"num_employees"=$1, "logo_url"=$2 `,
            values: ["100", "https://www.google.com/"]
        });
    });

    test("single item", function () {
        const dataToUpdate = { firstName: "Sam" }
        const jsToSql = {}
        const result = sqlForPartialUpdate(dataToUpdate, jsToSql)
        expect(result).toEqual({
            setCols: `"first_name"=$1`,
            values: ["Sam"]
        });

    });
});

