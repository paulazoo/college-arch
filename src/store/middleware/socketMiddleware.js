import * as actions from '../actions/websocket';

import {} from '../actions/index';

import { WS_URL } from '../constants';

const socketMiddleware = () => {
  let socket = null;

  const onOpen = (store) => (event) => {
    const state = store.getState();
    // open ws
  };

  const onClose = (store) => () => {
    // closed ws
  };

  const onError = (store) => () => {
    store.dispatch(actions.wsDisconnected());
  };

  const onMessage = (store) => (event) => {
    const payload = JSON.parse(event.data);

    if (payload.type === 'ping') {
      // ws heart beat
      return;
    }
    if (payload.type === 'welcome') {
      return;
    }
    if (payload.type === 'confirm_subscription') {
      return;
    }

    const userId = store.getState().user.user.id;
    if (
      payload.message &&
      (payload.message.receivers === 'global' ||
        payload.message.receivers.includes(userId))
    ) {
      const state = store.getState();
      // console.log(payload.message);
      switch (payload.message.type) {
        // filtering broadcasts from websockets
        case 'testing':
          console.log('testing ws');
          break;

        default:
          break;
      }
    }
  };

  // the middleware part of this function
  return (store) => (next) => (action) => {
    // console.log(action)
    switch (action.type) {
      case 'WS_CONNECTED': {
        break;
      }

      case 'WS_CONNECT':
        if (socket !== null) {
          socket.close();
        }
        break;

      case 'WS_DISCONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;

      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
