function cov_18viqj0m4w() {
  var path = "/Users/piperjarrett/mod3/re-sip-e_fe/src/hooks/useBarData.js";
  var hash = "6a17d4238dd3309b00ed17962f8b542bc1b057cc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/piperjarrett/mod3/re-sip-e_fe/src/hooks/useBarData.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 26
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "2": {
        start: {
          line: 19,
          column: 35
        },
        end: {
          line: 23,
          column: 4
        }
      },
      "3": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 26
          },
          end: {
            line: 18,
            column: 27
          }
        },
        loc: {
          start: {
            line: 18,
            column: 34
          },
          end: {
            line: 25,
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
    hash: "6a17d4238dd3309b00ed17962f8b542bc1b057cc"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_18viqj0m4w = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_18viqj0m4w();
import { gql, useQuery } from "@apollo/client";
const GET_BAR_DATA = (cov_18viqj0m4w().s[0]++, gql`
  query GetBarData($id: ID!) {
    bar(id: $id) {
      id
      name
      drinkCount
      drinks {
        id
        name
        imgUrl
      }
    }
  }
`);
cov_18viqj0m4w().s[1]++;
export const useBarData = id => {
  cov_18viqj0m4w().f[0]++;
  const {
    loading,
    error,
    data
  } = (cov_18viqj0m4w().s[2]++, useQuery(GET_BAR_DATA, {
    variables: {
      id
    }
  }));
  cov_18viqj0m4w().s[3]++;
  return {
    data,
    error,
    loading
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsIkdFVF9CQVJfREFUQSIsInVzZUJhckRhdGEiLCJpZCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJ2YXJpYWJsZXMiXSwic291cmNlcyI6WyJ1c2VCYXJEYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgR0VUX0JBUl9EQVRBID0gZ3FsYFxuICBxdWVyeSBHZXRCYXJEYXRhKCRpZDogSUQhKSB7XG4gICAgYmFyKGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkcmlua0NvdW50XG4gICAgICBkcmlua3Mge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGltZ1VybFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHVzZUJhckRhdGEgPSAoaWQpID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0JBUl9EQVRBLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVNBLEdBQUcsRUFBRUMsUUFBUSxRQUFRLGdCQUFnQjtBQUU5QyxNQUFNQyxZQUFZLDZCQUFHRixHQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFBQztBQUVGLE9BQU8sTUFBTUcsVUFBVSxHQUFJQyxFQUFFLElBQUs7RUFBQTtFQUNoQyxNQUFNO0lBQUVDLE9BQU87SUFBRUMsS0FBSztJQUFFQztFQUFLLENBQUMsNkJBQUdOLFFBQVEsQ0FBQ0MsWUFBWSxFQUFFO0lBQ3RETSxTQUFTLEVBQUU7TUFDVEo7SUFDRjtFQUNGLENBQUMsQ0FBQztFQUFDO0VBQ0gsT0FBTztJQUFFRyxJQUFJO0lBQUVELEtBQUs7SUFBRUQ7RUFBUSxDQUFDO0FBQ2pDLENBQUMifQ==