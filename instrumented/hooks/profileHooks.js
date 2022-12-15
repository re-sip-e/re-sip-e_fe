function cov_n412b2tpb() {
  var path = "/Users/piperjarrett/mod3/re-sip-e_fe/src/hooks/profileHooks.js";
  var hash = "0025486950ca66ca9832b24f46d8e98d6b5fc036";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/piperjarrett/mod3/re-sip-e_fe/src/hooks/profileHooks.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 24
        },
        end: {
          line: 16,
          column: 4
        }
      },
      "1": {
        start: {
          line: 18,
          column: 27
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "2": {
        start: {
          line: 20,
          column: 37
        },
        end: {
          line: 24,
          column: 6
        }
      },
      "3": {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 36
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 27
          },
          end: {
            line: 18,
            column: 28
          }
        },
        loc: {
          start: {
            line: 18,
            column: 35
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0025486950ca66ca9832b24f46d8e98d6b5fc036"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_n412b2tpb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_n412b2tpb();
import { gql, useQuery } from "@apollo/client";
const GET_SINGLE_USER = (cov_n412b2tpb().s[0]++, gql`
query GetSingleUser{
    user(id: 1) {
      id
      name
      barCount
      bars{
        id
        name
        drinkCount
      }
    }
  }`);
cov_n412b2tpb().s[1]++;
export const useUserData = id => {
  cov_n412b2tpb().f[0]++;
  const {
    loading,
    error,
    data
  } = (cov_n412b2tpb().s[2]++, useQuery(GET_SINGLE_USER, {
    variables: {
      id
    }
  }));
  cov_n412b2tpb().s[3]++;
  return {
    data,
    error,
    loading
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsIkdFVF9TSU5HTEVfVVNFUiIsInVzZVVzZXJEYXRhIiwiaWQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwidmFyaWFibGVzIl0sInNvdXJjZXMiOlsicHJvZmlsZUhvb2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuXG5jb25zdCBHRVRfU0lOR0xFX1VTRVIgPSBncWxgXG5xdWVyeSBHZXRTaW5nbGVVc2Vye1xuICAgIHVzZXIoaWQ6IDEpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBiYXJDb3VudFxuICAgICAgYmFyc3tcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkcmlua0NvdW50XG4gICAgICB9XG4gICAgfVxuICB9YDtcblxuZXhwb3J0IGNvbnN0IHVzZVVzZXJEYXRhID0gKGlkKSA9PiB7XG5cbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfU0lOR0xFX1VTRVIsIHtcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFTQSxHQUFHLEVBQUVDLFFBQVEsUUFBUSxnQkFBZ0I7QUFHOUMsTUFBTUMsZUFBZSw0QkFBR0YsR0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUFDO0FBRUwsT0FBTyxNQUFNRyxXQUFXLEdBQUlDLEVBQUUsSUFBSztFQUFBO0VBRS9CLE1BQU07SUFBRUMsT0FBTztJQUFFQyxLQUFLO0lBQUVDO0VBQUssQ0FBQyw0QkFBR04sUUFBUSxDQUFDQyxlQUFlLEVBQUU7SUFDdkRNLFNBQVMsRUFBRTtNQUNQSjtJQUNKO0VBQ0osQ0FBQyxDQUFDO0VBQUE7RUFDRixPQUFPO0lBQUVHLElBQUk7SUFBRUQsS0FBSztJQUFFRDtFQUFRLENBQUM7QUFDbkMsQ0FBQyJ9