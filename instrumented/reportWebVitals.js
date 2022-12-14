function cov_wrbjxnm6q() {
  var path = "/Users/piperjarrett/mod3/re-sip-e_fe/src/reportWebVitals.js";
  var hash = "ce1c541881639a96153fdae1f6788a82ee2a2a4b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/piperjarrett/mod3/re-sip-e_fe/src/reportWebVitals.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 24
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 10,
          column: 3
        }
      },
      "2": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 9,
          column: 7
        }
      },
      "3": {
        start: {
          line: 4,
          column: 6
        },
        end: {
          line: 4,
          column: 26
        }
      },
      "4": {
        start: {
          line: 5,
          column: 6
        },
        end: {
          line: 5,
          column: 26
        }
      },
      "5": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 6,
          column: 26
        }
      },
      "6": {
        start: {
          line: 7,
          column: 6
        },
        end: {
          line: 7,
          column: 26
        }
      },
      "7": {
        start: {
          line: 8,
          column: 6
        },
        end: {
          line: 8,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1,
            column: 39
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 3,
            column: 31
          }
        },
        loc: {
          start: {
            line: 3,
            column: 79
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }, {
          start: {
            line: 2,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 2,
            column: 6
          },
          end: {
            line: 2,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 2,
            column: 6
          },
          end: {
            line: 2,
            column: 17
          }
        }, {
          start: {
            line: 2,
            column: 21
          },
          end: {
            line: 2,
            column: 52
          }
        }],
        line: 2
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ce1c541881639a96153fdae1f6788a82ee2a2a4b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_wrbjxnm6q = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_wrbjxnm6q();
cov_wrbjxnm6q().s[0]++;
const reportWebVitals = onPerfEntry => {
  cov_wrbjxnm6q().f[0]++;
  cov_wrbjxnm6q().s[1]++;
  if ((cov_wrbjxnm6q().b[1][0]++, onPerfEntry) && (cov_wrbjxnm6q().b[1][1]++, onPerfEntry instanceof Function)) {
    cov_wrbjxnm6q().b[0][0]++;
    cov_wrbjxnm6q().s[2]++;
    import('web-vitals').then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      cov_wrbjxnm6q().f[1]++;
      cov_wrbjxnm6q().s[3]++;
      getCLS(onPerfEntry);
      cov_wrbjxnm6q().s[4]++;
      getFID(onPerfEntry);
      cov_wrbjxnm6q().s[5]++;
      getFCP(onPerfEntry);
      cov_wrbjxnm6q().s[6]++;
      getLCP(onPerfEntry);
      cov_wrbjxnm6q().s[7]++;
      getTTFB(onPerfEntry);
    });
  } else {
    cov_wrbjxnm6q().b[0][1]++;
  }
};
export default reportWebVitals;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXBvcnRXZWJWaXRhbHMiLCJvblBlcmZFbnRyeSIsIkZ1bmN0aW9uIiwidGhlbiIsImdldENMUyIsImdldEZJRCIsImdldEZDUCIsImdldExDUCIsImdldFRURkIiXSwic291cmNlcyI6WyJyZXBvcnRXZWJWaXRhbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVwb3J0V2ViVml0YWxzID0gb25QZXJmRW50cnkgPT4ge1xuICBpZiAob25QZXJmRW50cnkgJiYgb25QZXJmRW50cnkgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGltcG9ydCgnd2ViLXZpdGFscycpLnRoZW4oKHsgZ2V0Q0xTLCBnZXRGSUQsIGdldEZDUCwgZ2V0TENQLCBnZXRUVEZCIH0pID0+IHtcbiAgICAgIGdldENMUyhvblBlcmZFbnRyeSk7XG4gICAgICBnZXRGSUQob25QZXJmRW50cnkpO1xuICAgICAgZ2V0RkNQKG9uUGVyZkVudHJ5KTtcbiAgICAgIGdldExDUChvblBlcmZFbnRyeSk7XG4gICAgICBnZXRUVEZCKG9uUGVyZkVudHJ5KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwb3J0V2ViVml0YWxzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFmWixNQUFNQSxlQUFlLEdBQUdDLFdBQVcsSUFBSTtFQUFBO0VBQUE7RUFDckMsSUFBSSw0QkFBQUEsV0FBVyxpQ0FBSUEsV0FBVyxZQUFZQyxRQUFRLEdBQUU7SUFBQTtJQUFBO0lBQ2xELE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFBRUMsTUFBTTtNQUFFQyxNQUFNO01BQUVDLE1BQU07TUFBRUMsTUFBTTtNQUFFQztJQUFRLENBQUMsS0FBSztNQUFBO01BQUE7TUFDekVKLE1BQU0sQ0FBQ0gsV0FBVyxDQUFDO01BQUM7TUFDcEJJLE1BQU0sQ0FBQ0osV0FBVyxDQUFDO01BQUM7TUFDcEJLLE1BQU0sQ0FBQ0wsV0FBVyxDQUFDO01BQUM7TUFDcEJNLE1BQU0sQ0FBQ04sV0FBVyxDQUFDO01BQUM7TUFDcEJPLE9BQU8sQ0FBQ1AsV0FBVyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztFQUNKLENBQUM7SUFBQTtFQUFBO0FBQ0gsQ0FBQztBQUVELGVBQWVELGVBQWUifQ==