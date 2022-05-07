const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);
const Logger = require('../Logger');

module.exports = async client => {
    (await pGlob(`${process.cwd()}/selects/*/*.js`)).map(async (selectMenuFile) => {
        const selectMenu = require(selectMenuFile);
        if (!selectMenu.name) return Logger.warn(`Select Menu non fonctionnel: ajouter un nom à votre menu !\nFichier -> ${selectMenuFile}`);
        client.selects.set(selectMenu.name, selectMenu);
    });
};

