import { Machine } from 'xstate';

export const trafficMachine = Machine({
  id: 'trafficMachine',
  initial: 'stopped',
  states: {
    stopped: {
      on: {
        TRANSITION: 'flowing'
      }
    },
    flowing: {
      on: {
        TRANSITION: 'stopping'
      }
    },
    stopping: {
      on: {
        TRANSITION: 'stopped'
      }
    }
  }
});
