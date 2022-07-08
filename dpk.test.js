const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it("should return partition key as it is",()=>{
    const event={
      data:"What a wonderful day",
      partitionKey: "hanan"
    }
    let result=deterministicPartitionKey(event);
    expect(result).toBe("hanan");
  });
  it("should return string version of partition key",()=>{
    const event={
      data:"what a wonderful day",
      partitionKey:123
    }
    let result=deterministicPartitionKey(event);
    expect(result).toBe(JSON.stringify(123));
  })
  it("should return hash version of partition key",()=>{
    const event={
      data:"what a wonderful day",
      partitionKey:"I am a Software Engineer currently working at GoSaas,inc as a Full Stack Developer.I have experience in application development, testing and optimization.I execl at coordinating ground up planning, programming and immplementation of core modules. I maintain strong and object orineted and software architecture fundamentals.This opportunity exictes me because of coalition diversity, international team, and remote culture. This position also matches my skillset and also provides me with opportunites for growth and learning.The three reasons of why I am the best candidate for this position are that I have a go getter attitude When I set my eye on the ball I never easily quit until I set my achieve my goalI consider myself a people's person. I can comfortable gel in within different people coming from differnet backgrounds."
    }
      let result=deterministicPartitionKey(event);
      let expectation=crypto.createHash("sha3-512").update(event.partitionKey).digest("hex");
      expect(result).toEqual(expectation);
  })
  it("should return hash version of stringfy version of event",()=>{
    let event="what a wondeful day";
    let result=deterministicPartitionKey(event);
    event=JSON.stringify(event);
    let expectation=crypto.createHash("sha3-512").update(event).digest("hex");
    expect(result).toEqual(expectation);
  })
});

