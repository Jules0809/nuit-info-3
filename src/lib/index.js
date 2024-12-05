// place files you want to import through the `$lib` alias in this folder.
// lib/index.js

/**
 * Fonction utilitaire pour formater une date
 * @param {Date} date
 * @returns {string} Date formatée en 'jj/mm/aaaa'
 */
function formatDate(date) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
}

/**
 * Fonction pour générer un identifiant unique
 * @returns {string} Identifiant unique
 */
function generateUniqueId() {
    return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

module.exports = {
    formatDate,
    generateUniqueId,
};
