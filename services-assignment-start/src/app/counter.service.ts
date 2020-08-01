export class CounterService {
    activeToInactiveCounter = 0;
    inActiveToActiveCounter = 0;

    incrementActivetoInactive() {
        this.activeToInactiveCounter++;
        console.log('Active to Inactive: ' + this.activeToInactiveCounter);
    }

    incrementInactivetoActive() {
        this.inActiveToActiveCounter++;
        console.log('Inactive to Active: ' + this.inActiveToActiveCounter);
    }
}
