import { matchesState } from './utils';
import { mapState } from './mapState';
import { StateNode } from './StateNode';
import { State } from './State';
import { Machine } from './Machine';
import {
  raise,
  send,
  sendParent,
  log,
  cancel,
  start,
  stop,
  assign,
  after,
  done,
  invoke,
  toActionObject,
  toEventObject,
  toActivityDefinition,
  toActionObjects
} from './actions';

const actions = {
  raise,
  send,
  sendParent,
  log,
  cancel,
  start,
  stop,
  assign,
  after,
  done,
  invoke,
  toActionObject,
  toEventObject,
  toActivityDefinition,
  toActionObjects
};

export { Machine, StateNode, State, matchesState, mapState, actions };

export * from './types';
