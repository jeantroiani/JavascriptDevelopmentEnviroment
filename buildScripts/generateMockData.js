import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';
import { schema } from './mockDataSchema';

/* eslint-disable no-console */

const mockedData = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', mockedData, (err) => {
    if (err) {
        return console.log(chalk.red(err));
    }
    console.log(chalk.green('Mock data generated.'));
});