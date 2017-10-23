// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated by tools/bigint-tester.py.

// Flags: --harmony-bigint

var data = [{
  a: "-4efa0d1f8a127",
  b: "-66",
  r: "-13be8347e2849c0000000000000000000000000"
}, {
  a: "853cd87b0bd5c046aecbf4b3d",
  b: "-96",
  r: "214f361ec2f57011abb2fd2cf40000000000000000000000000000000000000"
}, {
  a: "-4bc82dba903fedec0a079f7ae4fa6bd6befa",
  b: "0",
  r: "-4bc82dba903fedec0a079f7ae4fa6bd6befa"
}, {
  a: "43969b4db0d921d9f0ca68f74e4e4b9073732a7955a5b4571",
  b: "-91",
  r: "872d369b61b243b3e194d1ee9c9c9720e6e654f2ab4b68ae2000000000000000000000000000000000000"
}, {
  a: "495f57",
  b: "-a5",
  r: "92beae00000000000000000000000000000000000000000"
}, {
  a: "-22109b99d3025aaef5c3fbd27420a72",
  b: "45d",
  r: "-1"
}, {
  a: "b3f6b156f4afcf259efd3cd1",
  b: "c7",
  r: "0"
}, {
  a: "137aeeadc8d1395042e80393cc1b6a1c7b6e526ab1b6fc2f2859fd70e0c29df2802",
  b: "f49",
  r: "0"
}, {
  a: "70f51026476e43bd7e911d37a4553701",
  b: "33",
  r: "e1ea204c8edc877afd2"
}, {
  a: "-3f935a89481c85d666498cf64fdc2a57028f7b295621dc665c0442229563",
  b: "-2",
  r: "-fe4d6a2520721759992633d93f70a95c0a3deca5588771997011088a558c"
}, {
  a: "-c3",
  b: "-87",
  r: "-618000000000000000000000000000000000"
}, {
  a: "aae225520f630c0dfbb815f121836612d75a1f65a301461cd05ad0a741496",
  b: "-4",
  r: "aae225520f630c0dfbb815f121836612d75a1f65a301461cd05ad0a7414960"
}, {
  a: "a5348f9af939041cc6ed386c060619a42f30c4aa8",
  b: "95",
  r: "529a"
}, {
  a: "-4c27fc7e3892a6a5b517",
  b: "-6c",
  r: "-4c27fc7e3892a6a5b517000000000000000000000000000"
}, {
  a: "98efd35f2239f7efde9aef42ad0acd835e68ad868a2cd8fac260f1c7496e3fd2ada76",
  b: "0",
  r: "98efd35f2239f7efde9aef42ad0acd835e68ad868a2cd8fac260f1c7496e3fd2ada76"
}, {
  a: "-92f0264c863bdf66d4c83e8bf812123d759b4",
  b: "-96",
  r: "-24bc0993218ef7d9b5320fa2fe04848f5d66d00000000000000000000000000000000000000"
}, {
  a: "ec6341ff2b0e9cf8721e2eb4ec9c9",
  b: "74",
  r: "0"
}, {
  a: "-32de8dced947fa55cd0b91332a81f70",
  b: "-5b",
  r: "-196f46e76ca3fd2ae685c8999540fb800000000000000000000000"
}, {
  a: "-3ef43bf8610f6533526ba734e85eafa04cd50a3",
  b: "-25",
  r: "-7de877f0c21eca66a4d74e69d0bd5f4099aa146000000000"
}, {
  a: "-9979591a367a32ae0039c54fd0f3d9e0ccc80be52b7e517fc94d9f3587dc54d933bb",
  b: "0",
  r: "-9979591a367a32ae0039c54fd0f3d9e0ccc80be52b7e517fc94d9f3587dc54d933bb"
}];

var error_count = 0;
for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var a = BigInt.parseInt(d.a, 16);
  var b = BigInt.parseInt(d.b, 16);
  var r = a >> b;
  if (d.r !== r.toString(16)) {
    print("Input A:  " + a.toString(16));
    print("Input B:  " + b.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    print("Op: >>");
    error_count++;
  }
}
if (error_count !== 0) {
  print("Finished with " + error_count + " errors.")
  quit(1);
}