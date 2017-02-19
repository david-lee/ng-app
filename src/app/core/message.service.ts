import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {

  public topics: any = {};

  subscribe(topic: string, listener: (message: any) => void) {
    var index: number;
    var listeners = this.topics[topic];

    if (!listeners) {
      // console.log('No subscribed listener');
      this.topics[topic] = listeners = [];
    }

    index = listeners.push(listener) - 1;
    // console.log('subscribe for ', topic, ' at ', index);

    return {
      // unsubscribe a specific listener from the topics
      unsubscribe: (): void => {
        listeners.splice(index, 1);
        // console.log('unsubscribe for ', topic, ' at ', index);
      }
    };
  }

  // unsubscribe all listeners which belong to the topic
  unsubscribe(topic: string): void {
    if (this.topics[topic]) {
      this.topics[topic] = [];
      delete this.topics[topic];
      // console.log('unsubscribe for ', topic);
    }
  }

  publish(topic: string, message?: any): void {
    var listeners: Array<any> = this.topics[topic];

    if (listeners) {
      listeners.forEach(listener => listener(message, topic));
      // for (i = 0; i < listeners.length; i++) {
      //   // console.log('publish for ', topic);
      //   listeners[i](message, topic);
      // }
    } else {
      // TODO use CustomError handler
      console.log('No listener for ', topic);
    }
  }

}
