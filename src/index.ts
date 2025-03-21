type Event = {};

type SendFn = (e: Event) => {};

type Workflow = {};

type EventData = {};

type Step = {};

type WorkflowInput = {
  e: EventData;
  s: Step;
};

type CreateWorkFlowFn = (input: WorkflowInput) => Workflow;

type Durable = {
  send: SendFn;
  createWorkFlow: CreateWorkFlowFn;
};

const durable = () => {};

const createWorkFlow = (input: WorkflowInput): Workflow => {
  return {} satisfies Workflow;
};

export default {
  durable,
};
