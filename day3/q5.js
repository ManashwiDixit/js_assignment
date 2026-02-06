function createTracker() {
  let invocationCount = 0;
  let instanceCount = 0;

  function TrackedFunction() {
    invocationCount++;
  }

  instanceCount++;

  return {
    invoke() {
      TrackedFunction();
    },
    getCounts() {
      return {
        invocations: invocationCount,
        instances: instanceCount
      };
    }
  };
}
const tracker1 = createTracker();
tracker1.invoke();
tracker1.invoke();

const tracker2 = createTracker();
tracker2.invoke();

console.log(tracker1.getCounts()); 
console.log(tracker2.getCounts());
