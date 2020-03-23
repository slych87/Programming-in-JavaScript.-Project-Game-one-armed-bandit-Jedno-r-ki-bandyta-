class Statistics {
    constructor() {
        this.gameResults = [{ win: true, bid: 2 }, { win: true, bid: 2 }, { win: false, bid: -10 }];

    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult);
    }
    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;

        console.log(games, wins, losses);
        // this is how it should look like
        //return [numberOfGames, numberOfWins, numberOfLosses

    }
}

const stats = new Statistics();