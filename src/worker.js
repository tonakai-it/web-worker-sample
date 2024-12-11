self.addEventListener("message", async (event) => {
	switch (event.data.type) {
    case "loaded":
      console.log(`Hellow, ${event.data.loadText}!`);
      self.postMessage({
        type: 'workerLoadResponse',
      });
      break;
    case "calculationStart":
      await new Promise(resolve => setTimeout(resolve, 2000));
      self.postMessage({
        type: 'finishedCalculation',
        calcResult: Math.random().toString()
      });
      break;
    default:
      console.error(`Unknown message '${event.data.type}'.`);
  }
});