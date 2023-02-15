const { FrequentQuestions } = require("../db");

const getFrequentAskById = async id => {
    const frequentAsk = await FrequentQuestions.findByPk(id);
    return frequentAsk;
};

const findAllFrequentQuestions = async () => {
    const frequentQuestions = await FrequentQuestions.findAll();
    return frequentQuestions;
};

const updateFrequentAskById = async (attributes, id) => {
    const frequentAskUpdated = await FrequentQuestions.update(attributes, { where: { id: id } });
    return frequentAskUpdated;
};

const deleteFrequentAskById = async id => {
    const frequentAskDeleted = await FrequentQuestions.destroy({ where: { id: id } });
    return frequentAskDeleted;
};

module.exports = {
    getFrequentAskById,
    findAllFrequentQuestions,
    updateFrequentAskById,
    deleteFrequentAskById
};