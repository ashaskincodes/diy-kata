const reachDestination = (distance, speed) => {
    return `I should be there in ${(Math.round((distance / speed) / 0.5) * 0.5)} hours.`;
};

module.exports = reachDestination;
