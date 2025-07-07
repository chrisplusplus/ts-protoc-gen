import {assert} from "chai";
import {CasingMessage} from "../../examples/generated/proto/examplecom/casing_pb";
import {Any} from "google-protobuf/google/protobuf/any_pb";

describe("toAny", () => {
  it("should pack the message using pack()", () => {
    const msg = new CasingMessage();
    const packed = msg.pack();
    assert.instanceOf(packed, Any);
    assert.strictEqual(packed.getTypeUrl(), "type.googleapis.com/proto.examplecom.CasingMessage");
  });
});
