import { Message } from "google-protobuf";
import { Any } from "google-protobuf/google/protobuf/any_pb";

declare module "google-protobuf" {
  interface Message {
    pack(typeUrlPrefix?: string): Any;
    toAny(typeUrlPrefix?: string): Any;
  }
}

(Message.prototype as any).pack = function(this: Message, typeUrlPrefix?: string): Any {
  const anyMsg = new Any();
  const ctor: any = this.constructor;
  const name: string = ctor.displayName || ctor.name;
  anyMsg.pack(this.serializeBinary(), name, typeUrlPrefix);
  return anyMsg;
};

(Message.prototype as any).toAny = function(this: Message, typeUrlPrefix?: string): Any {
  return (this as any).pack(typeUrlPrefix);
};
